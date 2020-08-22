from django.db import models
from community.models import Article
# Create your models here.
from user.models import UserProfile


class Message(models.Model):
    topic = models.ForeignKey(Article, on_delete=models.CASCADE)
    content = models.CharField(max_length=100, verbose_name='留言回复内容')
    publisher = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    created_time = models.DateTimeField(auto_now_add=True)
    parent_message = models.IntegerField(verbose_name='回复留言的ID', default=0)
