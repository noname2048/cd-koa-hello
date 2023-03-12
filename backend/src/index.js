import Koa from 'koa'
import Router from 'koa-router'
import api from './api/index.js'

const app = new Koa()
const router = new Router()

router.use('/api', api.routes())

app.use(router.routes()).use(router.allowedMethods)

app.listen(4000, () => {
  console.log('server is listening to port 4000')
})
