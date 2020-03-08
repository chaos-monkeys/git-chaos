"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
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
from django.conf.urls import url
from django.http import HttpResponse
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)


from organisations.views import OrganisationList, OrganisationDetail
from repositories.views import RepositoryDetail

router = [
    # Organisation
    path('organisations/', OrganisationList.as_view()),
    path('<str:organisation_name>/', OrganisationDetail.as_view()),
    # Repository
    path('<str:organisation_name>/<str:repository_name>/', RepositoryDetail.as_view()),
    # Collaborators
]

auth_urls = [
    url(r'get_token/', TokenObtainPairView.as_view()),
    url(r'refresh_token/', TokenRefreshView.as_view()),
    url(r'verify_token/', TokenVerifyView.as_view()),
]

urlpatterns = [
    url(r'^api/auth/', include(auth_urls)),
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^api/check/', lambda request: HttpResponse()),
    path('api/v1/', include(router)),
    path('admin/', admin.site.urls),
]
