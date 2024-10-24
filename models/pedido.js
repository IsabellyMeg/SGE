const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pedido = sequelize.define('Pedido', {
    pedido_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Clientes', 
            key: 'cliente_id', 
        },
    },
    produto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Produtos', 
            key: 'id', 
        },
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    data_pedido: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, 
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pendente', 
    },
});

module.exports = Pedido;
