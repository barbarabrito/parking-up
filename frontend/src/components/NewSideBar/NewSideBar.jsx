import { AiOutlineCar, AiOutlineUser } from 'react-icons/ai';
import { BiUserPlus } from 'react-icons/bi';
import {FaTimes} from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';
import { RiListSettingsLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styles from './NewSideBar.module.css';

const NewSidebar = ({ active }) => {

    const closeSidebar = () => {
        active(false)
     }

     function Container(){
        return(
            <div className={styles.container_n}>
                <FaTimes onClick={closeSidebar} style={{fontSize:"30px", color:"#fff", cursor:"pointer", margin:"10px 0 0 10px"}}/>  
                <br/>
                 <ul>
                    <li><Link to='/gerenciar' onClick={closeSidebar}><RiListSettingsLine style={{fontSize:"16px", marginRight:"0.5em"}}/> Gerenciar</Link></li>
                    <li><Link to='/usuarios' onClick={closeSidebar}><AiOutlineUser style={{fontSize:"16px", marginRight:"0.5em"}}/> Listar usuários</Link></li>
                    <li><Link to='/veiculos' onClick={closeSidebar}><AiOutlineCar style={{fontSize:"15px", marginRight:"0.5em"}}/> Listar veículos</Link></li>
                    <li><Link to='/cadastrar-usuario' onClick={closeSidebar}><BiUserPlus style={{fontSize:"18px", marginRight:"0.4em"}}/> Cadastrar usuário</Link></li>
                    <li><Link to='/guia' onClick={closeSidebar}><FiInfo style={{fontSize:"14px", marginRight:"0.5em"}}/>&nbsp; Guia geral</Link></li>
                </ul> 
            </div>
        )
     }
    
    return(
        <div className="new_sidebar">
            <Container newsidebar={active}>
            </Container>
        </div>
    )
}

export default NewSidebar;