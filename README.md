# Title One


## Setup
This repo requires docker and docker compose to be installed. WSL2 is recommended if running on Windows.

This application uses a docker-compose.yml file to orchestrate three separate containers:
- Database - Postgres
- API - Django + Django Rest Framework
- Client - Create React App (TS)

To start you need to create new env files based upon the examples. To run locally you shouldn't need to modify these simply remove the prefix "example_" for the api, client and db.

Then run:
```shell
docker-compose up
```

If successful, the three containers should start up properly with no errors. 

If this is the first time setup, or the database models file has changed you will need to migrate the database. To do this you need to access the running container for the API. Enter:

```shell
docker exec -it title-one_api_1 bash
```

(if you get an error suggesting the container doesn't exist, run `docker container ls` to list the containers and take the name of the API from the far right column and edit the above command accordingly)

Once inside the container you should seem the console change slightly and there should be a `#` symbol before you type. 

Next enter: 
``` shell
python manage.py migrate
```
It should run through several migrations and you see "OK" after each one.

Next you will need to create a superuser which acts as the admin login. Again you will need to be inside the container with `docker exec` as above. Then enter:

```shell
python manage.py createsuperuser
```


Run through the script and enter details for the super user. You can use `admin` for both the username and password for local testing purposes. 

### Documentation

Documentation for the backend api can be accessed in swagger format at http://localhost:4000/swagger/.

Exact structure of the endpoints is tbc.

## Frontend Development

While the API is still in development there is a need for a mock API to develop the frontend components. We are using JSON Server which uses a single JSON file to spin up a local REST API. 

Install this server globally with:
```bash
npm install -g json-server
```

To start the API open a console and navigate to the `mock api` folder. Then run:
```bash
json-server --watch db.json --port 4000 --routes routes.json
```

To add some artificial delay to the api to test loading state etc, add: `--delay 400` for 400ms of delay