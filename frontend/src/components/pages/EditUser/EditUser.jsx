import styles from './EditUser.module.css';
import { FaUserEdit } from 'react-icons/fa';
import Sidebar from '../../Sidebar/Sidebar';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../../services/api';

function EditUser() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        api.get(`/usuarios/${id}`)
            .then((response) => {
                console.log(response.data);
                setNome(response.data.usuario.nome);
                setEmail(response.data.usuario.email);
                setCpf(response.data.usuario.cpf);
                setDataNascimento(response.data.usuario.dataNascimento);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    function updateUser(e, id) {
        e.preventDefault();

        api.put(`/usuarios/${id}`, {
            nome,
            email,
            cpf,
            dataNascimento
        })
        .then(response => {
            console.log(response.data);
            navigate('/gerenciar');
        })
        .catch(error => {
            console.log('Algo deu errado', error)
        })
    }

    return (
        <div className="wrapper-container">
            <Sidebar />
            <main className="main">
                <div className={styles.editar_usuarios_title_container}>
                    <br />
                    <h2>&nbsp;<FaUserEdit style={{ fontSize: "20px" }} /> Editar usuário</h2>
                </div>
                <br />
                <div className={styles.form_container_edit}>
                    <form>

                        <input type="text"
                            id="nome"
                            placeholder="Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <input type="text"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="text"
                            id="cpf"
                            placeholder="CPF"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                        <input type="text"
                            id="dataNascimento"
                            placeholder="Data de Nascimento (Formato dd/MM/YYYY)"
                            value={dataNascimento}
                            onChange={(e) => setDataNascimento(e.target.value)}
                        />
                        <input type="text"
                            id="veiculo"
                            placeholder="Veículo"
                            disabled
                        // value={dataNascimento}
                        // onChange={(e) => setVeiculo(e.target.value)}
                        />

                        <span className={styles.container_btn_edit}>
                            <Link to='/gerenciar'>Cancelar</Link>
                            <button onClick={(e) => updateUser(e, id)}>Salvar usuário</button>
                        </span>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default EditUser;