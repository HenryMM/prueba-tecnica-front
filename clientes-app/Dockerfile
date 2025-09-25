# Etapa 1: build de Angular
FROM node:20.19 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --output-path=dist

# Etapa 2: servidor Nginx para servir la app
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
