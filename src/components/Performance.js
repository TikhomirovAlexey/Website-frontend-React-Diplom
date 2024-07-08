function Performance() {
    return (
        <section className="performance">
            <h3 className="subtitle">Почему именно мы?</h3>
            <div className="performance__box">
                <div className="performance__item">
                    <div className="fas-wrapper">
                        <i className="fa-solid fa-plus fa-img-styles"></i>
                    </div>
                    <ul className="performance__list">
                        <li>Низкие цены</li>
                        <li>Удобное расположение</li>
                        <li>Зона отдыха</li>
                        <li>Большая парковка</li>
                    </ul>
                    <div className="horizontal-line"></div>
                </div>
                <div className="vertical-line"></div>
                <div className="performance__item">
                    <div className="fas-wrapper">
                        <i className="fa-solid fa-check fa-img-styles"></i>
                    </div>
                    <ul className="performance__list">
                        <li>Температура воды 29 градусов</li>
                        <li>Температура воды бассейна для детей 32 градуса</li>
                        <li>Большой корт для тенниса</li>
                        <li>Аквааэробика</li>
                    </ul>
                    <div className="horizontal-line"></div>
                </div>
                <div className="vertical-line"></div>
                <div className="performance__item">
                    <div className="fas-wrapper">
                        <i className="fa-solid fa-thumbs-up fa-img-styles"></i>
                    </div>
                    <ul className="performance__list">
                        <li>Хорошое настоение</li>
                        <li>Приятное времяпрепроводения</li>
                        <li>Совместный отдых всей семьей</li>
                        <li>Польза для здоровья</li>
                    </ul>
                    <div className="horizontal-line"></div>
                </div>
            </div>
        </section>
    );
}

export default Performance;