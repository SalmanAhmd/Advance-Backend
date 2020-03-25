const express = require('express');
const employeeCRUD = require('./Controller/Employee')
const departmentCRUD = require('./Controller/Department')
const app = express();
app.use(express.json());


app.use('/em', employeeCRUD);
app.use('/de', departmentCRUD);

module.exports = app;