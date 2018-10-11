from django.urls import path
from v1.app.views.shop import (
	get_stores,
	get_products,
	add_to_cart,
	load_cart,
	remove_from_cart
) 

urlpatterns = [
	path('stores/',get_stores),
	path('stores/<int:pk>/products/',get_products),
	path('addtocart/',add_to_cart),
	path('loadcart/<slug:username>/',load_cart),
	path('removefromcart/<int:cart_id>/<slug:username>/',remove_from_cart)
]
