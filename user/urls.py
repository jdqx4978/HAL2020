from django.urls import path
from . import views


urlpatterns = [
    path('sms', views.sms_view),
    path('login',views.login_handle),
    path('login_handle', views.login_handle),
    path('register', views.register),
    path('register_handle', views.register_handle),  # 注册用户请求页面
    path('register_exist', views.register_exist),
    path('verifyPswd',views.verify_pswd),
    path('verify',views.sms_view),
    path('confirm',views.confirm_view),
    path('bindnew',views.bind_phone),
    path('site', views.site),
    path('logout', views.logout),
    path('<str:username>', views.UserViews.as_view()),
    path('<str:username>/avatar', views.user_avatar),
    path('change/<str:username>',views.change_info),


]
