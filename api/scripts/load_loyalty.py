from v1.app.models import Store
from v1.wallet.models import LoyalityProgram

def run(*args):
    lp = LoyalityProgram()
    lp.name = 'Diwali offer'
    lp.store = Store.objects.get(pk=1)
    lp.discount = 10
    lp.save()
    print('Loyalty Created..')
    lp = LoyalityProgram()
    lp.name = 'Durga puja offer'
    lp.store = Store.objects.get(pk=2)
    lp.discount = 20
    lp.save()
    print('Loyalty Created..')