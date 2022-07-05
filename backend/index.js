require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors =  require('cors');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.json());

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.get('/', (req, res) => {
    res.status(200).json({msg: 'API estacionamento'});
})

const UsuarioRoutes = require('./routes/UsuarioRoutes');
const VeiculoRoutes = require('./routes/VeiculoRoutes');

app.use('/usuarios', UsuarioRoutes);
app.use('/veiculos', VeiculoRoutes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(5000);