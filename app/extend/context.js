// app/extend/context.js
const transformError = (msg, type) => {
  let error = {}
  if (_.isPlainObject(msg)) return msg
  if (_.isString(msg)) error.errorMsg = msg
  if (_.isString(type)) error.error = type
  return error
}

module.exports = {
  send(param) {
    this.status = 200
    this.body = param
  },
  redirectToLogin() {
    this.unauth()
  },
  unauth(...args) {
    this.status = 401
    const res = _.merge(
      {
        error: 'Unauthorized',
        errorMsg: 'Unauthorized'
      },
      transformError(...args)
    )
    this.body = res
  },
  forbid(...args) {
    this.status = 403
    const res = _.merge(
      {
        error: 'Forbidden',
        errorMsg: 'Forbidden'
      },
      transformError(...args)
    )
    this.body = res
  },
  notFound(...args) {
    this.status = 404
    const res = _.merge(
      {
        error: 'Not Found',
        errorMsg: 'Not Found'
      },
      transformError(...args)
    )
    this.body = res
  },
  ok() {
    this.status = 200
    this.body = {
      success: true
    }
  }
}
