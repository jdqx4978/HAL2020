from django.urls import path

from . import views

urlpatterns = [
    path('index', views.index),
    #放到最后
    path('info',views.info_view),
    path('message',views.content_view),
    path('<str:username>/archive/<str:time>', views.site_view),
    path('<str:username>/article/<int:id>',views.detail_view),
    path('v1/article/<str:username>',views.get_message),
    path('v1/del',views.delete_view),
    path('release/<str:username>',views.post_article),
    path('<str:username>',views.site_view),

]
