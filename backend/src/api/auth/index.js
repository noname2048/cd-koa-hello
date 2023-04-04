import * as Router from 'koa-router'
import * as authCtrl from './auth.controller.js'

const auth = new Router()

auth.post('/register/local', authCtrl.localRegister)
auth.post('/login/local', authCtrl.localLogin);
auth.get('/exists/:key(email|username)/:value', authCtrl.exists);
auth.post('/logout', authCtrl.logout);

export default auth
