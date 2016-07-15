'use strict'

const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')()
const controller = require('./controllers')
const basicAuth = require('./middlewares/basic-auth')()

router.get('/', basicAuth, bodyParser, controller.page)
router.get('/user/:userId', basicAuth, bodyParser, controller.user.getUser)

module.exports = router
