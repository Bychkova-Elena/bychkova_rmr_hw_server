FROM node:16.16-alpine as builder

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production
RUN npx yarn-deduplicate && yarn
COPY . ./
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./etc/nginx.conf /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


