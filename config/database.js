const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('banco', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',

});

module.exports = sequelize
