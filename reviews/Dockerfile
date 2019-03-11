FROM node:11-alpine

RUN mkdir -p /src/app/

WORKDIR /src/app/

COPY . /src/app/

RUN npm install
RUN npm run build

EXPOSE 3010

CMD [ "npm", "start" ]