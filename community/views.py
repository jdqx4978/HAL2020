import html
import json

from django.contrib import auth
from django.db.models import Count
from django.http import HttpResponseRedirect, JsonResponse
from django.shortcuts import render

from message.models import Message
from tools.logging_dec import logging_check
from django.views import View
from user.models import UserProfile
from .models import Article
from django.db.models.functions import TruncMonth


# Create your views here.


def index(request):
    article_list = Article.objects.all()
    # return render(request, 'bbs.html', locals())
    return render(request, 'bbs.html', locals())


@logging_check
def info_view(request):
    user = request.myuser
    birthday = user.birthday_day
    phone = user.phone
    result = {'code': 200, 'username': user.username,'birthday':birthday,'phone':phone}
    return JsonResponse(result)


def content_view(request):
    try:
        all_article = Article.objects.all()
    except Exception as e:
        print(e)
        result = {'code': 10001, 'error': 'fail to  get info '}
        return JsonResponse(result)
    result = {'code': 200, 'data': {}}
    article = []
    for k in all_article:
        d = {}
        d['id'] = k.id
        d['content'] = k.content
        d['like'] = k.like
        d['created_time'] = k.created_time
        d['images'] = str(k.images)
        d['avatar'] = str(k.author.avatar)
        d['author'] = k.author.nickname
        article.append(d)
    result['data']['topics'] = article
    return JsonResponse(result)


def site_view(request, username, *args, **kwargs):
    user = UserProfile.objects.filter(username=username).first()
    if not user:
        return render(request, 'error.html')

    article_list = user.article_set.all()

    year_ret = Article.objects.all().annotate(month=TruncMonth('created_time')).values('month').annotate(
        c=Count('author')).values_list('month', 'c')
    time = kwargs.get('time')
    if time:
        year_t = time.split('-')
        article_list = article_list.filter(created_time__year=year_t[0], created_time__month=year_t[1])
    return render(request, 'site_page.html', locals())


def detail_view(request, username, id, *args, **kwargs, ):
    user = UserProfile.objects.filter(username=username).first()
    if not user:
        return render(request, 'error.html')
    year_ret = Article.objects.all().annotate(month=TruncMonth('created_time')).values('month').annotate(
        c=Count('author')).values_list('month', 'c')
    article = Article.objects.filter(id=id).first()
    return render(request, 'article_detail.html', locals())


def get_message(request, username):
    author = UserProfile.objects.get(username=username)
    t_id = request.GET.get('t_id')
    author_topic = Article.objects.get(id=t_id, author=author)
    all_messages = Message.objects.filter(topic=author_topic).order_by('-created_time')
    m_count = 0
    msg_list = []
    reply_dict = {}
    for msg in all_messages:
        if msg.parent_message:
            # 回复
            reply_dict.setdefault(msg.parent_message, [])
            reply_dict[msg.parent_message].append({'msg_id': msg.id, 'publisher': msg.publisher.nickname,
                                                   'publisher_avatar': str(msg.publisher.avatar),
                                                   'content': msg.content,
                                                   'created_time': msg.created_time.strftime('%Y-%m-%d %H:%M:%S')})
        else:
            # 留言
            m_count += 1
            msg_list.append({'id': msg.id, 'content': msg.content, 'publisher': msg.publisher.nickname,
                             'publisher_avatar': str(msg.publisher.avatar),
                             'created_time': msg.created_time.strftime('%Y-%m-%d %H:%M:%S'), 'reply': []})
    # 关联 留言和回复
    for m in msg_list:
        if m['id'] in reply_dict:
            m['reply'] = reply_dict[m['id']]

    result = {'code': 200, 'data': {}}
    result['data']['nickname'] = author.nickname
    result['data']['title'] = author_topic.title
    result['data']['created_time'] = author_topic.created_time.strftime('%Y-%m-%d %H:%M:%S')
    result['data']['content'] = author_topic.content
    result['data']['author'] = author.nickname
    # TODO 留言相关为假数据
    result['data']['messages'] = msg_list
    result['data']['messages_count'] = m_count
    return JsonResponse(result)


def post_article(request, username):
    author = UserProfile.objects.get(username=username)
    json_str = request.body
    json_obj = json.loads(json_str)
    title = json_obj['title']
    title = html.escape(title)
    content = json_obj['content_text']
    Article.objects.create(title=title, content=content, author=author)
    # 删除相关缓存
    # clear_topics_caches(request)
    return JsonResponse({'code': 200, 'username': author.username})


@logging_check
def delete_view(request):
    json_str = request.body
    json_obj = json.loads(json_str)
    author = request.myuser
    article_id = json_obj['article_id']
    print('--------' + article_id)
    try:
        article = Article.objects.filter(id=article_id, author=author).first()
    except Exception as e:
        print('e')
        result = {'code': 10103, 'error': 'delete is error'}
        return JsonResponse(result)

    article.delete()
    result = {'code': 200}
    return JsonResponse(result)
