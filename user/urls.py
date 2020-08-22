from django.urls import path
from . import views


urlpatterns = [
    path('sms', views.sms_view),
    path('verifyPswd',views.verify_pswd),
    path('verify',views.sms_view),
    path('confirm',views.confirm_view),
    path('bindnew',views.bind_phone),
    path('<str:username>', views.UserViews.as_view()),
    path('<str:username>/avatar', views.user_avatar),
    path('change/<str:username>',views.change_info),
]




