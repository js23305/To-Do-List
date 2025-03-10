from django.urls import path
from . import views
from .views import members, storeTaskInDatabase

urlpatterns = [
    path('members/', members, name='.members'),
    path('storeTaskInDatabase/', storeTaskInDatabase, name='.storeTaskInDatabase'),
]