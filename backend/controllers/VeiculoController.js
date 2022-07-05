const Veiculo = require('../models/Veiculo');
const Usuario = require('../models/Usuario');

module.exports = class VeiculoController {

  static async register(req, res) {

    const marca = req.body.marca;
    const modelo = req.body.modelo;
    const ano = req.body.ano;
    const placaVeiculo = req.body.placaVeiculo;
    const dono = req.body.dono;
    
    const veiculo = new Veiculo({
      marca: marca,
      modelo: modelo,
      ano: ano,
      placaVeiculo: placaVeiculo,
      dono: dono,
    })

    try{
      const newVeiculo = await veiculo.save();
      res.status(201).json({message: 'Veículo salvo com sucesso'});
    }catch(error) {
      res.status(400).json({message: error});
    }
  }

  static async getAllVeiculos(req, res) {

    const veiculos = await Veiculo.find().sort();

    res.status(200).json({
      veiculos: veiculos,
    })
  }

  static async getVeiculoById(req, res) {

    const id = req.params.id

    const veiculo = await Veiculo.findById(id)

    if (!veiculo) {

      res.status(422).json({ message: 'Veículo não encontrado!' })
      return
    }

    res.status(200).json({ veiculo })
  }

  static async updateVeiculo(req, res) {

    const { id } = req.params;
    const newVehicle = req.body;

    try{
      const searchVehicleResult = await Veiculo.findByIdAndUpdate(id, newVehicle);
      res.status(200).json(newVehicle);
    }catch(error) {
      res.status(400).json({message: error});
    }
  }

  static async removeVehicle(req, res){

    const { id } = req.params;

    const veiculo = await Veiculo.findById(id);
    const dono = veiculo.dono; 
    const usuario = await Usuario.findById(dono);

    try {
      usuario.veiculos.pull({ _id: id });
      console.log('removido');
    }catch(error) {
      res.status(400).json({message: error});
    }

    try {
      await Veiculo.findByIdAndRemove(id);
      res.status(200).json({ message: 'Veículo removido' })
    }catch (error) {
      res.status(400).json({ message: error });
    }
  }
}