from sys import platform
from time import timezone
from django.db import models

# Create your models here.


class Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    short_description = models.TextField(default="")
    long_description = models.TextField(default="")
    description = models.TextField(default="")
    developer = models.CharField(max_length=255)
    developer_logo_url = models.CharField(max_length=2083, default="")
    image_url = models.CharField(max_length=2083)
    release_date = models.DateField(null=True)
    age_rating = models.CharField(max_length=255, default="18+")
    category = models.CharField(max_length=255, default="action")

    def __str__(self):
        return self.name


class Platform(models.Model):
    platform_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)


class ProductPlatform(models.Model):
    product_platform_id = models.AutoField(primary_key=True)
    product = models.ForeignKey(
        "Product", on_delete=models.CASCADE, related_name="product1"
    )
    platform = models.ForeignKey(
        "Platform", on_delete=models.CASCADE, related_name="platform"
    )
    price = models.FloatField()
    is_featured = models.BooleanField(default=False)


class Stock(models.Model):
    stock_id = models.AutoField(primary_key=True)
    product_platform_id = models.ForeignKey(
        "ProductPlatform", on_delete=models.CASCADE)
    isSold = models.BooleanField(default=False)


class OrderDetails(models.Model):
    order_details_id = models.AutoField(primary_key=True)
    stock_id = models.ForeignKey("Stock", on_delete=models.CASCADE)
    order_id = models.ForeignKey(
        "Order", on_delete=models.CASCADE, related_name="order_details"
    )


class Order(models.Model):
    order_id = models.AutoField(primary_key=True)
    date_ordered = models.DateTimeField(auto_now_add=True)
    date_shipped = models.DateTimeField(auto_now_add=True, null=True)
    date_delivered = models.DateTimeField(auto_now_add=True, null=True)
    user_id = models.ForeignKey("User", on_delete=models.CASCADE)


class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    email = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    other_names = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)


class Review(models.Model):
    review_id = models.AutoField(primary_key=True)
    product_id = models.ForeignKey(
        "Product", on_delete=models.CASCADE, related_name="reviews"
    )
    user_id = models.ForeignKey("User", on_delete=models.CASCADE)
    game_play = models.IntegerField(null=True)
    social = models.IntegerField(null=True)
    graphics = models.IntegerField(null=True)
    value = models.IntegerField(null=True)
    overall = models.IntegerField(null=True)
    date_reviewed = models.DateTimeField(auto_now_add=True)
    positive = models.TextField(default="")
    negative = models.TextField(default="")

    def __str__(self):
        return self.name
