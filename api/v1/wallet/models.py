from django.db import models
from django.contrib.auth.models import User
from v1.app.models import Store

class Wallet(models.Model):
    owner = models.ForeignKey(User,on_delete=models.CASCADE)
    money = models.FloatField(default=0)

    def __str__(self):
        return str(self.owner.username) + " has " + str(self.money)


class LoyalityProgram(models.Model):
    name = models.CharField(max_length=50)
    store = models.ForeignKey(Store,on_delete=models.CASCADE)
    discount = models.FloatField()

    def __str__(self):
        return str(self.name) + " of " + str(self.store.name)

class MyLoyality(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    loyality = models.ForeignKey(LoyalityProgram,on_delete=models.CASCADE)

    def __str__(self):
        return str(self.user.username) + " " + str(self.loyality.name)