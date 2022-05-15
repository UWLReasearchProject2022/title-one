"""Script to upload data to the database, only run once"""


import itertools
from operator import index

from sre_constants import NEGATE
from sre_parse import CATEGORIES
from turtle import clear
import requests
import random
from datetime import datetime
import pandas as pd
import json


DATABASE_DELETION_KEY = "Production.. am I right?"

import names

BASE_URL = "http://localhost:4000"
PRICES = [34.99, 39.99, 44.99, 49.99]

PLATFORMS = ["PC", "Playstation", "Xbox", "Nintendo"]

CATEGORIES = [
    "Action",
    "Adventure",
    "RPG",
    "Strategy",
    "Simulation",
    "Sports",
    "Racing",
    "Fighting",
    "MMO",
    "Shooter",
    "Horror",
]

DEVELOPERS = [
    "Ubisoft",
    "Rockstar Games",
]

AGE_RATINGS = ["3+", "7+", "12+", "16+", "18+"]


data = pd.read_csv("api/api/data/games.csv").to_dict("records")
# create an static string array of positive reviews to say about a game using context from the PRODS list
POSITIVE = [
    "I like the graphics",
    "I like the gameplay",
    "I like the soundtrack",
    "I like the story",
    "I liked the characters",
    "Interesting gameplay",
    "Cool plot",
    "Great soundtrack",
    "Great story",
    "Great characters",
]
NEGATIVE = [
    "I hated the graphics",
    "I hated the gameplay",
    "I hated the soundtrack",
    "I wasn't a fan of the story",
    "I didn't like the characters",
    "I didn't like the plot",
    "I would have preferred a different soundtrack",
    "I would have preferred a different story",
    "I would have preferred different characters",
]

##############################
################################
def upload_product():
    url = "/product/"

    for record in data:
        record["release_date"] = datetime.now().strftime("%Y-%m-%d")

        r = requests.post(BASE_URL + url, data=record)
        try:
            r.raise_for_status()
        except requests.exceptions.HTTPError as e:
            print(record)
            # save the record as json file using json library

            # record looks fine to me but returns 400.

            raise e


##########################
#########################


def upload_platform():
    url = "/platform/"

    for name in PLATFORMS:
        r = requests.post(BASE_URL + url, json={"name": name})
        r.raise_for_status()
    print("Uploaded platforms")


def upload_product_platform():
    url = "/product_platform/"

    prod_ids = requests.get(BASE_URL + "/product/").json()
    prod_ids = [x["product_id"] for x in prod_ids]

    if not prod_ids:

        raise ValueError("No products in the database")

    platform_ids = requests.get(BASE_URL + "/platform/").json()
    platform_ids = [x["platform_id"] for x in platform_ids]

    for i, (prod, plat) in enumerate(itertools.product(prod_ids, platform_ids)):
        response = requests.post(
            BASE_URL + url,
            json={
                "product_id": prod,
                "platform_id": plat,
                "price": random.choice(PRICES),
                "is_featured": i % 50 == 0,  # 1 in 50 chance of being featured
            },
        )

        response.raise_for_status()
    print("Uploaded product platforms")


def upload_stock():
    url = "/stock/"

    platform_ids = requests.get(f"{BASE_URL}/product_platform/").json()
    platform_ids = [x["product_platform_id"] for x in platform_ids]
    platform_ids = list(set(platform_ids))

    if not platform_ids:
        raise ValueError("No platform prod in the database")

    for plat, _ in itertools.product(platform_ids, range(1)):
        r = requests.post(
            BASE_URL + url,
            json={
                "product_platform_id": plat,
            },
        )
        r.raise_for_status()
    print("Uploaded stock")


def upload_user():
    url = "/user/"
    for i in range(0, 20):
        print(i)
        first_name = names.get_first_name()
        last_name = names.get_last_name()
        email = f"{first_name.lower()}.{last_name.lower()}@gmail.com"
        r = requests.post(
            BASE_URL + url,
            json={
                "surname": last_name,
                "email": email,
                "password": "password",
                "address": {
                    "house_number": str(random.randint(1, 100)),
                    "road_name": random.choice(["Test Road", "Test Street", ""]),
                    "city": random.choice(["Test City", "Test Town", ""]),
                    "postcode": "TE1 1ST",
                    "county": random.choice(["Test County", "Test Province", ""]),
                },
                "other_names": first_name,
            },
        )
        r.raise_for_status()

    print("Uploaded users")


def upload_order():
    url = "/order/"
    user_ids = requests.get(f"{BASE_URL}/user/").json()
    user_ids = [x["user_id"] for x in user_ids]

    prod_platform_ids = requests.get(f"{BASE_URL}/product_platform/").json()
    prod_platform_ids = [x["product_platform_id"] for x in prod_platform_ids]

    for _ in range(random.randint(1, 10)):
        requests.post(
            BASE_URL + url,
            json={
                "user_id": random.choice(user_ids),
                "order_details": [
                    {
                        "product_platform_id": random.choice(prod_platform_ids),
                        "quantity": random.randint(2, 3),
                    }
                ],
            },
        )
    print("Orders uploaded")


# def upload_order_detail():
#     url = "/order_detail/"
#     order_ids = requests.get(BASE_URL + "/order/").json()
#     order_ids = [x["order_id"] for x in order_ids]
#     if not order_ids:
#         raise ValueError("No orders in the database")

#     stock_ids = requests.get(BASE_URL + "/stock/").json()
#     stock_ids = [x["stock_id"] for x in stock_ids]
#     if not stock_ids:
#         raise ValueError("No stocks in the database")

#     for i in range(10):
#         r = requests.post(
#             BASE_URL + url,
#             json={
#                 "order_id": random.choice(order_ids),
#                 "stock_id": random.choice(stock_ids),
#             },
#         )
#         r.raise_for_status()
#     print("Uploaded order details")


def upload_review():
    url = "/review/"

    products = requests.get(f"{BASE_URL}/product/").json()
    products = [x["product_id"] for x in products]

    users = requests.get(f"{BASE_URL}/user/").json()
    users = [x["user_id"] for x in users]

    for product, _ in itertools.product(products, range(5)):
        game_play = (random.randint(1, 10),)
        social = (random.randint(1, 10),)
        graphics = (random.randint(1, 10),)
        value = (random.randint(1, 10),)
        body = {
            "product_id": product,
            "user_id": random.choice(users),
            "date_reviewed": datetime.now().strftime("%Y-%m-%d"),
            "game_play": game_play[0],
            "social": social[0],
            "graphics": graphics[0],
            "value": value[0],
            "overall": ((game_play[0] + social[0] + graphics[0] + value[0]) / 4),
            "positive": random.choice(POSITIVE),
            "negative": random.choice(NEGATIVE),
        }
        r = requests.post(
            BASE_URL + url,
            json=body,
        )

        try:
            r.raise_for_status()
        except Exception:
            print(body)
            raise
    print("Uploaded reviews")


def clear_db():
    url = "/clear"
    r = requests.get(BASE_URL + url, params={"key": DATABASE_DELETION_KEY})
    r.raise_for_status()


if __name__ == "__main__":
    clear_db()
    upload_platform()
    upload_product()
    upload_product_platform()
    upload_stock()
    upload_user()
    upload_order()
    upload_review()
