FROM node:alpine

COPY package*.json ./tmp/
RUN cd /tmp && yarn install

RUN mkdir -p /src/app && cp -a /tmp/node_modules /src/app/
WORKDIR /src/app
COPY . /src/app

EXPOSE 3000
CMD [ "yarn", "start" ]