const authorModel = (sequelize, type) => sequelize.define('author', {
   id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
   name: {
      type: type.STRING,
      allowNull: false
   }
})

module.exports = authorModel