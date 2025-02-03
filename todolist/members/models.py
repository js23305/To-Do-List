from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=100)
    decription = models.TextField(blank=True)
    is_done = models.BooleanField(default=False)

    def __str__(self):
        return self.title
