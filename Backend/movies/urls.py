from django.urls import path
from .views import movie_list, movie_detail

urlpatterns = [
    path('movies/', movie_list, name='movie_list'),  # GET, POST
    path('movies/<int:pk>/', movie_detail, name='movie_detail'),  # GET, DELETE
]
