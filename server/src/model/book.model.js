const bookModel = (sequelize, type) => sequelize.define('book', {
   id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   title: {
      type: type.STRING,
      allowNull: false
   },
   quantity: {
      type: type.INTEGER,
      allowNull: false,
   }
})

module.exports = bookModel