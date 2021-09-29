const bodyParser = require('body-parser');
const express = require('express');
const { Sequelize } = require('sequelize');
const sequelize = require('./sequelize');
const category = require('./models/categories.model');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

async function assertDatabaseConnectionOk() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

async function init() {
  await assertDatabaseConnectionOk();
}

init();

async function getUsers() {
  const categories = await category.findAll();
  return categories;
}

app.get('/categories', (req, res) => {
  res.send(getUsers());
});

app.listen(3000, () => {
  console.log(`listening on localhost:3000`);
});
