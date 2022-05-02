from rest_framework import serializers
from .models import (Product, Developer, Platform, ProductPlatform, Genre,
                     ProductGenre, Stock, OrderDetails, Order, Customer,
                     Review)


class DeveloperSerializer(serializers.ModelSerializer):

    class Meta:
        model = Developer
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    developer = DeveloperSerializer(read_only=True)

    #Developer = serializers.PickledObjectField(source='developer_id')

    class Meta:
        model = Product
        fields = [
            "product_id", "name", "short_description", "long_description",
            "image_url", "developer"
        ]
        depth = 1


class PlatformSerializer(serializers.ModelSerializer):

    class Meta:
        model = Platform
        fields = "__all__"


class ProductPlatformSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductPlatform
        fields = "__all__"
        depth = 1


class GenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = "__all__"


class ProductGenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductGenre
        fields = "__all__"


class StockSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stock
        fields = "__all__"


class OrderDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = OrderDetails
        fields = "__all__"


class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = "__all__"


class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = "__all__"


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = "__all__"
        depth = 1
