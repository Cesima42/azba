from django.db import models

class Intern(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    university = models.CharField(max_length=100)
    # add any other fields you want to store
