import Sidebar from '../../Sidebar/Sidebar';
import styles from './RegisterVehicle.module.css';
import {FaCarSide} from 'react-icons/fa';
import {Link, useParams, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import api from '../../../services/api';

function RegisterVehicle(){

	const [marca, setMarca] = useState('');
	const [modelo, setModelo] = useState('');
	const [ano, setAno] = useState('');
	const [placaVeiculo, setPlacaVeiculo] = useState('');

	const {id} = useParams();
	const navigate = useNavigate();

	function registerNewVehicle(e){
		e.preventDefault();

		api.post(`/usuarios/${id}/veiculos`, {
			marca,
			modelo,
			ano,
			placaVeiculo
		})
		 .then(response => {
            console.log(response.data);
            navigate('/gerenciar');
        })
        .catch(error => {
        	console.log('Algo deu errado', error)
        })
	}

	return(
		<div className="wrapper-container">
			<Sidebar/>
			<main className="main">
			<div className={styles.cadastro_veiculos_title_container}>
				<br/>
					<h2>&nbsp;<FaCarSide style={{fontSize:"20px"}}/> Cadastrar veículo</h2>
				</div>
				<br/>
				<div className={styles.form_container_veiculos}>
					<form>
						<input type="text"
							id="name" name="marca"
							placeholder="Marca"
							value={marca}
							onChange={(e) => setMarca(e.target.value)}
						/>
						<input type="text"
							id="email" name="modelo"
							placeholder="Modelo"
							value={modelo}
							onChange={(e) => setModelo(e.target.value)}
						/>
						<input type="text"
							id="cpf" name="ano"
							placeholder="Ano"
							value={ano}
							onChange={(e) => setAno(e.target.value)}
						/>
						<input type="text"
							id="placaVeiculo"
							name="placaVeiculo"
							placeholder="Placa do veículo"
							value={placaVeiculo}
							onChange={(e) => setPlacaVeiculo(e.target.value)}
						/>
						<span className={styles.container_btn_edit}>
							<Link to='/gerenciar'>Cancelar</Link>
							<button onClick={(e) => registerNewVehicle(e)}>Cadastrar veículo</button>
						</span>
					</form>
				</div>
			</main>
		</div>
	)
}

export default RegisterVehicle;