'use strict'

const debug = require('debug')('cc:controller:page')
const helper = require('../helpers')

module.exports = page

function* page() {
  debug(page.name)
  try {
    const userDetail = {
      username: 'IOsonoTAN',
      password: '123321'
    }
    const createUser = yield this.models.mongo.user.create(userDetail)
    helper.response(this, createUser)
  } catch(error){
    debug('error', JSON.stringify(error))
    helper.responseError(this, error)
  }
}
