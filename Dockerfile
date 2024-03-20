FROM node:14.21.3-bullseye

EXPOSE 8000

RUN npm config set unsafe-perm true
WORKDIR /app
COPY ./package.json /app
RUN npm cache clean --force
RUN npm install
COPY . /app

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
CMD ["npm", "run", "develop" ]

