const  Produto  = require('../models/produto'); 

const criarProduto = async (req, res) => {
    try {
        const { nome, preco } = req.body;

        const novoProduto = await Produto.create({
            nome,
            preco,
        });

        return res.status(201).json(novoProduto);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao criar o produto', error });
    }
};

const buscarProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        return res.status(200).json(produto);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar o produto', error });
    }
};

module.exports = {
    criarProduto,
    buscarProduto,
};
