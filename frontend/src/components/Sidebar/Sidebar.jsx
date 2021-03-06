import styles from './Sidebar.module.css';
import {AiOutlineUser, AiOutlineCar} from 'react-icons/ai';
import {BiUserPlus} from 'react-icons/bi';
import {RiListSettingsLine} from 'react-icons/ri'
import {Link} from 'react-router-dom';
import {FiInfo} from 'react-icons/fi';
import {GiHamburgerMenu} from 'react-icons/gi';

function Sidebar(){
    return( 
        <div className={styles.sidebar}>
        <br/>
            <ul>
                <li><Link to='/gerenciar'><RiListSettingsLine style={{fontSize:"14px"}}/> Gerenciar</Link></li>
                <li><Link to='/usuarios'><AiOutlineUser style={{fontSize:"14px"}}/> Listar usuários</Link></li>
                <li><Link to='/veiculos'><AiOutlineCar style={{fontSize:"13px"}}/> Listar veículos</Link></li>
                <li><Link to='/cadastrar-usuario'><BiUserPlus style={{fontSize:"17px"}}/> Cadastrar usuário</Link></li>
                <li><Link to='/guia'><FiInfo style={{fontSize:"13px"}}/>&nbsp; Guia geral</Link></li>
            </ul> 
            {/* <div className={styles.nav__overlay}></div> */}
        </div>
    )
}
export default Sidebar;