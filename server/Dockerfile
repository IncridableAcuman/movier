FROM gradle:8-jdk17-alpine AS builder
LABEL authors="izzatbek"
WORKDIR /app
COPY gradle gradle
ENTRYPOINT ["top", "-b"]