import json
from django.http import JsonResponse
from django.contrib.auth.models import User
from v1.wallet.models import Wallet
from v1.accounts.models import Profile
from v1.accounts.validators.authenticate import verify_auth

def load_profile(req,username):
    try:
        token = req.META['HTTP_AUTHORIZATION']
    except:
        return JsonResponse({'error':'Please login First'},status=401)
    
    if req.method == 'GET':
        if(verify_auth(token)):
            user = User.objects.get(username=username)
            profile = Profile.objects.get(user=user)
            try:
                propic = profile.picture.url
            except:
                propic = ''
            wallet = Wallet.objects.get(owner=user).money
            data = {
                'username':user.username,
                'email':user.email,
                'propic':propic,
                'wallet':wallet
            }        
            return JsonResponse(data,status=200)
        return JsonResponse({'error':'Please login First'},status=401)
    else:
        return JsonResponse({'error':'Method Not Allowed'},status=405)
    
