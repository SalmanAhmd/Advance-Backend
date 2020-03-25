const Table = require('../Model/Department');
const Employee = require('../Model/Employee');
const express = require("express");
const router = express.Router();

router.post('/write', async (req, res) => {
  try {
    const { body } = req;
    let table = await Table.create({ name: body.name });
    res.json({
      table
    })
  } catch (err) {
    console.log(err);
  }
})

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

router.put('/update/:id', async (req, res) => {
  try {
    const { params, body } = req;
    let table = await Table.update({ name: body.name }, { where: { id: params.id } });
    res.json({
      table
    })
  } catch (err) {
    console.log(err);
  }
})

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

router.get('/join', async (req, res) => {
  try {
    let table = await Employee.findAll({
      include: [{
        model: Table}]
    })
    res.json({
      table
    })
  } catch (error) {
    res.json({
      error
    })
  }
})

module.exports = router;