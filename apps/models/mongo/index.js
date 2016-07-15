'use strict'

const mongoose = require('mongoose')
const Promise = require('bluebird')
const config = require('../../config')

module.exports = () => {
  return Promise.try(() => connect)
    .then(instance => {
      return {
        user: require('./user')(instance)
      }
    })
}

function connect(){
  return mongoose.createConnection(config.env.mongodb.server, {
    promiseLibrary: require('bluebird')
  }, (error) => {
    if(error) throw error
  })
}
