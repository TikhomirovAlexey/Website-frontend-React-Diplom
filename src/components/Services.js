import { useState } from 'react';

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

let servicesInfo = [
    {
        id: 'sv-pool-info',
        heading: 'Бассейн',
        info: [
            {
                title: 'Режим работы',
                description: 'С 8-00 до 22-00. Понедельник с 13-00!'
            },
            {
                title: 'Температура воды',
                description: 'Большой бассейн: 29 градусов. Бассейн для детей: 32 градуса.'
            },
            {
                title: 'Стоимость',
                description: 'Взрослые - 210р, дети - 120р.'
            },
            {
                title: 'Размер',
                description: 'Большой бассейн: 25х10 м, бассейн для детей: 10х8 м'
            },
            {
                title: 'Глубина',
                description: 'Большой бассейн: от 2м до 2,5м. Бассейн для детей: от 70см до 1м.'
            }
        ]
    },
    {
        id: 'sv-aerobics-info',
        heading: 'Аквааэробика',
        info: [
            {
                title: 'Расписание занятий',
                description: 'среда: с 19-30, воскресенье: с 14-00.'
            },
            {
                title: 'Возраст',
                description: 'от 12 лет'
            },
            {
                title: 'Стоимость',
                description: 'Одно занятие - 210р'
            },
            {
                title: 'Длительнойсть',
                description: 'Одно занятие - 40 минут'
            },
            {
                title: 'Форма',
                description: 'Купальник, шапочка. Доп. инвентарь выдается.'
            }
        ]
    },
    {
        id: 'sv-gym-info',
        heading: 'Тренажерный зал',
        info: [
            {
                title: 'Режим работы',
                description: 'С 8-00 до 22-00. Понедельник с 13-00!'
            },
            {
                title: 'Температура воды',
                description: 'Большой бассейн: 29 градусов. Бассейн для детей: 32 градуса.'
            },
            {
                title: 'Стоимость',
                description: 'Взрослые - 210р, дети - 120р.'
            },
            {
                title: 'Размер',
                description: 'Большой бассейн: 25х10 м, бассейн для детей: 10х8 м'
            },
            {
                title: 'Глубина',
                description: 'Большой бассейн: от 2м до 2,5м. Бассейн для детей: от 70см до 1м.'
            }
        ]
    },
    {
        id: 'sv-spa-info',
        heading: 'Сауна',
        info: [
            {
                title: 'Режим работы',
                description: 'С 8-00 до 22-00. Понедельник с 13-00!'
            },
            {
                title: 'Температура воды',
                description: 'Большой бассейн: 29 градусов. Бассейн для детей: 32 градуса.'
            },
            {
                title: 'Стоимость',
                description: 'Взрослые - 210р, дети - 120р.'
            },
            {
                title: 'Размер',
                description: 'Большой бассейн: 25х10 м, бассейн для детей: 10х8 м'
            },
            {
                title: 'Глубина',
                description: 'Большой бассейн: от 2м до 2,5м. Бассейн для детей: от 70см до 1м.'
            }
        ]
    },
    {
        id: 'sv-tennis-info',
        heading: 'Теннис',
        info: [
            {
                title: 'Режим работы',
                description: 'С 8-00 до 22-00. Понедельник с 13-00!'
            },
            {
                title: 'Температура воды',
                description: 'Большой бассейн: 29 градусов. Бассейн для детей: 32 градуса.'
            },
            {
                title: 'Стоимость',
                description: 'Взрослые - 210р, дети - 120р.'
            },
            {
                title: 'Размер',
                description: 'Большой бассейн: 25х10 м, бассейн для детей: 10х8 м'
            },
            {
                title: 'Глубина',
                description: 'Большой бассейн: от 2м до 2,5м. Бассейн для детей: от 70см до 1м.'
            }
        ]
    },
    {
        id: 'sv-ping_pong-info',
        heading: 'Настольный теннис',
        info: [
            {
                title: 'Режим работы',
                description: 'С 8-00 до 22-00. Понедельник с 13-00!'
            },
            {
                title: 'Температура воды',
                description: 'Большой бассейн: 29 градусов. Бассейн для детей: 32 градуса.'
            },
            {
                title: 'Стоимость',
                description: 'Взрослые - 210р, дети - 120р.'
            },
            {
                title: 'Размер',
                description: 'Большой бассейн: 25х10 м, бассейн для детей: 10х8 м'
            },
            {
                title: 'Глубина',
                description: 'Большой бассейн: от 2м до 2,5м. Бассейн для детей: от 70см до 1м.'
            }
        ]
    }
]

function Services() {
    const [infoFlag, setInfoFlag] = useState('notInfo');
    const [idItem, setIdItem] = useState();

    const infoNotDisplay = () => {
        setInfoFlag('notInfo');
    }

    const infoDisplay = (e) => {
        const idForInfo = e.target.closest('.service-item').dataset.id + "-info";
        setIdItem(idForInfo);
        setInfoFlag('info');
    }

    //TODO: поискать лучшее решение, придумать анимацию перехода, написать актуальное инфо
    if (infoFlag === 'info') {
        const item = servicesInfo.find(el => el.id === idItem);
        return (
            <section className="services center-site" id='serviseId'>
                <h3 className="subtitle">Твое время, твой выбор!</h3>
                <div className="service-item-info">
                    <h3 className="subtitle">{item.heading}</h3>
                    {item.info.map(el => (
                        <>
                            <h4 className="subtitle-size-4 subtitle-size-4_weight-bold">
                                {el.title}
                            </h4>
                            <p className="description">{el.description}</p>

                        </>
                    ))}
                    <button onClick={infoNotDisplay} className="service-btn-back">Назад</button>
                </div>
            </section>
        );
    }


    if (infoFlag === 'notInfo') {
        return (
            <section className="services center-site" id='serviseId'>
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
                            <button onClick={infoDisplay} className="service-btn">Подробнее...</button>
                        </article>
                    ))}
                </div>
            </section>
        );
    }
}

export default Services;