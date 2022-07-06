const router = require("express").Router();

const VeiculoController = require('../controllers/VeiculoController');

//endpoints veículos

//lista todos os veículos (/veiculos)
router.get('/', VeiculoController.getAllVeiculos);

//retorna um veículo pelo id (/veiculos/:id)
router.get('/:id', VeiculoController.getVeiculoById);

//atualiza um veículo (/veiculos/:id)
router.put('/:id', VeiculoController.updateVeiculo);

//remove um veículo (/veiculos/:id)
router.delete('/:id', VeiculoController.removeVehicle);

//retorna o dono de um veículo (/veiculos/:id/usuario)
router.get('/:id/usuario', VeiculoController.getVehiclesUser);

module.exports = router;