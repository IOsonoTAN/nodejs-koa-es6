'use strict'

const Promise = require('bluebird')

module.exports = () => {
  const models = new Set()
  models.add(require('./redis')())
  models.add(require('./mongo')())
  return Promise.all(models).spread((redis, mongo) => ({ redis, mongo }))
}
