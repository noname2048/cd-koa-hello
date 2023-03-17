import Koa from 'koa'
import Router from 'koa-router'
import api from './api/index.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'koa-bodyparser'

dotenv.config({path: '.env.local'})

if (process.env.MONGO_URI === undefined) {
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

app.use(bodyParser())

router.use('/api', api.routes())
app.use(router.routes()).use(router.allowedMethods)

app.listen(4000, () => {
  console.log('server is listening to port ' + port)
  console.log('hi')
})
