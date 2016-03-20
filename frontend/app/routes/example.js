'use strict';

const router = module.exports = require('koa-router')(),
      controller = require('../controller/example');

router.get('/', function *() {
  this.body = controller.list();
});
