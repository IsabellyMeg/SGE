const express = require('express');
const { criarPedido } = require('../controllers/pedidoController');

const router = express.Router();

router.post('/pedido', criarPedido);

module.exports = router;
