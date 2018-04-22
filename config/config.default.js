module.exports = appInfo => {
  const path = require('path')
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1522947221239_5059'

  // add your config here
  config.middleware = []

  config.sequelize = {
    dialect: 'sqlite',
    database: 'test',
    storage: path.resolve(process.env.PWD, 'db.sqlite')
  }

  return config
}
