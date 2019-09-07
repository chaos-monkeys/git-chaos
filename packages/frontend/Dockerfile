FROM node:10.16.0-stretch-slim

RUN npm install --unsafe-perm -g elm@0.19.0-no-deps

ENTRYPOINT ["elm"]

# Build the Elm app
RUN npm start
