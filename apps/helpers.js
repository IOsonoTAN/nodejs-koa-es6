'use strict'

module.exports = {
  response,
  responseError
}

function response(ctx, result, status){
  ctx.body = {
    success: true,
    result
  }
  return ctx.status = status || 200
}

function responseError(ctx, error, status){
  ctx.body = {
    success: false,
    error
  }
  return ctx.status = status || 500
}
