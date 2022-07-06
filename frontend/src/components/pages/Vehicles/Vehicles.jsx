import Sidebar from '../../Sidebar/Sidebar';
import styles from './Vehicles.module.css';
import {FaCarSide} from 'react-icons/fa';
import {useState, useEffect} from 'react';
import api from '../../../services/api';
import { format } from 'date-fns';
import {BsEyeFill} from 'react-icons/bs';

import {RiCloseFill} from 'react-icons/ri';

function Vehicles(){

    return(
        <div className="wrapper-container">
            <Sidebar/>
            <main className="main">
                <div className={styles.lista_veiculos_title_container}>
                     <div className={styles.lista_usuarios}>
                        <br/>
                        <h2>&nbsp;<FaCarSide style={{fontSize:"20px"}}/> Lista de veículos</h2>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Vehicles;