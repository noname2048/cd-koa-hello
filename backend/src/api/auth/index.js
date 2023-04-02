import * as Router from 'koa-router'
import * as authCtrl from './auth.controller.js'

const auth = new Router()

auth.post('/register/local', authCtrl.localRegister)

export default auth
