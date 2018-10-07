from django.contrib import admin
from v1.app.models import (
    Store,
    LoyalityProgram
)
# Register your models here.
admin.site.register(Store)
admin.site.register(LoyalityProgram)