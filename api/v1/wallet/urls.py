from django.urls import path
from v1.wallet.views.wallet import (
    enroll_in_loyality,
    check_enrollment
) 

urlpatterns = [
	path('enroll/',enroll_in_loyality),
    path('checkenrollment/<int:loyality_id>/<slug:username>/',check_enrollment)
]
