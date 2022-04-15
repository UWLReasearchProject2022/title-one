"""titleone URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from api import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'product', views.ProductViewset ,basename="product")
router.register(r'developer', views.DeveloperViewset ,basename="developer")
router.register(r'platform', views.PlatformViewset ,basename="platform")
router.register(r'genre', views.GenreViewset ,basename="genre")
router.register(r'order', views.OrderViewset ,basename="order")
router.register(r'stock', views.StockViewset ,basename="stock")
router.register(r'order_detail', views.OrderDetailsViewset ,basename="order_detail")
# from api.views import get_products 

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    # path("products/", get_products)
]
