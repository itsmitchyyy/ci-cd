FROM node:15.1 as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json ./

COPY ./yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

FROM nginx

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx","-g","daemon off;"]