from django.contrib import admin
from v1.app.models import (
    Store,
    Product,
    BoughtBy,
    Review
)

admin.site.register(Store)
admin.site.register(Product)
admin.site.register(BoughtBy)
admin.site.register(Review)