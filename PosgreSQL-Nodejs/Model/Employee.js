const db = require('../DataBase/database');
const Sequelize = require('sequelize');
const Department = require('./Department')

const Table = db.define('employee', {
  name: {
    type: Sequelize.STRING
  },
}, {
  timestamps: false
}
);

db.sync()
  .then(() => console.log('Employee DB has created'))


Table.belongsTo(Department, { foreignKey: 'departmentid' });
module.exports = Table;