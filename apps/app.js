'use strict'

const app = require('koa')()
const api = require('koa-router')()
const debug = require('debug')('cc')
const error = require('debug')('cc:error')
const promise = require('bluebird')
const config = require('./config')
const router = require('./routers')

module.exports = start

module.exports = () => promise.try(() => require('./models')())
  .then(start)
  .catch(handleErr)

function start(models) {
  debug(start.name)
  // config
  app.proxy = true
  app.context.error = error
  app.context.models = models
  // routing
  api.use(router.routes())
  app.use(api.routes())
  // error handling
  app.on('error', err => handleErr(err))
  // port binding
  app.listen(config.env.port)
  return app
}

function handleErr(err) {
  debug(handleErr.name)
  error(err.message)
}
