import {Schema, model} from 'mongoose'

const Author = new Schema({
  name: String,
  email: String
})

const Book = model('Book', new Schema({
  title: String,
  authors: [Author],
  publishedDate: Date,
  price: Number,
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
}))

export {Author, Book}
