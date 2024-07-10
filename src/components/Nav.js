import { Link } from "react-router-dom";

function Nav() {
    return (
        //TODO: сделать переходы по ссылкам
        <nav className="nav">
            <Link className="nav__link" to="/">Главная</Link>
            <Link className="nav__link" to="/news">Новости</Link>
            <Link className="nav__link" to="/">Доска почета</Link>
            <Link className="nav__link" to="/">Галерея</Link>
            <a className="nav__link" href="#footerId">О нас</a>
        </nav>
    );
}

export default Nav;