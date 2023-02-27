FROM node:18

RUN mkdir /var/prerender
WORKDIR /var/prerender

RUN apt-get update
RUN apt-get install -y chromium

ADD lib ./lib
ADD package.json .

RUN npm install

ADD server.js .

EXPOSE 3000

CMD ["node", "server.js"]
