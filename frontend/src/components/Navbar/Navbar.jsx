import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {IoMdLogOut} from 'react-icons/io';
import Carro from '../../assets/img/yellowcar.png';

function Navbar(){
	return(
		<nav className={styles.navbar}>
			<div className={styles.nav_container}>

				<div>
					<Link to='/'><img src={Carro} alt="logo" id={styles.car_icon}/></Link>
				</div>

				<div className={styles.list_items}>
					<ul>
						<Link to='/'><AiFillHome style={{fontSize:"22px", color:"#2bc48a", marginRight:"5px"}}/><li>home</li></Link>
						<Link to='/'><IoMdLogOut style={{fontSize:"22px", color:"red", marginRight:"5px"}}/><li>logout</li></Link>
					</ul>
				</div>
			</div>
		</nav>
	)
}
export default Navbar;