const db = require('../DataBase/database');
const Sequelize = require('sequelize');

const Table = db.define('department', {
  name: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
}
);

db.sync()
  .then(() => console.log('Department DB has created'))

module.exports = Table;