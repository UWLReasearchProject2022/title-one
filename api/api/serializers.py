from itertools import product
from rest_framework import serializers
from .models import (
    Product,
    Platform,
    ProductPlatform,
    Stock,
    OrderDetails,
    Order,
    User,
    Review,
)

from rest_framework.serializers import SlugRelatedField


class PlatformSerializer(serializers.ModelSerializer):
    class Meta:
        model = Platform
        fields = ["platform_id", "name"]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["positive", "negative"]


class RatingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["game_play", "social", "graphics", "value", "overall"]


class ReviewGetSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True, source="user_id")
    ratings = RatingsSerializer(source="*")
    comments = CommentsSerializer(source="*")

    class Meta:
        model = Review
        fields = ["review_id", "ratings", "user", "date_reviewed", "comments"]


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = [
            "review_id",
            "date_reviewed",
            "game_play",
            "social",
            "graphics",
            "value",
            "overall",
            "positive",
            "negative",
            "product_id",
            "user_id",
        ]
        depth = 1


class ProductGetSerializer(serializers.ModelSerializer):
    reviews = ReviewGetSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = "__all__"
        depth = 1


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
        depth = 1


class ProductPlatformSerializer(serializers.ModelSerializer):
    product = ProductGetSerializer(read_only=True, many=False)

    class Meta:
        model = ProductPlatform
        fields = "product_platform_id", "platform", "price", "is_featured", "product",
        depth = 1


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
