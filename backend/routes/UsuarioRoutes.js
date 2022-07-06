const router = require("express").Router();

const UsuarioController = require('../controllers/UsuarioController');

//endpoints usuários

//cadastra um usuário (/usuarios/register)
router.post('/register', UsuarioController.register);

//retorna um usuário pelo id (usuarios/:id)
router.get('/:id', UsuarioController.getUserById);

//lista todos os usuários (/usuarios)
router.get('/', UsuarioController.getAllUsers);

//atualiza o usuário no banco (/usuarios/:id)
router.put('/:id', UsuarioController.updateUser);

//endpoint do cadastro de veículos (/usuarios/:id/veiculos)
router.post('/:id/veiculos', UsuarioController.createUserVehicle);

//endpoint que lista veículos para um usuário específico (/usuarios/:id/veiculos)
router.get('/:id/veiculos', UsuarioController.getUserVehicles);

//deleta um usuario (/usuarios/:id)
router.delete('/:id', UsuarioController.removeUser);

module.exports = router;