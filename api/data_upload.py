"""Script to upload data to the database, only run once"""


import itertools
from turtle import clear
import requests
import random

BASE_URL = "http://localhost:4000"
DEV_NAMES = ["Rockstar Games", "Electronic Arts", "Activision"]
PRICES = [34.99, 39.99, 44.99, 49.99]


def upload_developer():
    url = "/developer/"

    for name in DEV_NAMES:
        requests.post(
            BASE_URL + url, json={"name": name, "description": "A great company"}
        )
    print("Uploaded developers")


PLATFORMS = ["PC", "PS4", "XBOX ONE", "SWITCH"]

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

GENRES = [
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


def upload_product():
    url = "/product/"

    developer_ids = requests.get(BASE_URL + "/developer/").json()
    developer_ids = [x["developer_id"] for x in developer_ids]

    # print(developer_ids)
    if not developer_ids:
        raise ValueError("No developers in the database")
    for name in PRODS:
        r = requests.post(
            BASE_URL + url,
            json={
                "name": name,
                "short_description": "A great product",
                "long_description": "A great product",
                "image_url": "asdf",
                "developer_id": random.choice(developer_ids),
            },
        )
        r.raise_for_status()
    print("Uploaded products")


def upload_platform():
    url = "/platform/"

    for name in PLATFORMS:
        r = requests.post(BASE_URL + url, json={"name": name})
        r.raise_for_status()
    print("Uploaded platforms")


def upload_genre():
    url = "/genre/"
    for name in GENRES:
        r = requests.post(
            BASE_URL + url, json={"name": name, "description": "A great genre"}
        )
        r.raise_for_status()
    print("Uploaded genres")


def check_db_empty():
    url = "/developer/"
    response = requests.get(BASE_URL + url)
    return response.json() == []


def upload_product_platform():
    url = "/product_platform/"

    prod_ids = requests.get(BASE_URL + "/product/").json()
    prod_ids = [x["product_id"] for x in prod_ids]

    if not prod_ids:

        raise ValueError("No products in the database")

    platform_ids = requests.get(BASE_URL + "/platform/").json()
    platform_ids = [x["platform_id"] for x in platform_ids]

    for prod in prod_ids:
        random.shuffle(platform_ids)
        for i in range(random.randint(1, 3)):
            response = requests.post(
                BASE_URL + url,
                json={
                    "product_id": prod,
                    "platform_id": platform_ids[i],
                    "price": random.choice(PRICES),
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
                    {"product_platform_id" : random.choice(prod_platform_ids), "quantity": random.randint(2, 3)}
                ]
               
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
            "rating": random.randint(1, 5),
            "text": "review text will go here.",
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
    requests.get(BASE_URL + url)


if __name__ == "__main__":
    clear_db()

    upload_developer()
    upload_platform()
    upload_genre()
    upload_product()
    upload_product_platform()
    upload_product_genre()
    upload_stock()
    upload_user()
    upload_order()
    # upload_order_detail()
    upload_review()
