'use strict'

module.exports = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  mongodb: {
    server: process.env.DB_MONGO_URL || 'mongodb://localhost:27017/traova'
  },
  redis: {
    server: process.env.DB_REDIS_SERVER || 'redis://localhost:6379',
    auth: process.env.DB_REDIS_AUTH,
    ns: process.env.DB_REDIS_NAMESPACE || 'traova'
  }
}
