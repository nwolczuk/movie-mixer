from django import forms
from django.forms import ModelForm

from .models import Movie

class MovieForm(ModelForm):
    class Meta:
        model = Movie
        fields = ['title']

        widgets ={
            'title': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Title'})
        }