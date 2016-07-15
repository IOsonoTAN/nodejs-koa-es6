'use strict'

const debug = require('debug')('cc:controller:user')
const helper = require('../helpers')

module.exports = {
  getUser
}

function* getUser() {
  debug(getUser.name)
  const userId = this.params.userId
  try {
    const userDetail = yield this.models.mongo.user.getOne(userId)
    helper.response(this, userDetail)

    // const userDetail = yield this.models.mongo.user.getAll()
    // helper.response(this, userDetail)
  } catch(error){
    debug('error', error)
    helper.responseError(this, error)
  }
}
