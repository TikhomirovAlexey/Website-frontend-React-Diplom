import { Link } from "react-router-dom";


const forChildrenInfo = [
    {
        id: 'for-children-fight',
        heading: 'Рукопашный бой',
        description: 'Смешанные контактные единоборства'
    },
    {
        id: 'for-children-karate',
        heading: 'Каратэ',
        description: 'Восточное боевое искусство'
    },
    {
        id: 'for-children-swim',
        heading: 'Плавание',
        description: 'Спортивное плавание'
    },
    {
        id: 'for-children-football',
        heading: 'Футбол',
        description: 'Командный вид спорта с мячом'
    },
    {
        id: 'for-children-tennis',
        heading: 'Теннис',
        description: 'Один на один на корте'
    },
    {
        id: 'for-children-ping-pong',
        heading: 'Настольный теннис',
        description: 'Один на один на столе'
    }
]

function ForChildren() {
    return (
        <section className="for-children center-site">
            <h3 className="subtitle">Секции для детей</h3>
            <div className="for-children__card-box">
                {
                    forChildrenInfo.map(el => (
                        <Link className={"for-children__link for-children__link_" + el.id} to="/" key={el.id}>
                            <h4 className="subtitle-size-4 subtitle-size-4_weight-bold subtitle-size-4_font-size-1">{el.heading}</h4>
                            <div className="horizontal-line horizontal-line_white"></div>
                            <p className="description description_weigth-300">{el.description}</p>
                        </Link>
                    ))
                }
            </div>
        </section>
    );
}

export default ForChildren;