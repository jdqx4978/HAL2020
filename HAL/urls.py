"""HAL URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views
from btoken import views as btoken_views
from user import views as user_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('community/', include('community.urls')),
    path('cart/', include('cart.urls')),  # 购物车
    path('goods/', include('goods.urls')),  # 商品分类页面
    path('tinymce/', include('tinymce.urls')),  # 使用富文本编辑框配置confurl
    path('index', views.index_view),
    path('login', views.login_view),
    path('logout',views.logout_view),
    path('register',views.register_view),
    path('release',views.release_view),
    path('setpassword/phone',views.passwdByPhone),
    path('safe/bindphone',views.bindphone_view),
    path('verifyPhone',views.verify_phone),
    path('safe/<str:username>/setpassword',views.password_view),
    path('result1',views.result_1_view),
    path('result',views.result_view),
    path('center/<str:username>',views.center_view),
    path('avatar/<str:username>',views.center_avatar),
    path('safe/<str:username>',views.center_safe),
    path('verifyPasswd',views.verify_pass),
    path('v1/users', user_views.UserViews.as_view()),
    path('v1/users/', include('user.urls')),
    path('v1/tokens', btoken_views.token),
    path('v1/topics/',include('community.urls')),
    # path('diggit',views.diggit_view),
    path('v1/messages/', include('message.urls'))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



