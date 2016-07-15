'use strict'

const debug = require('debug')('cc:models:mongo:user')
const config = require('../../config')
const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema
let User

const userSchema = new Schema({
  username: { type: String, index: { unique: true }, lowercase: true, trim: true },
  password: { type: String },
  role: { type: [String], default: 'member' },
  status: { type: String, default: 'active' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date }
}, { versionKey: false })
userSchema.plugin(mongoosePaginate)

module.exports = _mongoose => {
  User = _mongoose().model('User', userSchema)
  return {
    getAll,
    getOne,
    create
  }
}

function getAll(){
  debug(getAll.name)
  return User.paginate({}, { offset: 0, limit: 10 }, (error, result) => {
    if(error) handleError(error)
    return result
  })
}

function getOne(userId){
  debug(getOne.name)
  return User.findOne({ "_id": userId }, (error, result) => {
    if(error) handleError(error)
    return result
  })
}

function create(detail){
  debug(create.name)
  const result = new User(detail)
  return result.save((error, result) => {
    if(error) handleError(error)
    return result
  })
}

function handleError(error) {
  debug(handleError.name)
  new Error(error)
}
