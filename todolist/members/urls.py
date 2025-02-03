from django.urls import path
from . import views

urlpatters = [
    path('', views.home, name='home'),
    path('delete/<int:pk>/', views.delete_task, name='delete_task'),
    path('complete/<int:pk>/',views.complete_task,name='complete_task'),
]