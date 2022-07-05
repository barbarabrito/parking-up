import styles from './RegisterUser.module.css';
import Sidebar from '../../Sidebar/Sidebar';
import {ImUserPlus} from 'react-icons/im';
import {useEffect, useState} from 'react';
import api from '../../../services/api';
import {useNavigate} from 'react-router-dom';

function RegisterUser(){

	const [nome, setNome] = useState([]);
	const [email, setEmail] = useState([]);
	const [cpf, setCpf] = useState([]);
	const [dataNascimento, setDataNascimento] = useState([]);
	const navigate = useNavigate();
	
	function registerNewUser(e){

		e.preventDefault();

		api.post('/usuarios/register', {
			nome,
			email,
			cpf,
			dataNascimento
		})
		 .then(response => {
            console.log(response.data);
            navigate('/usuarios');
        })
        .catch(error => {
        	console.log('Algo deu errado', error)
        })
	}

	return(
		<div className="wrapper-container">
			<Sidebar/>
			<main className="main">
				<div className={styles.cadastro_usuarios_title_container}>
					<br/>
					<h2>&nbsp;<ImUserPlus style={{fontSize:"20px"}}/> Cadastrar usuário</h2>
				</div>
				<br/>
				<div className={styles.form_container}>
					<form>
						{/*<label htmlFor="name">Nome: </label><br/>*/}
						<input type="text"
							id="name" name="nome"
							placeholder="Nome"
							value={nome}
							onChange={(e) => setNome(e.target.value)}
						/>
						<input type="text"
							id="email" name="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input type="text"
							id="cpf" name="cpf"
							placeholder="CPF"
							value={cpf}
							onChange={(e) => setCpf(e.target.value)}
						/>
						<input type="text"
							id="dataNascimento"
							name="dataNascimento"
							placeholder="Data de Nascimento (Formato dd/MM/YYYY)"
							value={dataNascimento}
							onChange={(e) => setDataNascimento(e.target.value)}
						/>
						<button onClick={(e) => registerNewUser(e)}>Cadastrar usuário</button>
					</form>
				</div>
			</main>
		</div>
	)
}

export default RegisterUser;