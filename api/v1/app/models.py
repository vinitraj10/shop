from django.db import models
from django.contrib.auth.models import User

class Store(models.Model):
    name = models.CharField(max_length=50)
    picture = models.FileField(upload_to='store_pic/')
    description = models.TextField()

    def __str__(self):
        return str(self.name)

class Product(models.Model):
    product_name = models.CharField(max_length=100)
    product_pic = models.FileField(upload_to='product_pic/')
    price = models.FloatField()
    store = models.ForeignKey(Store,on_delete=models.CASCADE)
    description = models.CharField(max_length=100)
    quantity = models.IntegerField()

    def __str__(self):
        return str(self.product_name)

class BoughtBy(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    user = models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return str(self.user.username) + 'buyed' + str(self.product.product_name)

    def save(self,*args,**kwargs):
        self.product.quantity-=1
        self.product.save()
        super(BoughtBy, self).save(*args, **kwargs)
    
class Review(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    comment = models.TextField(max_length=1000)
    
    def __str__(self):
        return str(self.user.username) + " " + str(self.product.product_name)