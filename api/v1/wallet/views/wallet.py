import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from v1.wallet.models import (
    MyLoyalityProgram
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
            loyality_id = data['loyality_id']
            username = data['username']
            loyality = LoyalityProgram.objects.get(pk=loyality_id)
            user = User.objects.get(username=username)
            MyLoyalityProgram.objects.create(user=user,loyality=loyality)
            return JsonResponse({"message":"Enrolled successfully"},status=200)
    else:
        return JsonResponse({"message":"Method not allowed"},status=405)
