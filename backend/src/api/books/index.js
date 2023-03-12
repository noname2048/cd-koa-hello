import Router from 'koa-router'

import * as booksCtrl from './books.controller.js'

const books = new Router()

books.post('/', booksCtrl.createBook)
books.delete('/', booksCtrl.deleteBook)
books.put('/', booksCtrl.replaceBook)
books.patch('/', booksCtrl.updateBook)

export default books
