from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.http import JsonResponse

def members(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render())

# Takes in data and stores it in the database
# savingtask is the name of the function
def storeTaskInDatabase(formData): 

    print("Data received: ", formData)

    return JsonResponse({
        "message": "Data successfully uploaded to Firebase",
        "status_code": 200
    }) 
