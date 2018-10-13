from django.contrib.auth.models import User
from v1.accounts.models import Profile
from v1.wallet.models import Wallet

def run(*args):
    # creates a sample user
    user = User()
    user.username='test'
    user.set_password('test123')
    user.email='test@email.com'
    user.save()

    p = Profile()
    p.user = user
    p.college = ''
    p.picture = ''
    p.save()

    w = Wallet()
    w.owner = user
    w.money = 0
    w.save()
