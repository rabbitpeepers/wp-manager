# Build WEB static files
FROM node:14 AS webbuild
WORKDIR /wp-manager

# add /web/node_modules/.bin to $PATH
ENV PATH /web/node_modules/.bin:$PATH
ENV REACT_APP_API_URL=http://localhost:9000

# install and cache app dependencies
COPY ./package.json /wp-manager/package.json
COPY ./bit-components /wp-manager/bit-components
COPY ./yarn.lock /wp-manager/yarn.lock
COPY ./web/public /wp-manager/web/public
COPY ./web/package.json /wp-manager/web/package.json
COPY ./web/tsconfig.json /wp-manager/web/tsconfig.json
COPY ./web/.eslintrc /wp-manager/web/.eslintrc
COPY ./web/src /wp-manager/web/src
COPY ./app /wp-manager/app
RUN yarn

WORKDIR /wp-manager/web
RUN yarn build

WORKDIR /wp-manager/app

# start app
CMD ["yarn", "serve"]
