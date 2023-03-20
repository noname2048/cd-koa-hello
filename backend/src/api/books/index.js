import Router from 'koa-router'

import * as booksCtrl from './books.controller.js'

const books = new Router()

books.get('/', booksCtrl.listBook)
books.get('/:id', booksCtrl.getBook)
books.post('/', booksCtrl.createBook)
books.delete('/', booksCtrl.deleteBook)
books.put('/', booksCtrl.replaceBook)
books.patch('/', booksCtrl.updateBook)

export default books
