from django.shortcuts import redirect, render
from django.contrib import messages
from .models import Blog, Category
from .forms import ContactForm, FeedbackForm

def index(request):
    blog = Blog.objects.all().order_by('-date_upload')
    categories = Category.objects.all()
    return render(request, 'index.html', {'blog' : blog, 'categories':categories})

def categories(request, name):
    listcat = Category.objects.all()
    categories = Category.objects.filter(name=name)
    blog = Blog.objects.filter(category = name).order_by('-date_upload')
    context = {'categories':categories, 'blog': blog, 'listcat': listcat}
    return render(request, 'categories.html', context)

def about(request):
    return render(request, 'about.html')

def contact(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your message is received We will contact you shortly.')
            return redirect('contact')
    return render(request, 'contact.html')

def blog(request,slug):
    if request.method == "POST":
        form = FeedbackForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'We love to hear from our adoring fans. Thank you for your feedback.')
            return redirect('blog', slug=slug)
    blog = Blog.objects.filter(slug=slug)
    categories = Category.objects.all()
    context = {'blog' : blog, 'categories':categories}
    return render(request, 'opened-blog.html', context)
