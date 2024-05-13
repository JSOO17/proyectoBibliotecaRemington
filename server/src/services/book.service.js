const { book } = require('../db')

const get = async () => await book.findAll()

const getById = async id => await book.findByPk(id)

const create = async book => await book.create(book)

module.exports = {
   get,
   getById,
   create
}