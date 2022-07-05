const router = require("express").Router();

const UsuarioController = require('../controllers/UsuarioController');

//endpoint dos cadastros de usuários
router.post('/register', UsuarioController.register);

//listagem dos usuários por id
router.get('/:id', UsuarioController.getUserById);

//lista todos os usuários
router.get('/', UsuarioController.getAllUsers);

//atualiza o usuário no banco
router.put('/:id', UsuarioController.updateUser);

//endpoint do cadastro de veículos
router.post('/:id/veiculos', UsuarioController.createUserVehicle);

//endpoint que lista veículos para um usuário específico
router.get('/:id/veiculos', UsuarioController.getUserVehicles);

//deleta um usuario
router.delete('/:id', UsuarioController.removeUser);

module.exports = router;