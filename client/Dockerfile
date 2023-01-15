# base of image
FROM node:16.17.1

WORKDIR /client

COPY package.json /client/ 
RUN npm install

COPY . .

# Specifies the port the node app will be running on
EXPOSE 3000

# Runs "node server.js" after the above step is completed
CMD ["npm", "start"]