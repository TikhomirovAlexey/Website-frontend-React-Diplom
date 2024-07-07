import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
    return (
        <header className="header">
            <div className="header-top">
                <Logo styles="logo-img logo-img_margin-top" />
                <Nav />
                <p className="phone">т.: 8(49331)97254</p>
            </div>
            <section className="header__info">

                <div className="header-performance">
                    <h2 className="heading">Активный отдых для всей семьи</h2>
                    <h4 className="subtitle-size-4">Время, проведенное с удовольствием!</h4>
                </div>

                <div className="title-box">
                    <h2 className="heading">Физкультурно-Оздоровительный
                        Комплекс</h2>
                    <h1 className="title">Наволоки-Бассейн</h1>
                </div>

            </section>
        </header>
    );
}

export default Header;