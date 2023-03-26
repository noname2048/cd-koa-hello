import Koa from 'koa'
import Router from 'koa-router'
import api from './api/index.js'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'koa-bodyparser'

dotenv.config({path: './src/env/.env.local'})

if (process.env.MONGO_URI === undefined) {
  console.log(process.env.MONGO_URI)
  process.exit(0)
}

mongoose.connect(process.env.MONGO_URI).then(
  response => {
    console.log('Successfully connected to mongodb')
  }
).catch(e => {
  console.error(e)
})

const app = new Koa()
const router = new Router()
const port = process.env.PORT || 4000

// 바디파서는 라우터보다 상단에 있어야 함
app.use(bodyParser())

router.use('/api', api.routes())
app.use(router.routes()).use(router.allowedMethods)

app.listen(4000, () => {
  console.log('server is listening to port ' + port)
  console.log('hi')
})
