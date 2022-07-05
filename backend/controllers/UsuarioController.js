const Usuario = require('../models/Usuario');
const Veiculo = require('../models/Veiculo');

module.exports = class UsuarioController {

    static async register(req, res) {

        const nome = req.body.nome;
        const email = req.body.email;
        const cpf = req.body.cpf;
        const dataNascimento = req.body.dataNascimento;

        //validações dos campos

        if (!nome) {
            res.status(422).json({ message: 'O nome é obrigatório' })
            return
        }

        if ((typeof nome !== 'string')) {
            res.status(422).json({ message: 'O nome não deve conter números' })
            return
        }


        if (!email) {
            res.status(422).json({ message: 'O email é obrigatório' })
            return
        }

        //valida o email no formato usuario(at)email.com
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!(emailRegex.test(email))) {
            res.status(422).json({ message: 'Este email não é válido' })
            return
        }

        //verifica se o email já está cadastrado
        const emailExists = await Usuario.findOne({ "email": req.body.email });

        //se o email já existir, impede o cadastro
        if (emailExists) {
            res.status(422).json({ message: 'Esse email já está cadastrado' })
            return
        }

        if (!cpf) {
            res.status(422).json({ message: 'O cpf é obrigatório' })
            return
        }

        if (cpf.length !== 11) {
            res.status(422).json({ message: 'CPF deve conter 11 dígitos' })
            return
        }

        const cpfExists = await Usuario.findOne({ "cpf": req.body.cpf });

        if (cpfExists) {
            res.status(422).json({ message: 'Esse cpf já está cadastrado' })
            return
        }

        if (!dataNascimento) {
            res.status(422).json({ message: 'A data de nascimento é obrigatória' })
            return
        }

        //valida a data de nascimento no formato dd/MM/YYYY ou dd/MM/YY
        const dataNascRegex = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/

        if (!(dataNascRegex.test(dataNascimento))) {
            res.status(422).json({ message: 'A data de nascimento não é válida' })
            return
        }

        const usuario = new Usuario({
            nome: nome,
            email: email,
            cpf: cpf,
            dataNascimento: dataNascimento,
        })

        try {
            const newUsuario = await usuario.save();
            res.status(201).json({ message: 'Usuário criado com sucesso' });
        } catch (error) {
            res.status(400).json({ message: error });
        }
    }

    //médoto que lista os usuários por id
    static async getUserById(req, res) {

        const id = req.params.id

        const usuario = await Usuario.findById(id)

        if (!usuario) {

            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
        }

        res.status(200).json({ usuario })
    }

    //método PUT
    static async updateUser(req, res) {

        const { id } = req.params;
        const newUser = req.body;

        try {
            const searchUserResult = await Usuario.findByIdAndUpdate(id, newUser);
            res.status(200).json(newUser);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    }

    //retorna os veículos de um usuário específico
    static async getUserVehicles(req, res, next) {

        const { id } = req.params;

        try {
            const usuario = await Usuario.findById(id).populate('veiculos');
            res.status(200).json(usuario.veiculos);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    }


    //método que atribui um veículo a um usuario
    static async createUserVehicle(req, res, next) {

        const { id } = req.params;

        const newVeiculo = new Veiculo(req.body);
        console.log(newVeiculo);

        const usuario = await Usuario.findById(id);

        newVeiculo.dono = usuario.id;

        try {
            await newVeiculo.save();
            usuario.veiculos.push(newVeiculo);
            await usuario.save();

        } catch (error) {
            res.status(400).json({ message: error });
        }

        res.status(201).json(newVeiculo);
    }

    //Deleta um usuário, se ele possuir veículos, deleta os veículos também
    static async removeUser(req, res) {

        const id = req.params.id;

        const vExists = await Veiculo.find({ dono: id });

        if (vExists) {

            try {
                await Veiculo.find({ dono: id }).deleteMany().exec();
            } catch (error) {
                res.status(400).json({ message: error });
            }
        }

        try {
            await Usuario.findByIdAndRemove(id);
            res.status(200).json({ message: 'Usuário removido com sucesso!' })
        } catch (error) {
            res.status(400).json({ message: error });
        }
    }

    static async getAllUsers(req, res) {

        const users = await Usuario.find().sort();

        res.status(200).json({
            users: users,
        })
    }

}