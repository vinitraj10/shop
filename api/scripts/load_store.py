import os
from v1.app.models import Store
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE_DIR+="\fixtures\test_images"


data = [
            {
                'name':'Jiwan Dhara',
                'picture':BASE_DIR+'\S1.jpg',
                'description': """ Jiwan dhara is one 
                                    of the most famous 
                                    Kirana store of 
                                    Muzaffarpur, Bihar """
            },
            {
                'name':'Sun Groceries',
                'picture':BASE_DIR+'\S2.jpg',
                'description':""" Sun Groceries is the best grocery
                                shop in Kolkata,West Bengal, 
                                All vegetables are fresh and  
                                natural """
            },
    
            {
                'name':'Ganesh Tea stall',
                'picture':BASE_DIR+'\S3.jpg',
                'description':'Best Tea stall of India'
            },
    
            {
                'name':'Sagar clothes',
                'picture':BASE_DIR+'\S4.jpg',
                'description':'Best cloth shop of India,very cheap price products'
            },
    
            {
                'name':'Starbucks',
                'picture':BASE_DIR+'\S5.jpg',
                'description':'Best coffee of the world is here'
            },

            {
                'name':'Ramesh Bakery',
                'picture':BASE_DIR+'\S6.jpg',
                'description':'Best cake of India,Must visit once'
            },

]

def run(*args):
    for each in data:
        name = each['name']
        picture = each['picture']
        description = each['description']
        Store.objects.create(name=name,picture=picture,description=description)
        print('Store created...')
    