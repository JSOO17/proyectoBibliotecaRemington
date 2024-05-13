const sequelize = require('../db')

module.exports = (sequelize, type) => {
   return sequelize.define('reservation', {
      id: {
         type: type.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      date: {
         type: type.DATE, 
         defaultValue: type.NOW
      },
      dateReturn: {
         type: type.DATE
      },
      dateReturnStimated: {
         type: type.DATE
      },
      state: {
         type: type.ENUM,
         values: ['active', 'late', 'returned']
      }
   })
}