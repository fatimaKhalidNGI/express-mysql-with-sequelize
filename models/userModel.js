const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConn');

const User = sequelize.define('User', {
    firstName : {
        type : DataTypes.STRING,
        allowNull : false
    },

    lastName : {
        type : DataTypes.STRING,
        allowNull : false
    },

    email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },

    age : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
});

module.exports = User;