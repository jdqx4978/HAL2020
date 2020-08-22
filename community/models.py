from django.db import models
from django.contrib.auth.models import AbstractUser
from user.models import UserProfile


# Create your models here.


# 文章表
class Article(models.Model):
    title = models.CharField(verbose_name='标题', max_length=30, default='')
    content = models.TextField(verbose_name='文章内容')
    images = models.ImageField(upload_to='content', default='', verbose_name='图片')
    like = models.IntegerField(verbose_name='点赞', default=0)
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
