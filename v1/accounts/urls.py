from django.urls import path
from v1.accounts.views.signup import signup_view
from v1.accounts.views.signin import signin_view
from v1.accounts.views.update_profile import update_profile_view

urlpatterns = [
	path('auth/signup/',signup_view),
	path('auth/signin/',signin_view),
	path('update/profile/',update_profile_view),
]
