import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config({path: '.env'})
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI,).then(
  (response) => {
    console.log(response)
    console.log('Successfully connected to mongodb')
  }
).catch(e => {
  console.error(e)
})


