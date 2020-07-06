FROM node:alpine

WORKDIR /home/app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN npm i
RUN npm install react-scripts -g --silent
COPY . .
CMD ["npm","run","build"]
COPY ./build /var/www/html