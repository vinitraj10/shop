import json
from django.http import JsonResponse
from django.core import serializers
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from v1.accounts.models import Profile
from v1.app.models import (
    Store,
    Product,
    BoughtBy,
    Cart,
    Review
)
from v1.wallet.models import (
    Wallet,
    LoyalityProgram,
    MyLoyality
)
from v1.accounts.validators.authenticate import (
    verify_auth,
)

@csrf_exempt
def buy_product(req):
    data = json.loads(req.body)
    try:
        token = req.META['HTTP_AUTHORIZATION']
    except:
        return JsonResponse({'error': 'Please Login First'},status=401)
    if (verify_auth(token)):
        if req.method == 'POST':
            data = json.loads(req.body)
            cartProducts = data['data']
            for each in cartProducts:
                product_id = each['product_id']
                user_id = each['owner_id']
                store_id = each['store_id']
                product = Product.objects.get(pk=product_id)
                store = Store.objects.get(pk=store_id)
                user = User.objects.get(pk=user_id)
                BoughtBy.objects.create(product=product,user=user)
                loyalP = LoyalityProgram.objects.filter(store=store)
                if(len(loyalP)!=0) :
                    lp_discount = loyalP[0].discount
                    m = MyLoyality.objects.filter(user=user,loyality=loyalP[0])
                    if(len(m)!=0) :
                        wallet = Wallet.objects.get(owner=user)
                        wallet.money = wallet.money + (lp_discount*each['price'])/100
                        wallet.save() 
                Cart.objects.filter(owner=user).delete()
            cartList = list(Cart.objects.filter(owner=user).values())     
            return JsonResponse({'inCart': cartList}, status=200)
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)
    else:
        return JsonResponse({'error': 'You are not the owner'}, status=401)

def get_stores(req):
    try:
        token = req.META['HTTP_AUTHORIZATION']
    except:
        return JsonResponse({'error':'Please Login First'},status=401)
    if(verify_auth(token)):
        if req.method == 'GET':
            all_stores = Store.objects.all().values()
            stores_list = list(all_stores)
            return JsonResponse({'data':stores_list},status=200)
        else:
            return JsonResponse({'error':'Method not allowed'},status=405)
    else:
        return JsonResponse({'error':'Please Login First'},status=401)

def get_products(req,pk):
    try:
        token = req.META['HTTP_AUTHORIZATION']
    except:
        return JsonResponse({'error':'Please login first'},status=401)
    if(verify_auth(token)):
        if req.method=='GET':
            store = Store.objects.get(pk=pk)
            store_id = store.id
            store_pic = store.picture.url
            store_name = store.name
            store_desc = store.description
            product_list = list(Product.objects.filter(store=store).values())
            try:
                loyalty = LoyalityProgram.objects.get(store=store)
                for each in product_list:
                    each['store_pic'] = store_pic
                    each['store_id'] = store_id
                    each['store_name'] = store_name
                    each['store_desc'] = store_desc
                    each['loyalty'] = loyalty.name
                    each['loyalty_disc'] = loyalty.discount
                    each['loyalty_id'] = loyalty.id
                return JsonResponse({'products':product_list})
            except:
                return JsonResponse({'products':product_list})
        
        else:
            return JsonResponse({'error':'Method not allowed'},status=405)
    else:
        return JsonResponse({'error':'Please login first'})


@csrf_exempt
def add_to_cart(req):
    try:
        token = req.META['HTTP_AUTHORIZATION']
    except:
        return JsonResponse({'error': 'Please login first'})
    if(verify_auth(token)):
        if req.method == 'POST':
            data = json.loads(req.body)
            productId = data['productId']
            username = data['username']
            product = Product.objects.get(pk=productId)
            user = User.objects.get(username=username)
            Cart.objects.create(owner=user,product=product)
            cartList = list(Cart.objects.filter(owner=user).values())
            return JsonResponse({'inCart':cartList},status=200)
        else:
            return JsonResponse({'error':'Method not allowed'},status=405)
    else:
        return JsonResponse({'error':'Please login First'},status=401)

def load_cart(req,username):
    try:
        token = req.META['HTTP_AUTHORIZATION']
    except:
        return JsonResponse({'error': 'Please login First'},status=401)
    if(verify_auth(token)):
        if req.method == 'GET':
            user = User.objects.get(username=username)
            cartList = list(Cart.objects.filter(owner=user).values())
            for each in cartList:
                product_id = each['product_id']
                product = Product.objects.get(pk=product_id)
                each['product_name'] = product.product_name
                each['product_pic'] = product.product_pic.url
                each['store'] = product.store.name
                each['store_id'] = product.store.id
                each['price'] = product.price
                each['description'] = product.description

            return JsonResponse({'inCart':cartList},status=200)
        else:
            return JsonResponse({'error':'Method Not allowed'},status=405)
    else:
        return JsonResponse({'error':'Please login First'},status=401)

@csrf_exempt
def remove_from_cart(req,cart_id,username):
    try:
        token = req.META['HTTP_AUTHORIZATION']
    except:
        return JsonResponse({'error': 'Please loginn First'},status=401)
    if(verify_auth(token)):
        if req.method == 'DELETE':
            user = User.objects.get(username=username)
            cartObj = Cart.objects.get(pk=cart_id)
            cartObj.delete()
            cartList = list(Cart.objects.filter(owner=user).values())
            for each in cartList:
                product_id = each['product_id']
                product = Product.objects.get(pk=product_id)
                each['product_name'] = product.product_name
                each['product_pic'] = product.product_pic.url
                each['store'] = product.store.name
                each['price'] = product.price
                each['description'] = product.description
            return JsonResponse({'inCart':cartList},status=200)
        else:
            return JsonResponse({'error':'Method Not allowed'},status=405)
    else:
        return JsonResponse({'error':'Please login First'},status=401)


def load_my_transactions(req,username):
    try:
        token = req.META['HTTP_AUTHORIZATION']
    except:
        return JsonResponse({'error':'Please login first'},status=401)
    if(verify_auth(token)):
        if req.method=='GET':
            user = User.objects.get(username=username)
            bought = list(BoughtBy.objects.filter(user=user).values())
            for each in bought:
                product = Product.objects.get(pk=each['product_id'])
                each['name'] = product.product_name
                each['price'] = product.price
                each['pic'] = product.product_pic.url
            return JsonResponse({"data":bought})
        else:
            return JsonResponse({"error":"Method Not Allowed"},status=405)
    else:
        return JsonResponse({"error":"Please login first"},status=401)

@csrf_exempt
def add_review(req):
    try:
        token = req.META['HTTP_AUTHORIZATION']
    except:
        return JsonResponse({'error':'Please Login First'},status=401)
    
    if req.method == 'POST':
        if(verify_auth(token)):
            data = json.loads(req.body)
            user = User.objects.get(username=data['username'])
            product = Product.objects.get(pk=data['productId'])
            review = Review.objects.create(user=user,product=product,comment=data['content'])
            return JsonResponse({'success':'Review Submitted'},status=200)
        else:
            return JsonResponse({'error':'Please Login First'},status=401)
    else:
        return JsonResponse({'error':'Method Not allowed'},status=405)

def load_review(req,id):
    try:
        token = req.META['HTTP_AUTHORIZATION']
    except:
        return JsonResponse({'error':'Please Login first'},status=401)
    if req.method == 'GET':
        if(verify_auth(token)):
            product = Product.objects.get(pk=id)
            reviews = list(Review.objects.all().values())
            for each in reviews:
                user = User.objects.get(pk=each['user_id'])
                profile = Profile.objects.get(user=user)
                each['profile_pic'] = profile.picture.url
                each['username'] = user.username
            return JsonResponse({'data':reviews},status=200)
        return JsonResponse({'error':'Please Login first'},status=401)
    return JsonResponse({'error':'Method Not allowed'},status=405)
