FROM node:14-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.27.0-alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
