import styles from './Users.module.css';
import Sidebar from '../../Sidebar/Sidebar';
import api from '../../../services/api';
import { useState, useEffect } from 'react';
import {HiUsers} from 'react-icons/hi';
import { format } from 'date-fns';
import LoadingSpinner from '../../../assets/img/1488.gif';

function Users(){

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        api.get('/usuarios')
        .then((response) => {
            setUsers(response.data.users);
            console.log(response.data.users);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
        })
    }, [])

    return(
        <>
            <div className="wrapper-container">
                <Sidebar/>
                <main className="main">
                    <br/>
                    <div className={styles.lista_usuarios}>
                        <h2>&nbsp;<HiUsers style={{fontSize:"20px"}}/> Lista de usuários</h2>
                        <br/>
                        { loading &&
                            <div className={styles.loading_spinner}>
                                <p>Carregando...</p>
                                &nbsp;
                                <img src={LoadingSpinner} alt="loading spinner"/>
                            </div>
                        }
                       <div className={styles.container_input}>
                            <input type="text" placeholder="&#x1F50D; Procurar por nome" onChange={(event) => {setSearch(event.target.value)}} id={styles.search_bar_users}/>
                        </div>
                        { !loading &&
                            <table id={styles.table_usuarios}>
                                <thead>
                                  <tr>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>CPF</th>
                                    <th>Data Nascimento</th>
                                    <th>Data Cadastro</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {users.filter((user)=> {
                                        if(search == ""){
                                            return user
                                        }else if (user.nome.toLowerCase().includes(search.toLocaleLowerCase())) {
                                            return user
                                        }
                                    })
                                    .map((user) => {
                                        return(
                                        <tr key={user._id}>
                                            <td>{user.nome}</td>
                                            <td>{user.email}</td>
                                            <td>{user.cpf}</td>
                                            <td>{user.dataNascimento}</td>
                                            <td>{format(new Date(user.createdAt), 'dd/MM/yyyy')}</td>
                                        </tr>
                                        );
                                    })}
                                </tbody>
                            </table>}
                    </div>
                </main>
            </div>
        </> 
    )
}
export default Users;