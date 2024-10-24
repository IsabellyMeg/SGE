const express = require('express');
const clienteController = require('../controllers/clienteController'); 

const router = express.Router();


router.post('/clientes', clienteController.criarCliente); 
router.get('/:id', clienteController.buscarCliente); 

module.exports = router;
