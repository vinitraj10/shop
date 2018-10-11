import json
from django.http import JsonResponse
from django.core import serializers
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from v1.app.models import (
    Store,
    Product,
    BoughtBy
)
from v1.wallet.models import Wallet
from v1.accounts.validators.authenticate import (
    verify_auth,
)

@csrf_exempt
def buyProduct(req):
    data = json.loads(req.body)
    try:
        token = req.META['HTTP_AUTHORIZATION']
    except:
        return JsonResponse({'error': 'Please Login First'},status=401)
    if (verify_auth(token)):
        if req.method == 'POST':
            data = json.loads(req.body)
            product_id = data['product_id']
            username = data['username']
            product = Product.objects.get(pk=product_id)
            user = User.objects.get(username=username)
            BoughtBy.objects.create(product=product,username=username)
            wallet = Wallet.objects.get(owner=user)
            wallet.money = wallet.money+10
            wallet.save()
            return JsonResponse({'success': 'Product Buyed'}, status=200)
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
            product_list = list(Product.objects.filter(store=store).values())
            return JsonResponse({'products':product_list})
        
        else:
            return JsonResponse({'error':'Method not allowed'},status=405)
    else:
        return JsonResponse({'error':'Please login first'})