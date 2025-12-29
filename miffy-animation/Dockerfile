# syntax=docker/dockerfile:1
# ---- Build stage ----
FROM node:20-alpine AS front-end-build
WORKDIR /app

RUN rm -rf /app/*
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine

# Copy build output from previous stage to Nginx’s static directory
COPY --from=front-end-build /app/dist /usr/share/nginx/html

# Expose port 80 so you can access it in the browser
EXPOSE 80

# Nginx runs automatically when container starts
CMD ["nginx", "-g", "daemon off;"]
