from django.db import models

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=200, verbose_name='')

    def __str__(self):
        return str(self.title)
