from django.urls import path
from . import views

urlpatterns = [
    path('api/blog/', views.BlogList.as_view(), name = 'bloglist'),
    path('api/blog/<int:pk>/', views.BlogDetails.as_view(), name = 'blog'),
    path('api/contact/', views.ContactList.as_view(), name = 'contactlist'),
    path('api/contact/<int:pk>/', views.ContactDetails.as_view(), name = 'contact'),
    path('api/category/', views.CategoryList.as_view(), name = 'categorylist'),
    path('api/category/<int:pk>/', views.CategoryDetails.as_view(), name = 'category'),
    path('api/feedback/', views.FeedbackList.as_view(), name = 'feedbacklist'),
    path('api/feedback/<int:pk>/', views.FeedbackDetails.as_view(), name = 'feedback'),
]