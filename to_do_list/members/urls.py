from django.urls import path
from . import views 

urlpatterns = [
    path('', views.index, name='index'),
    path('fitness/', views.fitness, name='fitness'),
    path('important/', views.important, name='important'),
    path('notes/', views.notes, name='notes'),
    path('personal/', views.personal, name='personal'),
    path('shopping/', views.shopping, name='shopping'),
    path('work/', views.work, name='work'),
    path('members/', views.members, name='.members'),
    path('storeTaskInDatabase/', views.storeTaskInDatabase, name='.storeTaskInDatabase'),
]