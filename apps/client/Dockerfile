FROM node:current-alpine AS base

WORKDIR /usr/apps

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
