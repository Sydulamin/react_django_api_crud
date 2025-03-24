from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=255)
    year = models.CharField(max_length=10)
    poster = models.ImageField(upload_to='posters/',default='def.png' , null=True, blank=True)

    def __str__(self):
        return self.title