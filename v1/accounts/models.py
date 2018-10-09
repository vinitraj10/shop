from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    college = models.CharField(max_length=200)
    picture = models.FileField(upload_to='profile_pic/')
    class Meta:
       verbose_name_plural='Profile'

    def __str__(self):
        return str(self.user.username)