import * as Joi from 'joi'
import mongoose from "mongoose"
import {Book} from '../../models/book.js'


const ObjectId = mongoose.Types.ObjectId

const listBook = (ctx) => {
  ctx.body = 'listed'
}

const getBook = async (ctx) => {
  const {id} = ctx.params
  let book

  try {
    book = await Book.findById(id).exec()
  } catch (e) {
    if (e.name === 'CastError') {
      ctx.status = 400
      return
    }
    return ctx.throw(500, e)
  }

  if (!book) {
    ctx.status = 404
    ctx.body = {message: 'book not found'}
    return
  }

  ctx.body = book
}

const createBook = async (ctx) => {
  ctx.body = 'created'
  const {
    title, authors, publishedDate, price, tags
  } = ctx.request.body;
  const book = new Book({
    title, authors, publishedDate, price, tags
  })
  try {
    await book.save();
  } catch (e) {
    return ctx.throw(500, e);
  }
}

const deleteBook = async (ctx) => {
  const {id} = ctx.params;

  try {
    await Book.findByIdAndRemove(id).exec()
  } catch (e) {
    if (e.name === 'CastError') {
      ctx.status = 400
      return
    }
  }

  ctx.status = 204
}

const replaceBook = async (ctx) => {
  const {id} = ctx.params

  if (!ObjectId.isValid((id))) {
    ctx.status = 400
    return
  }

  const schema = Joi.object().keys({
    title: Joi.string().required(),
    authors: Joi.array().items(Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required()
    })),
    publishedDate: Joi.date().required(),
    price: Joi.number().required(),
    tags: Joi.array().items((Joi.string()).required())
  })


  const result = Joi.validate(ctx.request.body, schema)

  if (result.error) {
    ctx.status = 400
    ctx.body = result.error
    return
  }

  let book

  try {
    book = await Book.findByIdAndUpdate(id, ctx.request.body, {
      upsert: true,
      new: true
    })
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = book
}


const updateBook = async (ctx) => {
  ctx.body = 'updated'
}

export {listBook, createBook, getBook, deleteBook, replaceBook, updateBook};
