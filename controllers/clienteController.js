const Cliente = require('../models/cliente'); 

const criarCliente = async (req, res) => {
    try {
        const { nome, email } = req.body;

        const novoCliente = await Cliente.create({
            nome,
            email,
        });

        return res.status(201).json(novoCliente);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao criar o cliente', error });
    }
};

const buscarCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByPk(id);

        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }

        return res.status(200).json(cliente);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar o cliente', error });
    }
};

module.exports = {
    criarCliente,
    buscarCliente,
};
