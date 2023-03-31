import {Schema, model} from 'mongoose'
import * as crypto from "crypto"

function hash(password) {
  return crypto.createHmac('sha256', process.env.SECRET_KEY).update(password).digest('hex')
}

const AccountSchema = new Schema({
  profile: {
    username: String,
    thumbnail: {
      type: String,
      default: '/static/images/default_thumbnail.png'
    },
    email: {type: String},
    social: {
      facebook: {
        id: String,
        accessToken: String,
      },
      google: {
        id: String,
        accessToken: String,
      }
    },
    password: String,
    thoughtCount: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now}
  }
})

const Account = model('Account', AccountSchema)


export default Account
