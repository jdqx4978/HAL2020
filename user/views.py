import json
import hashlib
import random
from _md5 import md5

from django.http import JsonResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.views import View
from user.models import UserProfile, GoodsBrowser
from btoken.views import make_token
from tools.logging_dec import logging_check
from django.core.cache import cache
from django.conf import settings
from tools.sms import YunTongXin
from . import user_decorator
from .tasks import send_sms_c


# 10100-10199


# Create your views here.
# FBV function based view
def user_view(request):
    if request.method == 'GET':
        # 获取数据
        pass
    elif request.method == 'POST':
        pass
    elif request.method == 'PUT':
        pass


# CBV class based view
class UserViews(View):
    # 若接到未定义方法的 http动作，视图类返回405响应

    def get(self, request, username=None):

        if username:
            # v1/users/<str:username> #获取指定用户数据
            try:
                user = UserProfile.objects.get(username=username)
            except Exception as e:
                print('--get get user error %s' % (e))
                result = {'code': 10104, 'error': 'user error'}
                return JsonResponse(result)

            if request.GET.keys():
                # 按具体字段返回
                data = {}
                for k in request.GET.keys():
                    if k == 'password':
                        continue
                    # TODO 注意avatar
                    if hasattr(user, k):
                        data[k] = getattr(user, k)
                result = {'code': 200, 'username': username, 'data': data}
            else:

                result = {'code': 200, 'username': username,
                          'data': {'info': user.info, 'sign': user.sign, 'nickname': user.nickname,
                                   'avatar': str(user.avatar)}}

            return JsonResponse(result)

        else:
            # v1/users 获取所有用户数据
            pass

        return JsonResponse({'code': 200})

    def post(self, request):

        json_str = request.body
        json_obj = json.loads(json_str)
        if not json_str:
            result = {'code': 10100, 'error': 'no date'}
            return JsonResponse(result)
        # {'username': 'guoxiaonao', 'email': 'aaa@qq.com', 'password_1': '123456', 'password_2': '123456'}

        username = json_obj['username']
        email = json_obj['email']
        password_1 = json_obj['password_1']
        password_2 = json_obj['password_2']
        phone = json_obj['phone']
        sms_num = json_obj['sms_num']

        # 校验验证码
        code_cache_key = 'sms_%s' % (phone)
        old_code = cache.get(code_cache_key)

        if old_code != int(sms_num):
            return JsonResponse({'code': 10111, 'error': "The code is error"})

        # 校验用户名是否可用
        old_users = UserProfile.objects.filter(username=username)
        if old_users:
            # 当前用户名已注册
            result = {'code': 10101, 'error': 'The username is already existed'}
            return JsonResponse(result)
        # 密码做md5
        if password_1 != password_2:
            result = {'code': 10102, 'error': 'The password is not same'}
            return JsonResponse(result)

        m = hashlib.md5()
        m.update(password_1.encode())
        # 创建用户 - UserProfile插入数据
        try:
            user = UserProfile.objects.create(username=username, nickname=username, phone=phone, password=m.hexdigest(),
                                              email=email)
        except Exception as e:
            print('create user error is %s' % (e))
            result = {'code': 10103, 'error': 'The username is already existed'}
            return JsonResponse(result)

        # 签发token - 免登陆1天
        token = make_token(username)
        return JsonResponse({'code': 200, 'username': username, 'data': {'token': token.decode()}})

    @method_decorator(logging_check)
    def put(self, request, username=None):

        json_str = request.body
        json_obj = json.loads(json_str)
        sign = json_obj['sign']
        info = json_obj['info']
        nickname = json_obj['nickname']

        user = UserProfile.objects.get(username=username)
        user.sign = sign
        user.info = info
        user.nickname = nickname

        user.save()
        return JsonResponse({'code': 200, 'username': username})


@logging_check
def user_avatar(request, username=None):
    if request.method != 'POST':
        result = {'code': 10108, 'error': 'Please use POST'}
        return JsonResponse(result)
    # 获取当前登录用户
    user = request.myuser
    user.avatar = request.FILES['avatar']
    user.save()
    return JsonResponse({'code': 200})


def sms_view(request):
    json_str = request.body
    json_obj = json.loads(json_str)
    phone = json_obj.get('phone')

    # 检查当前是否有已经发送的随机码
    cache_key = 'sms_%s' % (phone)
    old_code = cache.get(cache_key)
    if old_code:
        result = {'code': 10109, 'error': 'You have a old code'}
        return JsonResponse(result)
    code = random.randint(1000, 9999)
    # 存储发送的验证码
    cache.set(cache_key, code, 60)
    # 发送验证码
    # celery版本
    send_sms_c.delay(phone, code)
    # TODO 如果是非正常， redis中 code 删除
    return JsonResponse({'code': 200})


@logging_check
def change_info(request, username):
    json_str = request.body
    json_obj = json.loads(json_str)
    nickname = json_obj['nickname']
    gender = json_obj['gender']
    birthday = json_obj['birthday']

    try:
        user = UserProfile.objects.get(username=username)
    except Exception as e:
        print(e)
        result = {'code': 10112, 'error': 'user is error'}
        return JsonResponse(result)
    user.nickname = nickname
    user.gender = gender
    user.birthday_day = birthday
    user.save()

    result = {'code': 200}
    return JsonResponse(result)


@logging_check
def user_avatar(request, username=None):
    if request.method != 'POST':
        result = {'code': 10108, 'error': 'Please use POST'}
        return JsonResponse(result)
    # 获取当前登录用户
    user = request.myuser
    user.avatar = request.FILES['avatar']
    user.save()
    return JsonResponse({'code': 200})


def confirm(request):
    json_str = request.body
    json_obj = json.loads(json_str)
    if not json_str:
        result = {'code': 10100, 'error': 'no data'}
        return JsonResponse(result)
    phone = json_obj['phone']
    sms_num = json_obj['sms_num']
    # 校验验证码
    code_cache_key = 'sms_%s' % (phone)
    old_code = cache.get(code_cache_key)
    if old_code != int(sms_num):
        return JsonResponse({'code': 10111, 'error': "The code is error"})
    return phone


def confirm_view(request):
    verify = confirm(request)
    result = {'code': 200}
    return JsonResponse(result)


@logging_check
def verify_pswd(request):
    json_str = request.body
    json_obj = json.loads(json_str)
    if not json_str:
        result = {'code': 10100, 'error': 'no date'}
        return JsonResponse(result)
    password_1 = json_obj['password1']
    password_2 = json_obj['password2']
    if password_1 != password_2:
        result = {'code': 10102, 'error': 'The password is not same'}
        return JsonResponse(result)

    m = hashlib.md5()
    m.update(password_1.encode())
    user = request.myuser
    user.password = m.hexdigest()
    user.save()
    result = {'code': 200}
    return JsonResponse(result)


@logging_check
def bind_phone(request):
    phone = confirm(request)
    user = request.myuser
    user.phone = phone
    user.save()
    result = {'code': 200}
    return JsonResponse(result)


def register(request):
    context = {
        'title': '用户注册',
    }
    return render(request, 'user/register.html', context)


def register_handle(request):
    username = request.POST.get('user_name')
    password = request.POST.get('pwd')
    confirm_pwd = request.POST.get('confirm_pwd')
    email = request.POST.get('email')

    # 判断两次密码一致性
    if password != confirm_pwd:
        return redirect('/v1/user/register')
    # 密码加密
    s1 = md5()
    s1.update(password.encode('utf8'))
    encrypted_pwd = s1.hexdigest()
    # 创建对象
    UserProfile.objects.create(username=username, password=encrypted_pwd, email=email)
    # 注册成功
    context = {
        'title': '用户登陆',
        'username': username,
    }
    return render(request, 'user/login.html', context)


def register_exist(request):
    username = request.GET.get('uname')
    count = UserProfile.objects.filter(username=username).count()
    return JsonResponse({'count': count})


def login(request):
    uname = request.COOKIES.get('uname', '')
    context = {
        'title': '用户登陆',
        'error_name': 0,
        'error_pwd': 0,
        'uname': uname,
    }
    return render(request, 'user/login.html', context)


def login_handle(request):  # 没有利用ajax提交表单
    # 接受请求信息
    uname = request.POST.get('username')
    upwd = request.POST.get('pwd')
    jizhu = request.POST.get('jizhu', 0)
    users = UserProfile.objects.filter(username=uname)
    if len(users) == 1:  # 判断用户密码并跳转
        s1 = md5()
        s1.update(upwd.encode('utf8'))
        if s1.hexdigest() == users[0].password:
            url = request.COOKIES.get('url', '/goods/index')
            red = HttpResponseRedirect(url)  # 继承与HttpResponse 在跳转的同时 设置一个cookie值
            # 是否勾选记住用户名，设置cookie
            if jizhu != 0:
                red.set_cookie('uname', uname)
            else:
                red.set_cookie('uname', '', max_age=-1)  # 设置过期cookie时间，立刻过期
            request.session['user_id'] = users[0].id
            request.session['user_name'] = uname
            return red
        else:
            context = {
                'title': '用户名登陆',
                'error_name': 0,
                'error_pwd': 1,
                'uname': uname,
                'upwd': upwd,
            }
            return render(request, 'user/login.html', context)
    else:
        context = {
            'title': '用户名登陆',
            'error_name': 1,
            'error_pwd': 0,
            'uname': uname,
            'upwd': upwd,
        }
        return render(request, 'user/login.html', context)


@user_decorator.login
def info(request):  # 用户中心
    username = request.session.get('user_name')
    user = UserProfile.objects.filter(username=username).first()
    browser_goods = GoodsBrowser.objects.filter(user=user).order_by("-browser_time")
    goods_list = []
    if browser_goods:
        goods_list = [browser_good.good for browser_good in browser_goods]  # 从浏览商品记录中取出浏览商品
        explain = '最近浏览'
    else:
        explain = '无最近浏览'

    context = {
        'title': '用户中心',
        'page_name': 1,
        'user_phone': user.phone,
        'user_address': user.addressinfo_set.all().first().addr,
        'user_name': username,
        'goods_list': goods_list,
        'explain': explain,
    }
    return render(request, 'user/user_center_info.html', context)


@user_decorator.login
def site(request):
    user = UserProfile.objects.get(id=request.session['user_id'])
    addrinfo = user.addressinfo_set.all()
    if request.method == "POST":
        name = request.POST.get('ushou')
        addr = request.POST.get('uaddress')
        postcode = request.POST.get('uyoubian')
        telephone = request.POST.get('uphone')
        user.addressinfo_set.create(name=name, addr=addr, postcode=postcode, telephone=telephone)
    context = {
        'page_name': 1,
        'title': '用户中心',
        'user': user,
        'addrinfo': addrinfo,
    }
    return render(request, 'user/user_center_site.html', context)


def logout(request):  # 用户登出
    request.session.flush()  # 清空当前用户所有session
    return redirect(reverse("index"))
