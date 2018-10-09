import json
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from v1.app.models import (
    Product,
    BuyedBy
)
from v1.app.models import Wallet
from v1.accounts.validators.authenticate import (
    verify_auth,
)

@csrf_exempt
def buyProduct(req):
    data = json.loads(req.body)
    try:
        token = req.META['HTTP_AUTHORIZATION']
    except:
        return JsonResponse({'error': 'Please Login First'})
    if (verify_auth(token)):
        if req.method == 'POST':
            data = json.loads(req.body)
            product_id = data['product_id']
            username = data['username']
            product = Product.objects.get(pk=product_id)
            user = User.objects.get(username=username)
            BuyedBy.objects.create(product=product,username=username)
            wallet = Wallet.objects.get(owner=user)
            wallet.money = wallet.money+10
            wallet.save()
            return JsonResponse({'success': 'Product Buyed'}, status=200)
        return JsonResponse({'error': 'Method Not Allowed'}, status=405)
    else:
        return JsonResponse({'error': 'You are not the owner'}, status=401)
