from django.contrib import admin
from .models import Blog, Category, Contact, Feedback

admin.site.register(Blog)
admin.site.register(Category)
admin.site.register(Contact)
admin.site.register(Feedback)
admin.site.site_header = "Tech Blogs"
