import os
from django.core.files import File
from v1.app.models import (
    Store,
    Product
)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# for windows
#BASE_DIR+= "\\fixtures\\test-images"
# for linux
BASE_DIR+= "/fixtures/test-images"

products = [
    {
        'product_name':'Himalaya Facewash',
        'product_pic':'P1.jpg',
        'price':80,
        'store':1,
        'description': 'Facewash for pimple removal',
        'quantity': 100,
    },
    {
        'product_name':'Garnier Sanatizer',
        'product_pic':'P2.jpg',
        'price':100,
        'store':1,
        'description': 'Santazier for cleaning hands',
        'quantity': 100,
    },
    {
        'product_name':'Garnier men Face wash',
        'product_pic':'P3.jpeg',
        'price':90,
        'store':1,
        'description': 'Garnier men Face wash',
        'quantity': 100,
    },
        {
        'product_name':'Atta-1kg',
        'product_pic':'P4.jpg',
        'price':150,
        'store':2,
        'description': 'Aashirvad Multigrain aata fresh',
        'quantity': 100,
    },
]

def run(*args):
    for each in products:
        product_name = each['product_name']
        product_pic = each['product_pic']
        # for windows
        # dir = BASE_DIR + '\\' + product_pic
        dir = BASE_DIR + '/' + product_pic
        price = each['price']
        store = Store.objects.get(pk=each['store'])
        description = each['description']
        quantity = each['quantity']
        p = Product()
        p.product_name = product_name
        p.price = price
        p.store = store
        p.description = description
        p.quantity = quantity
        p.product_pic.save(product_pic,File(open(dir,'rb')))
        p.save()
        print("Product created...")