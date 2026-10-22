const { Sequelize } = require('sequelize');

// DB_PASS is still accepted for older .env files
const dbPassword = process.env.DB_PASSWORD ?? process.env.DB_PASS;

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, dbPassword, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
