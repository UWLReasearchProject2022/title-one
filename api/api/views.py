from itertools import product
from django.shortcuts import render
from rest_framework.response import Response 
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET'])
def getProducts(requests):
    products_model = {'name': 'gta', 'price': '£12'}
    return Response(products_model)