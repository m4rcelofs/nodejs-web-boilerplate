FROM node:5

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app/frontend
COPY frontend/package.json /usr/src/app/frontend/
RUN npm install
COPY frontend /usr/src/app/frontend
RUN npm run production 

WORKDIR /usr/src/app/backend
COPY backend/package.json /usr/src/app/backend/
RUN npm install
COPY backend /usr/src/app/backend

EXPOSE 3000

CMD [ "npm", "start" ]