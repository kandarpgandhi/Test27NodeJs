const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testDataBse', 'root', 'bakor@11', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
