const pedido = require('../models/pedido')
const Cliente = require('../models/cliente');

const criarPedido = async (req, res) => {
    try {
        const { cliente_id, data_pedido } = req.body;

        const cliente = await Cliente.findByPk(cliente_id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        const novoPedido = await pedido.create({
            cliente_id: cliente_id,
            data_pedido: data_pedido,
        });

        return res.status(201).json(novoPedido); 
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao criar o pedido', error });
    }
};

module.exports = { criarPedido };
