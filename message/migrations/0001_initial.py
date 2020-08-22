# Generated by Django 2.2.12 on 2020-08-12 10:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('community', '0007_delete_message'),
        ('user', '0002_auto_20200808_1040'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(max_length=100, verbose_name='留言回复内容')),
                ('created_time', models.DateTimeField(auto_now_add=True)),
                ('parent_message', models.IntegerField(default=0, verbose_name='回复留言的ID')),
                ('publisher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.UserProfile')),
                ('topic', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='community.Article')),
            ],
        ),
    ]