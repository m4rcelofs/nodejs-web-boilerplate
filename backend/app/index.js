'use strict';

const app = module.exports = require('koa')(),
      config = require('config'),
      helmet = require('koa-helmet'),
      router = require('./routes/index');

if(config.newRelic.enabled) {
  require('newrelic');
}

if (config.logging.xResponseTime) {
  app.use(require('koa-response-time')());
}

app.use(require('koa-static')(__dirname + '/../../frontend/build'),
                              {maxage: config.resources.maxAge});

if (config.logging.requestsTime) {
  app.use(require('koa-logger')());
}

if (config.rateLimit.enabled) {
  app.use(require('koa-better-ratelimit')(config.rateLimit));
}

app.use(helmet());
app.use(helmet.csp({
  directives: {
    baseUri: ["'self'"],
    childSrc: ["'self'"],
    connectSrc: ["'self'"],
    defaultSrc: ["'self'"],
    fontSrc: ["'self", 'https://fonts.gstatic.com'],
    formAction: ["'self'"],
    frameAncestors: ["'none'"],
    imgSrc: ["'self'"],
    mediaSrc: ["'none'"],
    objectSrc: ["'none'"],
    styleSrc: ["'self'", 'https://fonts.googleapis.com']
  }
}));

app.use(require('koa-bodyparser')());

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.server.port);

console.log('Server listening on ' + config.server.port);