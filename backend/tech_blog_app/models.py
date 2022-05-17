from django.db import models
from datetime import datetime
from ckeditor.fields import RichTextField


class Category(models.Model):
    name = models.CharField(max_length=50, primary_key=True)

    class Meta:
        verbose_name_plural = "categories"

    def __str__(self):
        return self.name.capitalize()
        
    def is_active(self):
        return self.name()

class Blog(models.Model):
    title = models.CharField(max_length=100)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    slug = models.SlugField(default='', max_length=200)
    image = models.ImageField()
    image_alt = models.CharField(max_length=100)
    blog_text = RichTextField()
    date_upload = models.DateTimeField(default=datetime.now())

    class Meta:
        ordering = ['-date_upload',]
        
    def __str__(self):
        return self.title.capitalize()



class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=200)
    message = models.TextField(max_length=1000)

    def __str__(self):
        return self.name.capitalize()

class Feedback(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=200)
    comment = models.TextField(max_length=1000)

    def __str__(self):
        return self.name.capitalize() 
