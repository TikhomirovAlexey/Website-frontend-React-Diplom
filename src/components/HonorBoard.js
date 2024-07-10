import PagesHeader from "./PagesHeader";
import Footer from "./Footer";
import img from "../img/champion.jpg";

const champions = [
    {
        name: 'Петрова Света',
        rank: 'I разряд по плаванию'
    },
    {
        name: 'Смирнова Юля',
        rank: 'КМС по рукопашному бою'
    },
    {
        name: 'Александров Елисей',
        rank: 'КМС по теннису'
    },
    {
        name: 'Лазарева Инга',
        rank: 'I разряд настольному теннису'
    },
    {
        name: 'Папарин Артем',
        rank: 'Мастер спорта по карате'
    },
    {
        name: 'Папарин Матвей',
        rank: 'Мастер спорта по карате'
    },
    {
        name: 'Лапин Артем',
        rank: 'Мастер спорта по рукопашному бою'
    },
    {
        name: 'Сапсанова Олеся',
        rank: 'КМС по плаванию'
    }
]

function HonorBoard() {
    return (
        <>
            <PagesHeader heading='Доска почета' pageId='honorBoard' />
            <section className="honorBoard center-site">
                {champions.map(champ => (
                    <article>
                        <img src={img} alt='champion' />
                        <h4 className="subtitle-size-4 subtitle-size-4_weight-bold">{champ.name}</h4>
                        <p className="description">{champ.rank} </p>
                    </article>
                ))}
            </section>
            <Footer />
        </>

    );
}

export default HonorBoard;