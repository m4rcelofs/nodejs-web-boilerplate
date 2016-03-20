'use strict';

const router = module.exports = require('koa-router')();

const example = require('./example');
router.use('/example', example.routes(), example.allowedMethods());
