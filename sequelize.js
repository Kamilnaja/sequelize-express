const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  logQueryParameters: true,
  username: 'postgres',
  host: 'localhost',
  password: 'admin123',
  database: 'graty',
});

module.exports = sequelize;
