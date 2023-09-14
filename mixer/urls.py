from django.urls import path

from . import views

urlpatterns = [
    path('', views.mixer_view, name='mixer'),
]
