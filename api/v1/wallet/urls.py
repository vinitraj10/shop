from django.urls import path
from v1.wallet.views.wallet import (
    enroll_in_loyality
) 

urlpatterns = [
	path('enroll/',enroll_in_loyality),
]
