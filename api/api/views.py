from itertools import product
from django.shortcuts import render
from rest_framework.response import Response 
from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse, JsonResponse
from .models import Product, Developer, Platform, ProductPlatform, Genre, ProductGenre, Stock, OrderDetails, Order
from .serializers import ProductSerializer, DeveloperSerializer, PlatformSerializer, ProductPlatformSerializer, GenreSerializer, ProductGenreSerializer, StockSerializer, OrderDetailsSerializer, OrderSerializer, CustomerSerializer

# Create your views here.
@api_view(['GET'])
def get_products(request):

    if request.method != 'GET':
        return Response(status=405)

    product_data = Product.objects.all()
    serializer = ProductSerializer(product_data, many=True)
    # response_body = JSONRenderer().render(serializer.data)
    return JsonResponse(serializer.data, safe=False)

    


    
    