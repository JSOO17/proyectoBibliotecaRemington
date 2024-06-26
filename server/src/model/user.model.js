module.exports = (sequelize, type) => {
   return sequelize.define('user', {
      id: {
         type: type.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      name: {
         type: type.STRING,
         allowNull: false,
      },
      mail: {
         type: type.STRING,
         allowNull: false,
      },
      password: {
         type: type.STRING, 
         allowNull: false,
      },
      role: {
         type: type.ENUM,
         values: ['admin', 'student']
      }
   })
}