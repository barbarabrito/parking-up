const router = require("express").Router();

const VeiculoController = require('../controllers/VeiculoController');


router.get('/', VeiculoController.getAllVeiculos);

router.get('/:id', VeiculoController.getVeiculoById);

router.put('/:id', VeiculoController.updateVeiculo);

router.delete('/:id', VeiculoController.removeVehicle);

module.exports = router;