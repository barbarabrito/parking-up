import Sidebar from '../../Sidebar/Sidebar';
import styles from './Vehicles.module.css';
import {FaCarSide, FaUser} from 'react-icons/fa';
import {useState, useEffect} from 'react';
import api from '../../../services/api';
import { format } from 'date-fns';
import Modal from 'react-modal';
import {IoIosEye} from 'react-icons/io';
import LoadingSpinner from '../../../assets/img/1488.gif';
import {RiCloseFill} from 'react-icons/ri';

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

function Vehicles(){

    const [users, setUsers] = useState([]);
    const [veiculos, setVeiculos] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    let subtitle;

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(id){
        setIsOpen(true);
        getUsers(id);
    }

    function afterOpenModal() {
        subtitle.style.color = '#34414c';
        subtitle.style.textAlign = 'center';
    }

    function closeModal() {
        setIsOpen(false);
    }

    async function getUsers(id) {
        try{
            const response = await api.get(`/veiculos/${id}/usuario`);
            console.log(response.data.usuario);
            setUsers(response.data.usuario);
            setLoading(false);
        }catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        api.get(`/veiculos`)
        .then((response) => {
          setVeiculos(response.data.veiculos);
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
         })
    }, [])

    return(
        <div className="wrapper-container">
            <Sidebar/>
            <main className="main">
                <div className={styles.lista_veiculos_title_container}>
                    <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <button onClick={closeModal} id={styles.btn_close_modal}><RiCloseFill /></button>
                            <br />
                            <h2 ref={(_subtitle) => (subtitle = _subtitle)}><FaUser style={{fontSize:"18px"}}/> Usuário</h2>                  
                            <br />           
                            <div key={users._id} className={styles.container_show_vehicles}>
                                <p>Nome: {users.nome}</p>
                                <p>CPF: {users.cpf}</p>
                                <p>Email: {users.email}</p>
                            </div>
                        </Modal>
                     <div className={styles.lista_usuarios}>
                        <br/>
                        <h2>&nbsp;<FaCarSide style={{fontSize:"20px"}}/> Lista de veículos</h2>
                     </div>
                     {isLoading &&
                            <div className={styles.loading_spinner}>
                                <p>Carregando...</p>
                                &nbsp;
                                <img src={LoadingSpinner} alt="loading spinner"/>
                            </div>
                        }
                        <div className={styles.container_input}>
                            <input type="text" placeholder="&#x1F50D; &nbsp; Procurar por placa" onChange={(event) => {setSearch(event.target.value)}} id={styles.search_bar_vehicles}/>
                        </div>
                        { !isLoading &&
                         <table id={styles.table_veiculos}>
                                <thead>
                                  <tr>
                                    <th>Marca</th>
                                    <th>Modelo</th>
                                    <th>Ano</th>
                                    <th>Placa Veículo</th>
                                    <th>Data Cadastro</th>
                                    <th>Dono</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {veiculos.filter((veiculo)=> {
                                        if(search == ""){
                                            return veiculo
                                        }else if (veiculo.placaVeiculo.toLowerCase().includes(search.toLocaleLowerCase())) {
                                            return veiculo
                                        }
                                    })
                                    .map((veiculo) => {
                                        return(
                                        <tr key={veiculo._id}>
                                            <td>{veiculo.marca}</td>
                                            <td>{veiculo.modelo}</td>
                                            <td>{veiculo.ano}</td>
                                            <td>{veiculo.placaVeiculo}</td>
                                            <td>{format(new Date(veiculo.createdAt), 'dd/MM/yyyy')}</td>
                                            <td>
                                               <button title="Mostrar dono" onClick={(e) => { openModal(veiculo._id) }} id={styles.btn_show_vehicle}>
                                                    &nbsp;<IoIosEye style={{ fontSize: "26px" }} />
                                                </button>
                                            </td>
                                        </tr>
                                        ); 
                                    })}
                                </tbody>
                        </table>}
                    </div>
            </main>
        </div>
    )
}
export default Vehicles;