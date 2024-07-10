import { useParams } from "react-router-dom";
import Footer from "./Footer";
import PagesHeader from "./PagesHeader";
import img from "../img/coach.jpg";


const dataPages = [
    {
        id: 'for-children-fight',
        heading: 'Рукопашный бой',
        coaches: [
            {
                name: 'Ивашкин Борис',
                schedule: {
                    monday: '18:30-19:30',
                    tuesday: '18:00-20:00',
                    wednesday: '18:30-19:30',
                    thursday: '18:00-20:00',
                    friday: '18:30-19:30',
                    saturday: '',
                    sunday: ''
                }
            },
            {
                name: 'Нагайко Ева',
                schedule: {
                    monday: '15:30-19:00',
                    tuesday: '15:30-19:00',
                    wednesday: '15:30-19:00',
                    thursday: '15:30-19:00',
                    friday: '15:30-19:00',
                    saturday: '10:00-13:00',
                    sunday: ''
                }
            }
        ],
        infoAboutTraining: [
            {
                heading: 'Возраст',
                description: 'Набор детей производится от 6 лет'
            },
            {
                heading: 'Форма',
                description: 'Шорты, футболка'
            },
            {
                heading: 'Цена',
                description: 'Месяц занятий - 1000 рублей.'
            },
        ],
    },
    {
        id: 'for-children-karate',
        heading: 'Каратэ',
        coaches: [
            {
                name: 'Лапин Егор',
                schedule: {
                    monday: '18:30-19:30',
                    tuesday: '18:00-20:00',
                    wednesday: '18:30-19:30',
                    thursday: '18:00-20:00',
                    friday: '18:30-19:30',
                    saturday: '',
                    sunday: ''
                }
            },
            {
                name: 'Шилов Василий',
                schedule: {
                    monday: '15:30-19:00',
                    tuesday: '15:30-19:00',
                    wednesday: '15:30-19:00',
                    thursday: '15:30-19:00',
                    friday: '15:30-19:00',
                    saturday: '10:00-13:00',
                    sunday: ''
                }
            }
        ],
        infoAboutTraining: [
            {
                heading: 'Возраст',
                description: 'Набор детей производится от 6 лет'
            },
            {
                heading: 'Форма',
                description: 'Кимоно'
            },
            {
                heading: 'Цена',
                description: 'Месяц занятий - 100 рублей.'
            },
        ],
    },
    {
        id: 'for-children-swim',
        heading: 'Спортивное плавание',
        coaches: [
            {
                name: 'Смирнов Сергей',
                schedule: {
                    monday: '18:30-19:30',
                    tuesday: '18:00-20:00',
                    wednesday: '18:30-19:30',
                    thursday: '18:00-20:00',
                    friday: '18:30-19:30',
                    saturday: '',
                    sunday: ''
                }
            },
            {
                name: 'Борисова Ольга',
                schedule: {
                    monday: '15:30-19:00',
                    tuesday: '15:30-19:00',
                    wednesday: '15:30-19:00',
                    thursday: '15:30-19:00',
                    friday: '15:30-19:00',
                    saturday: '10:00-13:00',
                    sunday: ''
                }
            }
        ],
        infoAboutTraining: [
            {
                heading: 'Возраст',
                description: 'Набор детей производится от 7 лет'
            },
            {
                heading: 'Форма',
                description: 'Купальник(плавки), шапочка, очки, полотонце, тапки'
            },
            {
                heading: 'Цена',
                description: 'Абонемент на 8 занятий - 1100 рублей.'
            },
        ],
    },
    {
        id: 'for-children-football',
        heading: 'Футбол',
        coaches: [
            {
                name: 'Васин Петр',
                schedule: {
                    monday: '18:30-19:30',
                    tuesday: '18:00-20:00',
                    wednesday: '18:30-19:30',
                    thursday: '18:00-20:00',
                    friday: '18:30-19:30',
                    saturday: '',
                    sunday: ''
                }
            },
            {
                name: 'Лапшин Александр',
                schedule: {
                    monday: '15:30-19:00',
                    tuesday: '15:30-19:00',
                    wednesday: '15:30-19:00',
                    thursday: '15:30-19:00',
                    friday: '15:30-19:00',
                    saturday: '10:00-13:00',
                    sunday: ''
                }
            }
        ],
        infoAboutTraining: [
            {
                heading: 'Возраст',
                description: 'Набор детей производится от 7 лет'
            },
            {
                heading: 'Форма',
                description: 'Шорты, футболка, футбольные кеды-бутсы'
            },
            {
                heading: 'Цена',
                description: 'Месяц занятий - 1100 рублей.'
            },
        ],
    },
    {
        id: 'for-children-tennis',
        heading: 'Теннис',
        coaches: [
            {
                name: 'Смирнов Сергей',
                schedule: {
                    monday: '18:30-19:30',
                    tuesday: '18:00-20:00',
                    wednesday: '18:30-19:30',
                    thursday: '18:00-20:00',
                    friday: '18:30-19:30',
                    saturday: '',
                    sunday: ''
                }
            },
            {
                name: 'Борисова Ольга',
                schedule: {
                    monday: '15:30-19:00',
                    tuesday: '15:30-19:00',
                    wednesday: '15:30-19:00',
                    thursday: '15:30-19:00',
                    friday: '15:30-19:00',
                    saturday: '10:00-13:00',
                    sunday: ''
                }
            }
        ],
        infoAboutTraining: [
            {
                heading: 'Возраст',
                description: 'Набор детей производится от 7 лет'
            },
            {
                heading: 'Форма',
                description: 'Шорты, футболка, сменная обувь'
            },
            {
                heading: 'Цена',
                description: 'Месяц занятий - 1000 рублей.'
            },
        ],
    },
    {
        id: 'for-children-ping-pong',
        heading: 'Настольный теннис',
        coaches: [
            {
                name: 'Папин Юрий',
                schedule: {
                    monday: '18:30-19:30',
                    tuesday: '18:00-20:00',
                    wednesday: '18:30-19:30',
                    thursday: '18:00-20:00',
                    friday: '18:30-19:30',
                    saturday: '',
                    sunday: ''
                }
            },
            {
                name: 'Мамина Анна',
                schedule: {
                    monday: '15:30-19:00',
                    tuesday: '15:30-19:00',
                    wednesday: '15:30-19:00',
                    thursday: '15:30-19:00',
                    friday: '15:30-19:00',
                    saturday: '10:00-13:00',
                    sunday: ''
                }
            }
        ],
        infoAboutTraining: [
            {
                heading: 'Возраст',
                description: 'Набор детей производится от 7 лет'
            },
            {
                heading: 'Форма',
                description: 'Спортивная одежда, сменная обувь'
            },
            {
                heading: 'Цена',
                description: 'Месяц занятий - 1000 рублей.'
            },
        ],
    }
]

function ForChildrenPages() {
    const { id } = useParams();
    const dataPage = dataPages.find(el => el.id === id);
    return (
        <>
            <PagesHeader heading={dataPage.heading} pageId={dataPage.id} />
            <section className="coaches center-site">
                <h3 className="subtitle">Тренерский состав</h3>
                <div className="coaches-wrapper">
                    {
                        dataPage.coaches.map(el => (
                            <div className="coach-box">
                                <img className="coach-photo" src={img} alt="coach" />
                                <h4 className="subtitle-size-4">{el.name}</h4>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="info-about-training center-site">
                <h3 className="subtitle">Информация о занятиях</h3>
                <div className="info-about-training__box">
                    <div className="info-about-training__wrapper">
                        {
                            dataPage.infoAboutTraining.map(el => (
                                <div className="info-about-training__card">
                                    <h4 className="subtitle-size-4 subtitle-size-4_weight-bold">{el.heading}</h4>
                                    <p className="description">{el.description}</p>
                                    <div className="horizontal-line"></div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="info-about-training__card info-about-training__card_table">
                        <h4 className="subtitle-size-4 subtitle-size-4_weight-bold">Расписание</h4>
                        <table className="info-about-training__table">
                            <tbody>
                                <tr>
                                    <td></td>
                                    <th>понедельник</th>
                                    <th>вторник</th>
                                    <th>среда</th>
                                    <th>четверг</th>
                                    <th>пятница</th>
                                    <th>суббота</th>
                                    <th>воскресенье</th>
                                </tr>
                                {dataPage.coaches.map(el => (
                                    <tr>
                                        <td className="subtitle-size-4 subtitle-size-4_weight-bold">{el.name}</td>
                                        <th>{el.schedule.monday}</th>
                                        <th>{el.schedule.tuesday}</th>
                                        <th>{el.schedule.wednesday}</th>
                                        <th>{el.schedule.thursday}</th>
                                        <th>{el.schedule.friday}</th>
                                        <th>{el.schedule.saturday}</th>
                                        <th>{el.schedule.sunday}</th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default ForChildrenPages;