from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('detection.urls')),
    path('api/auth/', include('users.urls')),
    path('api/analytics/', include('analytics.urls')),
]