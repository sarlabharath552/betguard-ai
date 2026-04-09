from django.urls import path
from .views import get_analytics,save_block,blocked_history

urlpatterns = [
    path('', get_analytics),
    path('save-block/', save_block),
    path('blocked-history/', blocked_history),

]