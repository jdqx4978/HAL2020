from django.db import models


# Create your models here.
class UserProfile(models.Model):
    username = models.CharField('用户名', max_length=30, unique=True)
    password = models.CharField('密码', max_length=32)
    nickname = models.CharField('昵称', max_length=30)
    gender = models.CharField('性别', max_length=11,default='0')
    avatar = models.ImageField('头像', upload_to='avatar',default='hello.png')
    birthday_day = models.CharField('出生日期', max_length=20)
    phone = models.CharField('手机号码', max_length=11)
    email = models.CharField('邮箱', max_length=50)
    created_time = models.DateField('创建时间', auto_now_add=True)
    updated_time = models.DateTimeField('更新时间', auto_now=True)
