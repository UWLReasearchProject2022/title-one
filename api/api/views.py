from itertools import product, chain
from pyexpat import model
from urllib import response
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response

from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse, JsonResponse
from .models import (Product, Developer, Platform, ProductPlatform, Genre,
                     ProductGenre, Review, Stock, OrderDetails, Order,
                     Customer, Review)
from .serializers import (ProductSerializer, DeveloperSerializer,
                          PlatformSerializer, ProductPlatformSerializer,
                          GenreSerializer, ProductGenreSerializer,
                          ReviewSerializer, StockSerializer,
                          OrderDetailsSerializer, OrderSerializer,
                          CustomerSerializer, ReviewSerializer)
from rest_framework.viewsets import ModelViewSet

# Create your views here.
# @api_view(['GET'])
# def get_products(request):

#     if request.method != 'GET':
#         return Response(status=405)

#     product_data = Product.objects.all()
#     serializer = ProductSerializer(product_data, many=True)
#     # response_body = JSONRenderer().render(serializer.data)
#     return JsonResponse(serializer.data, safe=False)


class ProductViewset(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    #allows for new product to be added into database, while still keeping a the nested JSON with developer table

    def create(self, request):
        product_data = request.data

        new_product = Product.objects.create(
            name=product_data["name"],
            short_description=product_data["short_description"],
            long_description=product_data["long_description"],
            image_url=product_data["image_url"],
            developer_id=Developer.objects.get(
                developer_id=product_data["developer_id"]))

        new_product.save()

        serializer = ProductSerializer(new_product)
        return Response(serializer.data)


class DeveloperViewset(ModelViewSet):
    queryset = Developer.objects.all()
    serializer_class = DeveloperSerializer


class PlatformViewset(ModelViewSet):
    queryset = Platform.objects.all()
    serializer_class = PlatformSerializer


class ProductPlatformViewset(ModelViewSet):
    queryset = ProductPlatform.objects.all()
    serializer_class = ProductPlatformSerializer


class GenreViewset(ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer


class ProductGenreViewset(ModelViewSet):
    queryset = ProductGenre.objects.all()
    serializer_class = ProductGenreSerializer


class StockViewset(ModelViewSet):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer


class OrderDetailsViewset(ModelViewSet):
    queryset = OrderDetails.objects.all()
    serializer_class = OrderDetailsSerializer


class OrderViewset(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class CustomerViewset(ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class ReviewViewset(ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer