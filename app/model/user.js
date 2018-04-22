// app/model/user.js

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const name = 'user'
  const schema = {
    login: STRING,
    name: STRING(30),
    password: STRING(32),
    age: INTEGER,
    last_sign_in_at: DATE,
    created_at: DATE,
    updated_at: DATE
  }

  const Model = app.model.define(name, schema)

  // 类方法
  Object.assign(Model, {
    findByLogin: async function(login) {
      return await this.findOne({
        where: {
          login
        }
      })
    }
  })

  // 示例方法
  Object.assign(Model.prototype, {
    // logSignin: async function(){
    //   await this.update({ last_sign_in_at: new Date() })
    // }
  })

  Model.sync({ alter: true })
  return Model
}
