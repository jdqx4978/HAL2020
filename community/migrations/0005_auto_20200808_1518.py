# Generated by Django 2.2.12 on 2020-08-08 07:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('community', '0004_article_titile'),
    ]

    operations = [
        migrations.RenameField(
            model_name='article',
            old_name='titile',
            new_name='title',
        ),
    ]
