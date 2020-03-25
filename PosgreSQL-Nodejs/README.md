# Connecting PostgreSQL with Backend

### Steps :
1. npm init -y
2. npm i express pg sequelize pg-hstore
3. server.js
```
const http = require('http');
const app = require('./app');

let server = http.createServer(app);

server.listen(8008, () => console.log('Connection is Ready at 8008'));
```
4. app.js
```
const express = require('express');
const CRUD = require('./Controller/CRUD')
const app = express();
app.use(express.json());


app.use('/', CRUD);

module.exports = app;
```
5. Database/database.js
```
const Sequelize = require('sequelize');

const db = new Sequelize('restaurant', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
})

db.authenticate()
  .then((res) => {
    console.log('Database connected');
  })

module.exports = db;
```
6. Model/Table.js
```
const db = require('../DataBase/database');
const Sequelize = require('sequelize');

const Table = db.define('dine_table', {
  strength: {
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
}
);

db.sync()
  .then((res) => console.log('Table DB has created', res))

module.exports = Table;
```
7. Controller/CRUD.js
```
const Table = require('..//Model/Table');
const express = require("express");
const router = express.Router();

// Create Operation
router.post('/write', async (req, res) => {
  try {
    const { body } = req;
    let table = await Table.create({ strength: body.strength, name: body.name });
    res.json({
      table
    })
  } catch (err) {
    console.log(err);
  }
})

// Read Operation
router.get('/read', async (req, res) => {
  try {
    let table = await Table.findAll();
    // let table = await Table.findAll({ attributes: ['name'] }); //for select query
    res.json({
      table
    })
  } catch (err) {
    console.log(err);
  }
})

// Update Operation
router.put('/update/:id', async (req, res) => {
  try {
    const { params, body } = req;
    let table = await Table.update({ name: body.name, strength: body.strength }, { where: { id: params.id } });
    res.json({
      table
    })
  } catch (err) {
    console.log(err);
  }
})

// Delete Operation
router.delete('/delete/:id', async (req, res) => {
  try {
    const { params } = req;

    let table = await Table.destroy({ where: { id: params.id } });
    res.json({
      table
    })
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;
```



