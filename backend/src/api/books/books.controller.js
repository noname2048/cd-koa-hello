const listBook = (ctx) => {
  ctx.body = 'listed'
}

const createBook = (ctx) => {
  ctx.body = 'created'
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
