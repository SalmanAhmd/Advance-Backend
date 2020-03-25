const Sequelize = require('sequelize');

const db = new Sequelize('employee', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
})

db.authenticate()
  .then(() => {
    console.log('Database connected');
  })

module.exports = db;