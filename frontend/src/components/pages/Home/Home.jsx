import styles from './Home.module.css';
import Sidebar from '../../Sidebar/Sidebar';
import {MdManageAccounts} from 'react-icons/md';
import NewSidebar from '../../NewSideBar/NewSideBar';

function Home({newsidebar}){

    return(
        <>
            <div className="wrapper-container">
                <Sidebar/>
                {newsidebar && <NewSidebar active={setNewSidebar} />}
                <main className="main">
                <div className={styles.container_welcome}>
                    <div id={styles.hello_admin}>
                        <MdManageAccounts style={{fontSize:"40px", color:"#e69500"}}/> <h1>Bem-vindo, admin</h1>
                    </div>
                </div>
                </main>
            </div>
        </>
    )
}

export default Home;