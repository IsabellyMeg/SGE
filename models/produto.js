const sequelize = require('../config/database'); 
const { DataTypes } = require('sequelize');

const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
});

module.exports = Produto;
