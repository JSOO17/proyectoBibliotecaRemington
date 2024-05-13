const { Sequelize, DataTypes } = require('sequelize')

const authorModel = require('./model/author.model')
const bookModel = require('./model/book.model')
const reservationModel = require('./model/reservation.model')
const userModel = require('./model/user.model')

const sequelize = new Sequelize('LIBRARY', 'root', 'admin', {
   host: 'localhost',
   dialect: 'mysql',
   port: 3306
})

const author = authorModel(sequelize, DataTypes)
const book = bookModel(sequelize, DataTypes)
const reservation = reservationModel(sequelize, DataTypes)
const user = userModel(sequelize, DataTypes)

author.hasMany(book)

book.belongsTo(author)

user.hasMany(reservation)
reservation.belongsTo(user)

book.hasMany(reservation)
reservation.belongsTo(book)

sequelize.sync({ force: false }).then(() => console.log('connected'))

module.exports = {
   author,
   book,
   reservation,
   user
}