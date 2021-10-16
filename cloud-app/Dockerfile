FROM node:14
LABEL maintainer="Md Towfiqul Alom"

RUN apt-get update

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

