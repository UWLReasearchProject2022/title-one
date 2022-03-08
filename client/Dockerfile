FROM node:15.14-alpine3.11

RUN addgroup app && adduser -S -G app app
RUN mkdir /app && chown app:app /app
USER app

WORKDIR /app
COPY package.json /app

RUN npm install

CMD ["npm", "start"]
