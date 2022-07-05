import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {

	return (

		<footer>
			<small>&reg; 2022 <Link to='/sobre'>saiba mais sobre este software</Link></small>
		</footer>
	)
}

export default Footer;