import styles from './Sobre.module.css';

function Sobre(){
    return(
        <div className={styles.container_sobre}>
            <br/>
            <h2>Sobre este software</h2>
            <br/>
            <p>ulla mollis viverra libero, nec tincidunt est mollis eu. Vivamus laoreet nibh justo, sed molestie justo consequat in. In nec massa varius orci pellentesque euismod quis quis est. Nulla iaculis dapibus dolor quis sagittis. Etiam vulputate nisi sapien, condimentum cursus purus ultricies tristique. Morbi rhoncus risus justo, id eleifend lectus mollis in. Mauris ac condimentum nunc. Quisque sapien magna, sollicitudin eget bibendum in, blandit quis urna. Nam vehicula lacus ac dui ultricies, nec dapibus nulla dictum. </p>
            <br/>
            <p>Você pode consultar a documentaçao da API <a href="http://localhost:5000/docs" target="_blank">aqui</a>.</p>
            <br/>
            <p>Este software possui o código aberto. Código-fonte: <a href="https://github.com/barbarabrito" target="_blank">github.com/barbarabrito</a></p>
        </div>
    )
}

export default Sobre;