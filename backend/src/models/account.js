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
AccountSchema.statics.findByUsername = function (username) {
  return this.findOne({'profile.username': username}).exec()
}

AccountSchema.statics.findByEmail = function (email) {
  return this.findOne({email}).exec()
}

AccountSchema.statics.findByEmailOrUsername = function ({username, email}) {
  return this.findOne({
    $or: [
      {'profile.username': username},
      {email}
    ]
  }).exec();
}
AccountSchema.statics.localRegister = function({username, email, password}) {
  const account = new this({
    profile: {
      username
    },
    password: hash(password)
  })
  return account.save()
}

AccountSchema.methods.validatePassword = function (password) {
  const hashed = hash(password)
  return this.password === hashed
}

const Account = model('Account', AccountSchema)


export default Account
