from itertools import product
from rest_framework import serializers
from .models import (
    Product,
    Developer,
    Platform,
    ProductPlatform,
    Genre,
    ProductGenre,
    Stock,
    OrderDetails,
    Order,
    User,
    Review,
)

from rest_framework.serializers import SlugRelatedField


class DeveloperSerializer(serializers.ModelSerializer):

    class Meta:
        model = Developer
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    developer = DeveloperSerializer(read_only=True)

    class Meta:
        model = Product
        fields = [
            "product_id", "name", "short_description", "long_description",
            "image_url", "developer"
        ]
        depth = 1


# class PlatformSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Platform
#         fields = ["platform_id", "name"]


class ProductPlatformSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = ProductPlatform
        fields = "__all__"
        fields = ["name", "platform_id"]


class ProductPlatformSerializer(serializers.ModelSerializer):

    product = ProductSerializer(read_only=True)

    class Meta:
        model = ProductPlatform
        fields = ["price", "platform", "product_platform_id", "product"]
        depth = 1


class GenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = "__all__"


class ProductGenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductGenre
        fields = ["genre_id"]
        depth = 1


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = ["review_id", "rating", "text", "user_id", "date_reviewed"]
        depth = 2


# class ProductSerializer(serializers.ModelSerializer):
#     platforms = ProductPlatformSerializer(many=True, read_only=True)
#     genres = ProductGenreSerializer(many=True, read_only=True)
#     developer = DeveloperSerializer(read_only=True)
#     reviews = ReviewSerializer(many=True, read_only=True)

# Developer = serializers.PickledObjectField(source='developer_id')

    class Meta:
        model = Product
        fields = [
            "product_id",
            "name",
            "short_description",
            "long_description",
            "image_url",
            "platforms",
            "genres",
            "developer",
            "reviews",
        ]


class StockSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stock
        fields = "__all__"


class OrderDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderDetails
        fields = "__all__"


class OrderSerializer(serializers.ModelSerializer):
    order_details = OrderDetailsSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = (
            "order_id",
            "user_id",
            "date_ordered",
            "order_details",
        )


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = "__all__"


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = [
            "review_id", "date_reviewed", "text", "product_id", "customer_id",
            "product_platform"
        ]
        depth = 1
