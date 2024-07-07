import { Link } from 'react-router-dom';
import logo from '../img/logo_mini-PNG.png';

function Logo(props) {
    return (
        <Link className="logo" to="/">
            <img className={props.styles} src={logo} alt="Лого ФОК Наволоки-Бассейн" />
        </Link>
    );
}

export default Logo;