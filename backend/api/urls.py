from django.urls import path
from . import views

urlpatterns = [
    path('blog/', views.BlogList.as_view(), name = 'bloglist'),
    path('blog/<int:pk>/', views.BlogDetails.as_view(), name = 'blog'),
    path('contact/', views.ContactList.as_view(), name = 'contactlist'),
    path('contact/<int:pk>/', views.ContactDetails.as_view(), name = 'contact'),
    path('category/', views.CategoryList.as_view(), name = 'categorylist'),
    path('category/<int:pk>/', views.CategoryDetails.as_view(), name = 'category'),
    path('feedback/', views.FeedbackList.as_view(), name = 'feedbacklist'),
    path('feedback/<int:pk>/', views.FeedbackDetails.as_view(), name = 'feedback'),
]