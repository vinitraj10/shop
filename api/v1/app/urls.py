from django.urls import path
from v1.app.views.shop import (
	get_stores,
	get_products
) 

urlpatterns = [
	path('stores/',get_stores),
	path('stores/<int:pk>/products/',get_products)
]
