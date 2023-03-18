import Book from './../models/book.js'

const listBook = (ctx) => {
  ctx.body = 'listed'
}

const createBook = async (ctx) => {
  ctx.body = 'created'
  const {
    title, authors, publishedDate, price, tags
  } = ctx.request.body;
  const book = new Book({
    title, authors, publishedDate, price, tags
  })
<<<<<<< HEAD

  try {
    await book.save();
  } catch (e) {
    return ctx.throw(500, e);
  }

=======
>>>>>>> 8902872b6c86febcc15e92d253532fdaf5a5bcb4
}

const deleteBook = (ctx) => {
  ctx.body = 'deleted'
}

const replaceBook = (ctx) => {
  ctx.body = 'replaced'
}

const updateBook = (ctx) => {
  ctx.body = 'updated'
}

export {listBook, createBook, deleteBook, replaceBook, updateBook};
