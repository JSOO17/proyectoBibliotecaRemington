const express = require('express')
const morgan = require('morgan')
const bookRouter = require('../router/book.router')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/book', bookRouter)

module.exports = app