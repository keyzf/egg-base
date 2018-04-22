module.exports = app => {
  const { User } = app.model

  return class UserController extends app.Controller {
    async index(ctx) {
      const { params } = ctx
      const users = await User.findAll()
      ctx.send(users)
    }

    async create() {
      await User.create({
        name: 'hello'
      })
    }

    async show(ctx) {
      const { params } = ctx
      const user = await User.findByLogin(params.login)
      await user.logSignin()
      this.ctx.body = user
    }
  }
}
