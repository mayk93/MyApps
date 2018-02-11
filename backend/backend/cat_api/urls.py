from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

from . import views

app_name = 'cat_api'

# router = DefaultRouter()
# router.register(r'', views.cat_api, base_name="cat_api")

urlpatterns = [
    url(r'cat_api', views.cat_api),
]