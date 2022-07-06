import Sidebar from '../../Sidebar/Sidebar';
import styles from './Management.module.css';
import { FaTools } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import api from '../../../services/api';
import LoadingSpinner from '../../../assets/img/1488.gif';
import { MdDelete, MdEdit } from 'react-icons/md';
import { FaUserEdit } from 'react-icons/fa';
import { IoIosEye } from 'react-icons/io'
import Modal from 'react-modal';
import { RiCloseFill } from 'react-icons/ri'
import { AiFillCar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { CgPlayListAdd } from 'react-icons/cg';

//Estilização do Modal
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '550px'
    },
};

Modal.setAppElement('#root');

function Management() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [veiculos, setVeiculos] = useState([]);
    const navigate = useNavigate();

    //Configurações do Modal

    let subtitle;

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(id) {
        setIsOpen(true);
        handleReq(id);
    }
    function afterOpenModal() {
        subtitle.style.color = '#34414c';
        subtitle.style.textAlign = 'center';
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        api.get('/usuarios')
            .then((response) => {
                setUsers(response.data.users);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    const handleReq = (id) => {
        api.get(`/usuarios/${id}/veiculos`)
            .then((response) => {
                setVeiculos(response.data);
                console.log(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
            })
    }

    async function handleDeleteUser(id) {
        if (window.confirm("Tem certeza que deseja deletar este usuário?")) {
            const data = await api.delete(`/usuarios/${id}`)
                .then(response => {
                    const updatedUser = users.filter((user) => user._id != id)
                    setUsers(updatedUser)
                    return response.data
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                })
        }
    }

    function navigateToEditPage(id) {
        navigate(`/editar-usuario/${id}`);
    }

    function navigateToRegisterVehiclePage(id) {
        navigate(`/cadastrar-veiculo/${id}`);
    }

    function navigateToEditVehiclePage(id){
        navigate(`/editar-veiculo/${id}`)
    }

    async function deleteVehicle(id){
        if (window.confirm("Tem certeza que deseja deletar este veículo?")) {
            const data = await api.delete(`/veiculos/${id}`)
                .then(response => {
                    const updatedVehicle = veiculos.filter((veiculo) => veiculo._id != id)
                    setVeiculos(updatedVehicle)
                    return response.data
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                })
        }
    }

    return (
        <div className="wrapper-container">
            <Sidebar />
            <main className="main">
                <div className={styles.gerenciar_cadastros_container}>
                    <div>

                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <button onClick={closeModal} id={styles.btn_close_modal}><RiCloseFill /></button>
                            <br />
                            <h2 ref={(_subtitle) => (subtitle = _subtitle)}><AiFillCar style={{ fontSize: "19px" }} /> Veículos</h2>                  
                            <br />
                            {veiculos.length == 0 ? <div className={styles.no_vehicle}><p><strong>Este usuário não possui veículos cadastrados</strong></p></div> : (
                                veiculos.map(veiculo => (

                                    <div className={styles.container_show_vehicles} key={veiculo._id}>
                                        <p>Marca: {veiculo.marca}</p>
                                        <p>Modelo: {veiculo.modelo}</p>
                                        <p>Ano: {veiculo.ano}</p>
                                        <p>Placa: {veiculo.placaVeiculo}</p>
                                        <button title="Editar veículo" onClick={(e) => { navigateToEditVehiclePage(veiculo._id) }} id={styles.btn_edit_vehicle}>
                                            <MdEdit/>
                                        </button>
                                        &nbsp;
                                        <button title="Deletar veículo" onClick={(e) => { deleteVehicle(veiculo._id) }} className={styles.btn_delete}>
                                            <MdDelete/>
                                        </button>
                                    </div>
                                ))
                            )}
                        </Modal>
                    </div>

                    <br />
                    <h2>&nbsp;<FaTools style={{ fontSize: "20px" }} /> Gerenciar</h2>
                    <br />
                    {loading &&
                        <div className={styles.loading_spinner}>
                            <p>Carregando...</p>
                            &nbsp;
                            <img src={LoadingSpinner} alt="loading spinner" />
                        </div>
                    }
                    {!loading &&
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Veículo</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user._id}>
                                        <td>{user.nome}</td>
                                        <td>{user.cpf}</td>
                                        <td>
                                            <button title="Mostrar veículos" onClick={(e) => { openModal(user._id) }} id={styles.btn_show_vehicle}>
                                                &nbsp;<IoIosEye style={{ fontSize: "26px" }} />
                                            </button>
                                            &nbsp;
                                            <button title="Adicionar veículo" onClick={(e) => { navigateToRegisterVehiclePage(user._id) }} id={styles.btn_add_vehicle}>
                                                &nbsp;<CgPlayListAdd style={{ fontSize: "25px" }} />
                                            </button>
                                        </td>
                                        <td>
                                            <button title="Deletar usuário" onClick={(e) => { handleDeleteUser(user._id) }} className={styles.btn_delete}>
                                                <MdDelete />
                                            </button>
                                            &nbsp;
                                            <button title="Editar usuário" onClick={(e) => { navigateToEditPage(user._id) }} id={styles.btn_edit_user}>
                                                <FaUserEdit style={{ color: "green", fontSize: "25px" }} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }
                </div>
            </main>
        </div>
    )
}
export default Management;