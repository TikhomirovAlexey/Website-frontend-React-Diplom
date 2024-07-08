import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__box center-site">
                <div className="footer__info">
                    <h3 className="subtitle subtitle__t-align-left">О нас:</h3>
                    <ul className="footer__list">
                        <li>г.Наволоки, ул.Спортивня,
                            д.34</li>
                        <li>т.: 8(49331)97254</li>
                        <li>почта: fok_bass@mail.ru</li>
                    </ul>
                </div>
                <div className="footer__map">
                    <YMaps>
                        <Map width={'100%'} defaultState={{ center: [57.467704, 41.953102], zoom: 16 }}>
                            <Placemark geometry={[57.467704, 41.953102]} />
                        </Map>
                    </YMaps>
                </div>
            </div>
            <div className="author center-site">
                <div className="author__box ">
                    <p className="year">2024 г.</p>
                    <p className="author-info">&copy;by Alexey Tikhomirov</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;