Backend:
-

- koa with some configurable middleware
- config based on environment
- new relic

`npm test` will run all mocha tests

`npm start` will start the server at `localhost:3000` (static assets from `frontend/build` are also served)

Frontend:
-

- React
- Zurb Foundation
- built with Babel and Webpack

`npm dev` will start a development server with auto-reload on `localhost:8080`

`npm production` will compile assets on `/build`

Run with
-

`docker build -t marcelofs/nodejs-web-boilerplate .`

`docker run -d -p 3000:3000 marcelofs/nodejs-web-boilerplate`

