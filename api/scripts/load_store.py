import os
from django.core.files import File
from v1.app.models import Store
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE_DIR+= "\\fixtures\\test-images"

data = [
            {
                'name':'Jiwan Dhara',
                'picture':'S1.jpg',
                'description': """ Jiwan dhara is one 
                                    of the most famous 
                                    Kirana store of 
                                    Muzaffarpur, Bihar """
            },
            {
                'name':'Sun Groceries',
                'picture':'S2.jpg',
                'description':""" Sun Groceries is the best grocery
                                shop in Kolkata,West Bengal, 
                                All vegetables are fresh and  
                                natural """
            },
    
            {
                'name':'Ganesh Tea stall',
                'picture':'S3.jpg',
                'description':'Best Tea stall of India'
            },
    
            {
                'name':'Sagar clothes',
                'picture':'S4.jpg',
                'description':'Best cloth shop of India,very cheap price products'
            },
    
            {
                'name':'Starbucks',
                'picture':'S5.jpg',
                'description':'Best coffee of the world is here'
            },

            {
                'name':'Ramesh Bakery',
                'picture':'S6.jpg',
                'description':'Best cake of India,Must visit once'
            },

]

def run(*args):
    for each in data:
        name = each['name']
        picture = each['picture']
        dir = BASE_DIR + "\\" + picture
        description = each['description']
        store = Store()
        store.name = name
        store.picture.save(picture,File(open(dir,'rb')))
        store.description = description
        store.save()
        print('Store created...')
    