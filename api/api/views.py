from itertools import product, chain
from pyexpat import model
from urllib import response
from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response

from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse, JsonResponse
from .models import (
    Product,
    Developer,
    Platform,
    ProductPlatform,
    Genre,
    ProductGenre,
    Review,
    Stock,
    OrderDetails,
    Order,
    User,
    Review,
)
from .serializers import (
    ProductSerializer,
    DeveloperSerializer,
    PlatformSerializer,
    ProductPlatformSerializer,
    GenreSerializer,
    ProductGenreSerializer,
    ReviewSerializer,
    StockSerializer,
    OrderDetailsSerializer,
    OrderSerializer,
    UserSerializer,
    ReviewSerializer,
)
from rest_framework.viewsets import ModelViewSet
from django.db.models import Count
from itertools import groupby
import pandas as pd

# Create your views here.
# @api_view(['GET'])
# def get_products(request):

#     if request.method != 'GET':
#         return Response(status=405)

#     product_data = Product.objects.all()
#     serializer = ProductSerializer(product_data, many=True)
#     # response_body = JSONRenderer().render(serializer.data)
#     return JsonResponse(serializer.data, safe=False)


@api_view(["GET"])
def clear_database(request):
    if request.method != "GET":
        return Response(status=405)

    Product.objects.all().delete()
    Developer.objects.all().delete()
    Platform.objects.all().delete()
    ProductPlatform.objects.all().delete()
    Genre.objects.all().delete()
    ProductGenre.objects.all().delete()
    Review.objects.all().delete()
    Stock.objects.all().delete()
    OrderDetails.objects.all().delete()
    Order.objects.all().delete()
    User.objects.all().delete()
    Review.objects.all().delete()

    return HttpResponse("Database cleared")


class ProductViewset(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    # allows for new product to be added into database, while still keeping a the nested JSON with developer table

    def create(self, request):
        product_data = request.data

        new_product = Product.objects.create(
            name=product_data["name"],
            short_description=product_data["short_description"],
            long_description=product_data["long_description"],
            image_url=product_data["image_url"],
            developer_id=product_data["developer_id"],
        )

        new_product.save()

        serializer = ProductSerializer(new_product)
        return JsonResponse(serializer.data)


class DeveloperViewset(ModelViewSet):
    queryset = Developer.objects.all()
    serializer_class = DeveloperSerializer


class PlatformViewset(ModelViewSet):
    queryset = Platform.objects.all()
    serializer_class = PlatformSerializer


class ProductPlatformViewset(ModelViewSet):
    queryset = ProductPlatform.objects.all()
    product_queryset = Product.objects.all()

    serializer_class = ProductPlatformSerializer

    # def list(self, request):
    #     featured = request.query_params.get("featured")
    #     if featured:





    def create(self, request):
        product_platform_data = request.data

        new_product_platform = ProductPlatform.objects.create(
            price=product_platform_data["price"],
            product_id=self.product_queryset.get(
                product_id=product_platform_data["product_id"]
            ),
            platform_id=Platform.objects.get(
                platform_id=product_platform_data["platform_id"]
            ),
        )

        new_product_platform.save()

        serializer = ProductPlatformSerializer(new_product_platform)
        return JsonResponse(serializer.data)

    queryset = ProductPlatform.objects.all()
    serializer_class = ProductPlatformSerializer


class GenreViewset(ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer


class ProductGenreViewset(ModelViewSet):
    queryset = ProductGenre.objects.all()
    serializer_class = ProductGenreSerializer

    def create(self, request):
        product_genre_data = request.data

        new_product_genre = ProductGenre.objects.create(
            product_id=Product.objects.get(product_id=product_genre_data["product_id"]),
            genre_id=Genre.objects.get(genre_id=product_genre_data["genre_id"]),
        )

        new_product_genre.save()

        serializer = ProductGenreSerializer(new_product_genre)
        return JsonResponse(serializer.data)


class StockViewset(ModelViewSet):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer


class OrderDetailsViewset(ModelViewSet):
    queryset = OrderDetails.objects.all()
    serializer_class = OrderDetailsSerializer


class OrderViewset(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def list(self, request):
        user_id = request.query_params.get("user_id")

        # get all orders for user

        if user_id is not None:
            user_orders = Order.objects.filter(user_id=user_id).values_list("order_id")
            if not user_orders:
                return JsonResponse([], safe = False)
        else:
            user_orders = Order.objects.all().values_list("order_id")

        # get all order details for user
        queryset = OrderDetails.objects.filter(order_id__in=user_orders)
        order_details = pd.DataFrame(queryset.values())
        order_details.rename(columns={"stock_id_id": "stock_id"}, inplace=True)
        # print(order_details)

        # get all stock ids for user
        stock_ids = queryset.values_list("stock_id")
        stock_entries = Stock.objects.filter(stock_id__in=stock_ids)
        stocks = pd.DataFrame.from_records(list(stock_entries.values()))

        # groups each order by product and finds the quantity of each product
        order = pd.merge(order_details, stocks, on="stock_id").loc[
            :, ["order_id_id", "product_platform_id_id"]
        ]
        # print(order)

        order.rename(
            columns={
                "order_id_id": "order_id",
                "product_platform_id_id": "product_platform_id",
            },
            inplace=True,
        )
        product_count_by_order = (
            order.groupby(["order_id", "product_platform_id"])
            .size()
            .to_frame("quantity")
            .reset_index()
        )
        order_data = product_count_by_order.to_dict("records")
        order_data = [
            list(v) for k, v in groupby(order_data, key=lambda x: x["order_id"])
        ]

        # this is f horrible code, but it works
        for order in chain.from_iterable(order_data):
            del order["order_id"]
            prod = ProductPlatform.objects.get(product_platform_id=order["product_platform_id"])
            print(prod)
            del order["product_platform_id"]
            
            data = ProductPlatformSerializer(prod).data
            order["product_platform"] = data
            

        

        return JsonResponse(order_data, safe=False)

    def create(self, request):
        order_data = request.data

        user_id = order_data["user_id"]
        order_details = order_data["order_details"]
        created = Order.objects.create(user_id=User.objects.get(user_id=user_id))

        for product in order_details:
            prod_id = product["product_platform_id"]
            quantity = product["quantity"]

            stocks = Stock.objects.filter(product_platform_id=prod_id)[:quantity]

            for stock in stocks:
                OrderDetails.objects.create(order_id=created, stock_id=stock)
            # not handling out of stock as cba to do it

        return JsonResponse({"order_id": created.order_id})


class UserViewset(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


def get_user(request):
    email = request.GET.get("email")
    password = request.GET.get("password")

    user = get_object_or_404(User, email=email, password=password)
    serializer = UserSerializer(user)
    return JsonResponse(serializer.data)


class ReviewViewset(ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def create(self, request):
        review_data = request.data

        new_review = Review.objects.create(
            product_id=Product.objects.get(product_id=review_data["product_id"]),
            user_id=User.objects.get(user_id=review_data["user_id"]),
            rating=review_data["rating"],
            text=review_data["text"],
        )

        new_review.save()

        serializer = ReviewSerializer(new_review)
        return JsonResponse(serializer.data)
