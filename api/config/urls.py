from django.contrib import admin
from django.conf import settings
from django.urls import (
    include,
    re_path,
    path
)
from django.conf.urls.static import static

urlpatterns = [
    re_path(r'^admin/', admin.site.urls),
    re_path(r'^accounts/api/',include('v1.accounts.urls')),
    re_path(r'^app/api/',include('v1.app.urls')),
    re_path(r'^wallet/api/',include('v1.wallet.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
