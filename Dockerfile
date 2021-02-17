FROM node:14

WORKDIR /app

COPY . .

RUN npm i -g nodemon