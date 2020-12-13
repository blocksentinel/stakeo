FROM node:14.15-alpine as base
WORKDIR /app
ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000
EXPOSE 3000

FROM node:14.15-buster as build
ARG FONTAWESOME_NPM_AUTH_TOKEN
WORKDIR /src
ENV DISABLE_OPENCOLLECTIVE 1
COPY .npmrc.default /src/.npmrc
COPY package.json package-lock.json /src/
RUN npm ci
COPY . /src
RUN npm run build
RUN npm ci --production
RUN rm -f /src/.npmrc*

FROM base as final
WORKDIR /app
COPY --from=build /src /app
CMD [ "npm", "start" ]
