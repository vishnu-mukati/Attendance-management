const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connections');

const Attendance = sequelize.define('attendance', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    studentName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY, // only YYYY-MM-DD
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('present', 'absent'),
        allowNull: false
    }
});

module.exports = Attendance;
