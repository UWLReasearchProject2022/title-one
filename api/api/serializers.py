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


class PlatformSerializer(serializers.ModelSerializer):
    class Meta:
        model = Platform
        fields = ["name", "platform_id"]


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = "__all__"


class ProductGenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductGenre
        fields = ["genre_id"]
        depth = 1


class ProductPlatformSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductPlatform
        fields = ["price", "platform_id", "product_platform_id"]
        depth = 2


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["review_id", "rating", "text", "user_id", "date_reviewed"]
        depth = 2


class ProductSerializer(serializers.ModelSerializer):
    platforms = ProductPlatformSerializer(many=True, read_only=True)
    genres = ProductGenreSerializer(many=True, read_only=True)
    developer = DeveloperSerializer(read_only=True)
    reviews = ReviewSerializer(many=True, read_only=True)

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
        fields = "order_id", "user_id","date_ordered", "order_details", 


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
