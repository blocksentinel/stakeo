FROM node:12.18-alpine as base
WORKDIR /app
ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000
EXPOSE 3000

FROM node:12.18-buster as build
WORKDIR /src
ENV DISABLE_OPENCOLLECTIVE 1
COPY package.json package-lock.json /src/
RUN npm ci
COPY . /src
RUN npm run build
RUN npm ci --production

FROM base as final
WORKDIR /app
COPY --from=build /src /app
CMD [ "npm", "start" ]
