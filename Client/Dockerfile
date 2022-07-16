FROM node:16
RUN npm install -g create-react-app
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]