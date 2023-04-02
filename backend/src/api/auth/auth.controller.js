import * as Joi from 'joi'
import Account from 'models/Account'

const localRegister = async (ctx) => {
  ctx.body = 'register'
}

export {localRegister}