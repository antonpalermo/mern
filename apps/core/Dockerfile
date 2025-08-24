ARG NODE_VERSION=current

FROM node:${NODE_VERSION}-alpine AS base

WORKDIR /usr/apps

COPY package.json .

RUN npm install --omit=dev

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
