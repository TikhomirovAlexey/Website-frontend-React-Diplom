
//TODO: сделать отдельным json файлом
let arrayServises = [
    {
        id: 'sv-pool',
        img: 'fa-solid fa-person-swimming fa-img-styles',
        heading: 'Бассейн',
        textInfo: 'Бассейн для детей и взрослых с комфортной температурой'
    },
    {
        id: 'sv-aerobics',
        img: 'fa-solid fa-person-drowning fa-img-styles',
        heading: 'Аквааэробика',
        textInfo: 'Аэробные нагрузки в воде'
    },
    {
        id: 'sv-gym',
        img: 'fa-solid fa-dumbbell fa-img-styles',
        heading: 'Тренажерный зал',
        textInfo: 'Тренировки с отягожением'
    },
    {
        id: 'sv-spa',
        img: 'fa-solid fa-spa fa-img-styles',
        heading: 'Сауна',
        textInfo: 'Отдых с большой температурой'
    },
    {
        id: 'sv-tennis',
        img: 'fa-solid fa-baseball fa-img-styles',
        heading: 'Теннис',
        textInfo: 'Теннисный корт для аренды'
    },
    {
        id: 'sv-ping_pong',
        img: 'fa-solid fa-table-tennis-paddle-ball fa-img-styles',
        heading: 'Настольный теннис',
        textInfo: 'Настольный теннис для аренды'
    }
];

function Services() {
    return (
        <section className="services center-site">
            <h3 className="subtitle">Твое время, твой выбор!</h3>
            <div className="services-wrapper">
                {arrayServises.map(item => (
                    <article className="service-item" data-id={item.id} key={item.id}>
                        <div className="fas-wrapper">
                            <i className={item.img}></i>
                        </div>
                        <h4 className="subtitle-size-4 subtitle-size-4_weight-bold">{item.heading}</h4>
                        <p className="description">{item.textInfo}</p>
                        <div className="horizontal-line">
                        </div>
                        <button className="service-btn">Подробнее...</button>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Services;