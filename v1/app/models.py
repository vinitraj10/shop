from django.db import models

class Store(models.Model):
    name = models.CharField(max_length=50)
    picture = models.FileField(upload_to='store_pic/')

    def __str__(self):
        return str(self.name)

class LoyalityProgram(models.Model):
    loyality_name = models.CharField(max_length=50)
    store = models.ForeignKey("Store",on_delete=models.CASCADE)
    discount = models.IntegerField()

    def __str__(self):
        return str(self.loyality_name) + " " + str(self.store.name)

class Product(models.Model):
    product_name = models.CharField(max_length=100)
    product_pic = models.FileField(upload_to='product_pic/')
    price = models.IntegerField()
    store = models.ForeignKey(Store,on_delete=models.CASCADE)
    description = models.CharField(max_length=100)

    def __str__(self):
        return str(self.product_name)