from django.contrib import admin
from v1.wallet.models import (
    Wallet,
    LoyalityProgram,
    MyLoyality
)
admin.site.register(LoyalityProgram)
admin.site.register(MyLoyality)
admin.site.register(Wallet)