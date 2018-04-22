global.Promise = require('bluebird')
const _ = require('lodash')
const sanife = require('sanife')
const generate = require('nanoid/generate')
const axios = require('./axios')

_.mixin({
  removeFromArray: sanife.remove,
  contains: sanife.contains,
  echoid: (n = 10) =>
    generate(
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
      n
    ),
  stripObject: o =>
    _(o)
      .omitBy(_.isUndefined)
      .omitBy(_.isNull)
      .value(),
  toJSON: o => JSON.parse(JSON.stringify(o)),
  str: str => JSON.stringify(str)
})
global._ = _
global.axios = axios
global.moment = require('moment')
