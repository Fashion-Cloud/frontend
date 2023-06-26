FROM node:16 as build

WORKDIR /frontend

RUN  npm install

COPY . /frontend
RUN npm run build