FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/hello-world /usr/share/nginx/html
EXPOSE 4200 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]