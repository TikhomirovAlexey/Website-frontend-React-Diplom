import { Link } from "react-router-dom";

function Nav() {
    return (
        //TODO: сделать переходы по ссылкам
        <nav className="nav">
            <Link className="nav__link" to="/">Услуги</Link>
            <Link className="nav__link" to="/">Для детей</Link>
            <Link className="nav__link" to="/">Новости</Link>
            <Link className="nav__link" to="/">Доска почета</Link>
            <Link className="nav__link" to="/">Галерея</Link>
            <Link className="nav__link" to="/">О нас</Link>
        </nav>
    );
}

export default Nav;