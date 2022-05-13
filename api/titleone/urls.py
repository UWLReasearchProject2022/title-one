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

# from api.api.views import DeveloperViewset
from rest_framework.routers import DefaultRouter
from django.views.generic import TemplateView
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="TitleOne API",
        default_version="v1",
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

router = DefaultRouter()
router.register(r"product", views.ProductViewset, basename="product")
router.register(r"platform", views.PlatformViewset, basename="platform")
router.register(r"order", views.OrderViewset, basename="order")
router.register(r"stock", views.StockViewset, basename="stock")
router.register(r"order_detail", views.OrderDetailsViewset,
                basename="order_detail")
router.register(
    r"product_platform", views.ProductPlatformViewset, basename="product_platform"
)
router.register(r"user", views.UserViewset, basename="user")
router.register(r"review", views.ReviewViewset, basename="review")

# nested product endpoint with developer
# developer_router = routers.NestedSimpleRouter(router,
#                                               r'developer',
#                                               lookup='product')
# developer_router.register(r'products',
#                           views.ProductViewset,
#                           basename='developer-products')

urlpatterns = [
    path("", include(router.urls)),
    path("user-data/", views.get_user),
    # path(r'', include(developer_router.urls)),
    path("admin/", admin.site.urls),
    path("clear/", views.clear_database),
    path("api-auth/", include("rest_framework.urls")),
    path("swagger/", schema_view.with_ui("swagger", cache_timeout=0), name="swagger"),
]
