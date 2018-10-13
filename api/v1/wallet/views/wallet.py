import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from v1.wallet.models import (
    MyLoyality,
    LoyalityProgram
)
from v1.accounts.validators.authenticate import (
    verify_auth
)

@csrf_exempt
def enroll_in_loyality(req):
    if(req.method=='POST'):
        data = json.loads(req.body)
        try:
            token = req.META['HTTP_AUTHORIZATION']
        except:
            return JsonResponse({'error':'Please login first'})
        if(verify_auth(token)):
            loyaltyId = data['loyaltyId']
            username = data['username']
            loyality = LoyalityProgram.objects.get(pk=loyaltyId)
            user = User.objects.get(username=username)
            MyLoyality.objects.create(user=user,loyality=loyality)
            data = {
                "message":"Enrolled Successfully",
                "value":1,
                "mode":"success"
            }
            return JsonResponse(data,status=200)
    else:
        return JsonResponse({"message":"Method not allowed"},status=405)

def check_enrollment(req,loyality_id,username):
    try:
        token = req.META['HTTP_AUTHORIZATION']
    except:
        return JsonResponse({'error':'Please login first'},status=401)
    if req.method == 'GET':
        if(verify_auth(token)):
            user = User.objects.get(username=username)
            loyality = LoyalityProgram.objects.get(pk=loyality_id)
            myloyality = MyLoyality.objects.filter(user=user,loyality=loyality)
            if len(myloyality)!=0:
                return JsonResponse({'value':1},status=200)
            else:
                return JsonResponse({'value':0},status=200)
        return JsonResponse({'error':'Please Login first'},status=401)
    return JsonResponse({'error':'Method Not allowed'},status=405)      