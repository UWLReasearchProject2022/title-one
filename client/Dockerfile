ARG port=3000

FROM node:lts

WORKDIR /app/src
COPY package.json /app/src

RUN npm install

EXPOSE $port
CMD ["npm", "start"]
