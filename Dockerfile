FROM node:23-alpine

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . .

CMD [ "node", "src/index.js" ]