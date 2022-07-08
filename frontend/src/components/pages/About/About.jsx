import styles from './About.module.css';

function About(){
    return(
        <div className={styles.container_sobre}>
            <br/>
            <div className={styles.info}>
                <h2>Sobre este software</h2>
                <br/>
                <p>Este aplicativo se trata de um sistema de gestão para estacionamentos e foi desenvolvido para o primeiro desafio do StationOne.</p>
                <br/>
                <p>Você pode consultar a documentaçao da API <a href="https://parkingup.herokuapp.com/docs" target="_blank">aqui</a>.</p>
                <br/>
                <p>Este software possui o código aberto. Código-fonte em <a href="https://github.com/barbarabrito/parking-up" target="_blank">github.com/barbarabrito/parking-up</a></p>
            </div>
        </div>
    )
}
export default About;
