import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IoMdLogOut } from 'react-icons/io';
import Carro from '../../assets/img/yellowcar.png';
import {GiHamburgerMenu} from 'react-icons/gi';
import { useState } from 'react';
import NewSidebar from '../NewSideBar/NewSideBar';

function Navbar() {

    const [newsidebar, setNewSidebar] = useState(false);

    const showSidebar = () => setNewSidebar(!newsidebar);

    return (
        <nav className={styles.navbar}>
            <div className={styles.nav_container}>
                  <button onClick={showSidebar} className={styles.header__button}  id={styles.btnNav} type="button">
                        <GiHamburgerMenu id={styles.hamburger_icon}/>
                    </button>
                    {newsidebar && <NewSidebar active={setNewSidebar} />}
                <div>
                    <Link to='/'><img src={Carro} alt="logo" id={styles.car_icon} /></Link>
                </div>

                <div className={styles.list_items}>
                    <ul>
                        <Link to='/'><AiFillHome style={{ color: "#2bc48a", marginRight: "5px" }} className={styles.icons_nav} /><li>home</li></Link>
                        <Link to='/'><IoMdLogOut style={{ color: "red", marginRight: "5px" }} className={styles.icons_nav} /><li>logout</li></Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;