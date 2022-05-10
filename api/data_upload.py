"""Script to upload data to the database, only run once"""


import itertools
from operator import index

from turtle import clear
import requests
import random
from datetime import datetime
import pandas as pd





DATABASE_DELETION_KEY = "Production.. am I right?"


BASE_URL = "http://localhost:4000"
PRICES = [34.99, 39.99, 44.99, 49.99]

PLATFORMS = ["PC", "Playstation", "Xbox", "Nintendo"]

PRODS = [
    "Far Cry Primal",
    "FAR: Lone Sails",
    "Farm Together",
    "Farming Simulator 17",
    "Farming Simulator 19",
    "Fear The Wolves",
    "FIA European Truck ",
    "Fimbul",
    "Firewatch",
    "Five Nights at Freddy's",
    "Five Nights at Freddy's 2",
    "Football Manager 2018",
    "Football Manager 2019",
    "Football Manager Touch 2018",
]

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

##############################
################################
def upload_product():
    url = "/product/"

    for record in data:
        record["release_date"] = datetime.now()
       
        r = requests.post(
            BASE_URL + url,
            data= record
        )
        try:
            r.raise_for_status()
        except requests.exceptions.HTTPError as e:
            print(record)
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

    print(prod_ids)



    for i, (prod, plat) in itertools.product(prod_ids, platform_ids):
        response = requests.post(
            BASE_URL + url,
            json={
                "product_id": prod,
                "platform_id": plat,
                "price": random.choice(PRICES),
                "is_featured" : i % 50 == 0, # 1 in 50 chance of being featured
                
            },
        )

        response.raise_for_status()
    print("Uploaded product platforms")


def upload_product_genre():
    url = "/product_genre/"

    prod_ids = requests.get(f"{BASE_URL}/product/").json()
    prod_ids = [x["product_id"] for x in prod_ids]

    genre_ids = requests.get(f"{BASE_URL}/genre/").json()
    genre_ids = [x["genre_id"] for x in genre_ids]

    for prod in prod_ids:
        random.shuffle(genre_ids)
        for i in range(random.randint(1, 2)):

            body = {"product_id": prod, "genre_id": genre_ids[i]}

            r = requests.post(
                BASE_URL + url, json=body, headers={"Content-Type": "application/json"}
            )
            r.raise_for_status()
    print("Uploaded product genres")


def upload_stock():
    url = "/stock/"

    platform_ids = requests.get(f"{BASE_URL}/product_platform/").json()
    platform_ids = [x["product_platform_id"] for x in platform_ids]
    platform_ids = list(set(platform_ids))

    if not platform_ids:
        raise ValueError("No platform prod in the database")

    for plat, _ in itertools.product(platform_ids, range(10)):
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
    for i in range(random.randint(1, 10)):
        r = requests.post(
            BASE_URL + url,
            json={
                "surname": f"User {str(i)}",
                "email": f"user{str(i)}@gmail.com",
                "password": "password",
                "address": "address",
                "phone_number": "phone",
                "city": "LONDON",
                "other_names": "James",
                "username": f"user{str(i)}",
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

        body = {
            "product_id": product,
            "user_id": random.choice(users),
            "date_reviewed": datetime.now().strftime("%Y-%m-%d"),
            "game_play": random.randint(1, 5),
            "social": random.randint(1, 5),
            "graphics": random.randint(1, 5),
            "value": random.randint(1, 5),
            "overall": random.randint(1, 5),
            "positive": "These are the positive things",
            "negative": "These are the negative things",
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
    requests.get(BASE_URL + url, params = {"key": DATABASE_DELETION_KEY })


if __name__ == "__main__":
    clear_db()
    upload_platform()
    upload_product()
    upload_product_platform()
    upload_stock()
    upload_user()
    upload_order()
    # upload_order_detail()
    upload_review()
