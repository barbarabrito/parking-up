import styles from './Guide.module.css';
import { GiOpenBook } from 'react-icons/gi';
import { CgPlayListAdd } from 'react-icons/cg';
import { MdDelete, MdEdit } from 'react-icons/md';
import { FaUserEdit } from 'react-icons/fa';
import { IoIosEye } from 'react-icons/io';
import Sidebar from '../../Sidebar/Sidebar';
import NewSidebar from '../../NewSideBar/NewSideBar';

function Guide({newsidebar}) {
    return (
        <div className="wrapper-container">
            <Sidebar />
            {newsidebar && <NewSidebar active={setNewSidebar} />}
            <main className="main">
                <br/>
                <div className={styles.guide_title_container}>
                    <h2><GiOpenBook style={{ fontSize: "20px" }} /> Guia</h2>
                </div>
                <div className={styles.container_guide}>
                    <p>1. <IoIosEye style={{ fontSize: "31px", margin: "0 4px", color: "#00004d"}} /> Exibir informações</p>
                    <p>4. <FaUserEdit style={{ fontSize: "26px", margin: "0 7px", color: "green" }} /> Editar usuário</p>
                    <p>2. <CgPlayListAdd style={{ fontSize: "31px", margin: "0 4px", color: "#cc8500" }} /> Adicionar/cadastrar veículo</p>
                    <p>3. <MdDelete style={{ fontSize: "27px", margin: "0 4px", color: "red" }} /> Remover usuário/veículo</p>
                    <p>5. <MdEdit style={{ fontSize: "27px", margin: "0 7px", color: "green" }} /> Editar veículo</p>
                </div>
            </main>
        </div>
    )
}

export default Guide;