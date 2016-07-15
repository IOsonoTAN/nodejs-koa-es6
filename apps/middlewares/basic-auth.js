'use strict'

const debug = require('debug')('cc:middleware:basicAuth')

module.exports = () => {
  return function *basicAuth(next){
    debug(basicAuth.name)
    yield next
  }
}
