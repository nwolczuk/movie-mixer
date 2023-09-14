from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from django.core import serializers
import json

from .forms import MovieForm
from .models import Movie

# Create your views here.
def mixer_view(request):
    if request.method == "POST":
        if (movie_id := request.headers.get('Delete-Movie')):
            Movie.objects.filter(id=movie_id).delete()
            return JsonResponse({'message': 'success'})
        else:
            form = MovieForm(request.POST)
            if form.is_valid():
                form.save()
                movie_list = Movie.objects.all()
                movie_list = json.loads(serializers.serialize('json', movie_list, fields=['title']))
                return JsonResponse({'message': 'success', 'movie_list': movie_list})
    form = MovieForm()
    movie_list = Movie.objects.all()
    return render(request, 'mixer/mixer.html', {'form': form, 'movie_list': movie_list})