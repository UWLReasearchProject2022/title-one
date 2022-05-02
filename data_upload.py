"""Script to upload data to the database, only run once"""

import requests
import random

BASE_URL = "http://localhost:4000"
DEV_NAMES = ["Rockstar Games", "Electronic Arts", "Activision"]
PRICES = [34.99, 39.99, 44.99, 49.99]


def upload_developer():
    url = "/developer/"

    for name in DEV_NAMES:
        requests.post(BASE_URL + url,
                      json={
                          "name": name,
                          "description": "A great company"
                      })


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
        print(r.status_code)


def upload_platform():
    url = "/platform/"

    for name in PLATFORMS:
        r = requests.post(BASE_URL + url, json={"name": name})
        r.raise_for_status()


def upload_genre():
    url = "/genre/"
    for name in GENRES:
        r = requests.post(BASE_URL + url,
                          json={
                              "name": name,
                              "description": "A great genre"
                          })
        r.raise_for_status()


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
        for i in range(random.randint(1, len(platform_ids))):
            response = requests.post(
                BASE_URL + url,
                json={
                    "product_id": prod,
                    "platform_id": platform_ids[i],
                    "price": random.choice(PRICES),
                },
            )
            response.raise_for_status()


def upload_product_genre():
    url = "/product_genre/"
    for prod in PRODS:
        random.shuffle(GENRES)
        for i in range(random.randint(1, len(GENRES))):

            requests.post(BASE_URL + url,
                          json={
                              "product_id": prod,
                              "genre_id": GENRES[i]
                          })


def upload_stock():
    url = "/stock/"

    platform_ids = requests.get(BASE_URL + "/product_platform/").json()
    platform_ids = [x["product_platform_id"] for x in platform_ids]

    if not platform_ids:
        raise ValueError("No platform prod in the database")

    for plat in platform_ids:
        for _ in range(random.randint(1, 10)):
            r = requests.post(
                BASE_URL + url,
                json={
                    "product_platform_id": plat,
                },
            )
            r.raise_for_status()


def upload_customer():
    url = "/customer/"
    for i in range(random.randint(1, 10)):
        requests.post(
            BASE_URL + url,
            json={
                "surname": f"Customer {str(i)}",
                "email": "customer" + str(i) + "@gmail.com",
                "password": "password",
                "address": "address",
                "phone_number": "phone",
                "city": "LONDON",
                "other_names": "James",
            },
        )


def upload_order():
    url = "/order/"
    customer_ids = requests.get(BASE_URL + "/customer/").json()
    customer_ids = [x["customer_id"] for x in customer_ids]
    for i in range(random.randint(1, 10)):
        requests.post(
            BASE_URL + url,
            json={
                "customer_id": random.choice(customer_ids),
                "date_ordered": "2020-01-01",
                "date_shipped": "2020-01-01",
                "date_delivered": "2020-01-01",
            },
        )


def upload_order_detail():
    url = "/order_detail/"
    order_ids = requests.get(BASE_URL + "/order/").json()
    order_ids = [x["order_id"] for x in order_ids]
    if not order_ids:
        raise ValueError("No orders in the database")

    stock_ids = requests.get(BASE_URL + "/stock/").json()
    stock_ids = [x["stock_id"] for x in stock_ids]
    if not stock_ids:
        raise ValueError("No stocks in the database")

    for i in range(random.randint(1, 3)):
        requests.post(
            BASE_URL + url,
            json={
                "order_id": random.choice(order_ids),
                "stock_id": random.choice(stock_ids),
            },
        )


if __name__ == "__main__":
    # if not check_db_empty():
    #     raise ValueError("Database is not empty you absolute moron.")

    # upload_developer()
    upload_platform()
    # upload_genre()
    upload_product()
    upload_product_platform()
    upload_product_genre()
    upload_stock()
    upload_customer()
    upload_order()
    upload_order_detail()
