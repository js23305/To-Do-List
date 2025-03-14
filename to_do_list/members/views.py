from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.http import JsonResponse

def members(request):
    template = loader.get_template('.html')
    return HttpResponse(template.render())

def index(request):
    return render(request, 'index.html')

def fitness(request):
    return render(request, 'fitness.html')

def important(request):
    return render(request, 'important.html')

def notes(request):
    return render(request, 'notes.html')

def personal(request):
    return render(request, 'personal.html')

def shopping(request):
    return render(request, 'shopping.html')

def work(request):
    return render(request, 'work.html')

# Takes in data and stores it in the database
# savingtask is the name of the function
def storeTaskInDatabase(formData): 

    print("Data received: ", formData)

    return JsonResponse({
        "message": "Data successfully uploaded to Firebase",
        "status_code": 200
    }) 
