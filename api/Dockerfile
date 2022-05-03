FROM python:3.9-buster
ENV PYTHONUNBUFFERED=1
RUN mkdir /src
RUN apt-get update
RUN apt-get install -y gunicorn
COPY . /src
WORKDIR /src
COPY requirements.txt /src/
RUN pip install -r requirements.txt
ENV GUNICORN_CMD_ARGS="--bind 0.0.0.0:8000 --workers=5"
EXPOSE 8000
CMD ["gunicorn","titleone.wsgi:application"]
