'use strict'

const redis = require('redis')
const Promise = require('bluebird')
const config = require('../../config')
const namespace = config.env.redis.ns

module.exports = () => {
  Promise.promisifyAll(redis.RedisClient.prototype)
  Promise.promisifyAll(redis.Multi.prototype)

  return new Promise((resolve, reject) => {
    const client = redis.createClient(config.env.redis.server, { auth_pass: config.env.redis.auth })
    client.namespace = namespace
    client.on('connect', onConnect)
    client.on('error', err => reject(err))

    function onConnect() {
      return resolve({
        // bin: require('./bin')(client),
        client
      })
    }
  })
}
