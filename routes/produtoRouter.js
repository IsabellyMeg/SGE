const express = require('express');
const { criarProduto, buscarProduto } = require('../controllers/produtoController');

const router = express.Router();

router.post('/produto', criarProduto);
router.get('/:id', buscarProduto);

module.exports = router;
