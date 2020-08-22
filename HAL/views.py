import json

from django.contrib import auth
from django.db import transaction
from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render

from community.models import Article
from tools.logging_dec import logging_check
from django.db.models import F

from user.models import UserProfile


def index_view(request):
    return render(request, 'test.html')


def login_view(request):
    return render(request, 'login.html')


def register_view(request):
    return render(request, 'register.html')


def logout_view(request):
    result = {'code': 200}
    return JsonResponse(result)


def release_view(request):
    return render(request, 'release.html')


def center_view(request, username):
    try:
        user = UserProfile.objects.get(username=username)
    except Exception as e:
        print(e)
        return render(request, 'error.html')
    return render(request, 'user_center_info.html', locals())


def center_safe(request, username):
    try:
        user = UserProfile.objects.get(username=username)
    except Exception as e:
        print(e)
        return render(request, 'error.html')
    return render(request, 'center_safe.html', locals())


def center_avatar(request, username):
    try:
        user = UserProfile.objects.get(username=username)
    except Exception as e:
        print(e)
        return render(request, '404.html')
    avatar = str(user.avatar)
    nickname = user.nickname
    return render(request, 'change_avatar.html', locals())


def password_view(request, username):
    return render(request, 'verify.html')


def passwdByPhone(request):
    return render(request, 'changepswd1.html')


def verify_pass(request):
    return render(request, 'changepswd2.html')


def result_view(request):
    return render(request, 'changepswd3.html')


# @logging_check
# def diggit_view(request):
#     user_id = request.myuser.id
#     json_str = request.body
#     json_obj = json.loads(json_str)
#     is_up = json_obj['is_up']
#     print(is_up)
#     article_id = json_obj['article_id']
#     up_ret = Article.objects.filter(author=user_id, id=article_id).first()
#     if up_ret:
#         result = {'code': 10002, 'error': '你已点过'}
#         return JsonResponse(result)
#     else:
#         article = Article.objects.get(author=user_id, id=article_id, is_up=is_up)
#         with transaction.atomic():
#             if is_up:
#                 Article.objects.filter(id=article_id).update(like=F('like') + 1)
#                 result = {'code': 200}
#                 return JsonResponse(result)
def bindphone_view(request):
    return render(request, 'bindphone1.html')


def verify_phone(request):
    return render(request,'bindphon2.html')


def result_1_view(request):
    return render(request,'re')