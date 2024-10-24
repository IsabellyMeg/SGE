const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');


const clienteRoutes = require('./routes/clienteRouter');
// const produtoRoutes = require('./routes/produtoRouter');
// const pedidoRoutes = require('./routes/pedidoRouter');

const app = express();
app.use(bodyParser.json()); 

// Usar as rotas
app.use('/api', clienteRoutes);
//app.use('/api', produtoRoutes);
// app.use('/pedidos', pedidoRoutes);

sequelize.sync()
  .then(() => {
    console.log('Conectado ao banco de dados');
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  })
  .catch(err => {
    console.log('Erro ao conectar ao banco de dados', err);
  });

// const PORT = 3000;

// app.listen(PORT, () => {
//     console.log(`Servidor rodando na porta ${PORT}`);
// });
