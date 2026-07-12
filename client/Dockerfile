FROM node:22-alpine AS builder
LABEL author="Izzatbek"
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
FROM nginx:alpine
WORKDIR /app
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]