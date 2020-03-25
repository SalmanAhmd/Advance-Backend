const Table = require('../Model/Employee');
const express = require("express");
const router = express.Router();

// Create
router.post('/write', async (req, res) => {
  try {
    const { body } = req;
    let table = await Table.create({ name: body.name, departmentid: body.department });
    res.json({
      table
    })
  } catch (err) {
    console.log(err);
  }
})

// Read
router.get('/read', async (req, res) => {
  try {
    let table = await Table.findAll();
    res.json({
      table
    })
  } catch (err) {
    console.log(err);
  }
})

// Update
router.put('/update/:id', async (req, res) => {
  try {
    const { params, body } = req;
    let table = await Table.update({ name: body.name, department: body.department }, { where: { id: params.id } });
    res.json({
      table
    })
  } catch (err) {
    console.log(err);
  }
})

// Delete
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

// Get single Employee
router.get('/employee/:id', async (req, res) => {
  try {
    const { params } = req;

    let table = await Table.findAll({ where: { id: params.id } });
    res.json({
      table
    })
  } catch (err) {
    console.log(err);
  }
})

// Get all Employee of one Department
router.get('/department/:department', async (req, res) => {
  try {
    const { params } = req;

    let table = await Table.findAll({ where: { department: params.department } });
    res.json({
      table
    })
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;