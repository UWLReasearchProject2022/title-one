from django.contrib import admin


# Register your models here.
# Register your models here.
from .models import (
    Customer,
    Review
)

admin.site.register(Customer)
admin.site.register(Review)
