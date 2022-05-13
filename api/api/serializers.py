from itertools import product
from rest_framework import serializers
from .models import (
    Product,
    Platform,
    ProductPlatform,
    Stock,
    OrderDetails,
    Order,
    Customer,
    Review,
)

from rest_framework.serializers import SlugRelatedField


class PlatformSerializer(serializers.ModelSerializer):
    class Meta:
        model = Platform
        fields = ["platform_id", "name"]


class AddressSerializer(serializers.ModelSerializer):
    house_number = serializers.CharField(allow_blank=True)
    road_name = serializers.CharField(allow_blank=True)
    city = serializers.CharField(allow_blank=True)
    county = serializers.CharField(allow_blank=True)
    postcode = serializers.CharField(allow_blank=True)

    class Meta:
        model = Customer
        fields = ["house_number", "road_name", "city", "county", "postcode"]


class CustomerSerializer(serializers.ModelSerializer):
    address = AddressSerializer(source="*")

    class Meta:
        model = Customer
        fields = ["user_id", "email", "surname",
                  "other_names", "address", "password"]


class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["positive", "negative"]


class RatingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["game_play", "social", "graphics", "value", "overall"]


class ReviewGetSerializer(serializers.ModelSerializer):
    user = CustomerSerializer(many=False, read_only=True, source="user_id")
    ratings = RatingsSerializer(source="*")
    comments = CommentsSerializer(source="*")

    class Meta:
        model = Review
        fields = ["review_id", "ratings",
                  "user", "date_reviewed", "comments"]


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
        fields = [
            "product_id",
            "name",
            "short_description",
            "long_description",
            "description",
            "image_url",
            "developer",
            "reviews",
            "category",
            "age_rating",
            "release_date",
        ]
        depth = 1


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            "product_id",
            "name",
            "short_description",
            "long_description",
            "description",
            "image_url",
            "developer",
            "reviews",
            "category",
            "age_rating",
            "release_date",
        ]
        depth = 1


class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = "__all__"


class ProductPlatformSerializer(serializers.ModelSerializer):
    product = ProductGetSerializer(read_only=True, many=False)
    stock = StockSerializer(many=True)

    class Meta:
        model = ProductPlatform
        fields = "product_platform_id", "platform", "price", "is_featured", "product", "stock",
        depth = 1

    def to_representation(self, instance):
        data = super(ProductPlatformSerializer,
                     self).to_representation(instance)
        data["quantity"] = instance.stock.all().count()

        overall_array = []
        for review in instance.product.reviews.all():
            overall_array.append(review.overall)
        if len(overall_array) > 0:
            data["rating"] = sum(overall_array) / len(overall_array)
            data["review_count"] = len(overall_array)
        else:
            data["rating"] = 0
            data["review_count"] = 0
        return data


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
