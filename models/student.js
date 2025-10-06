const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Student;
