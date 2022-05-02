from sys import platform
from time import timezone
from django.db import models

# Create your models here.


class Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    short_description = models.CharField(max_length=255)
    long_description = models.CharField(max_length=255)
    developer = models.ForeignKey("Developer",
                                  related_name="developer",
                                  on_delete=models.CASCADE)
    image_url = models.CharField(max_length=2083)

    def __str__(self):
        return self.name


class Developer(models.Model):
    developer_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)


class Platform(models.Model):
    platform_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)


class ProductPlatform(models.Model):
    product_platform_id = models.AutoField(primary_key=True)
    product_id = models.ForeignKey("Product", on_delete=models.CASCADE)
    platform_id = models.ForeignKey("Platform", on_delete=models.CASCADE)
    price = models.FloatField()


class Genre(models.Model):
    genre_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)


class ProductGenre(models.Model):
    product_id = models.ForeignKey("Product", on_delete=models.CASCADE)
    genre_id = models.ForeignKey("Genre", on_delete=models.CASCADE)


class Stock(models.Model):
    stock_id = models.AutoField(primary_key=True)
    product_platform_id = models.ForeignKey("ProductPlatform",
                                            on_delete=models.CASCADE)


class OrderDetails(models.Model):

    stock_id = models.ForeignKey("Stock", on_delete=models.CASCADE)
    order_id = models.ForeignKey("Order", on_delete=models.CASCADE)


class Order(models.Model):
    order_id = models.AutoField(primary_key=True)
    date_ordered = models.DateTimeField(auto_now_add=True)
    date_shipped = models.DateTimeField(auto_now_add=True)
    date_delivered = models.DateTimeField(auto_now_add=True)
    customer_id = models.ForeignKey("Customer", on_delete=models.CASCADE)


class Customer(models.Model):
    customer_id = models.AutoField(primary_key=True)
    email = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    other_names = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)


class Review(models.Model):
    review_id = models.AutoField(primary_key=True)
    date_reviewed = models.DateTimeField(auto_now_add=True)
    review_text = models.CharField(max_length=255)
    order_id = models.ForeignKey("Order", on_delete=models.CASCADE)
    customer_id = models.ForeignKey("Customer", on_delete=models.CASCADE)

    def __str__(self):
        return self.name
