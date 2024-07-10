import { Link } from "react-router-dom";

function NavForChildren() {
    return (
        //TODO: сделать переходы по ссылкам
        <nav className="nav">
            <Link className="nav__link" to="/pages/for-children-fight">Рукопашный бой</Link>
            <Link className="nav__link" to="/pages/for-children-karate">Каратэ</Link>
            <Link className="nav__link" to="/pages/for-children-swim">Плавание</Link>
            <Link className="nav__link" to="/pages/for-children-football">Футбол</Link>
            <Link className="nav__link" to="/pages/for-children-tennis">Теннис</Link>
            <Link className="nav__link" to="/pages/for-children-ping-pong">Настольный теннис</Link>
        </nav>
    );
}

export default NavForChildren;