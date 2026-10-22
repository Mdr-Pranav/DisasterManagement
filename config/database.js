const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD ?? process.env.DB_PASS, // DB_PASS kept for older .env files {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
