import Sidebar from '../../Sidebar/Sidebar';
import styles from './Vehicles.module.css';
import {FaCarSide} from 'react-icons/fa';

function Vehicles(){
	return(
		<div className="wrapper-container">
			<Sidebar/>
			<main className="main">
			<div className={styles.lista_veiculos_title_container}>
				<br/>
					<h2>&nbsp;<FaCarSide style={{fontSize:"20px"}}/> Lista de veículos</h2>
				</div>
				<br/>
			</main>
		</div>
	)
}

export default Vehicles;