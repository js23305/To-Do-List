from django.shortcuts import render, redirect
from .models import Task
from .forms import TaskForm

def home(request):
    tasks = Task.objects.all()
    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('home')
    return render(request, 'home.html', {'tasks': tasks})

def delete_task(request, pk):
    task = Task.objects.get(id=pk)
    task.delete()
    return redirect('home')

def complete_task(request, pk):
    task = Task.objects.get(id=pk)
    task.is_done = True
    task.save()
    return redirect('home')
