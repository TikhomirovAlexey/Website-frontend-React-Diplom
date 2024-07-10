import { useState } from "react";
import Footer from "./Footer";
import PagesHeader from "./PagesHeader";

//TODO: сделать в json формате
const dataNews = [
    {
        id: 'news1',
        heading: 'Lorem ipsum 1',
        descriptionMini: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, fugit!',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque a eveniet facilis similique sit deserunt id quis accusantium, tenetur recusandae voluptates minus temporibus nesciunt dolores adipisci labore unde, provident repudiandae aliquam soluta accusamus officiis, nisi quos. Quifuga, tempore nemo vero vel ipsam assumenda porro inventore cupiditate odio sequi alias amet enim voluptatem quis blanditiis magnam animi.A excepturi magnam repellendus unde aliquid recusandae modi dolores exercitationem voluptatum numquam fuga nemo cupiditate impeditvoluptateest quos fugiat, veniam inventore error eveniet dolorem odio ullam? Iusto velperspiciatisdolores, fugit eligendi dolorum odit, quibusdam voluptatum sint accusantiumlaudantium saepedel eniti officia.',
        date: '06.02.2022г.'

    },
    {
        id: 'news2',
        heading: 'Lorem ipsum 2',
        descriptionMini: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, fugit!',
        description: 'Quifuga, tempore nemo vero vel ipsam assumenda porro inventore cupiditate odio sequi alias amet enim voluptatem quis blanditiis magnam animi.A excepturi magnam repellendus unde aliquid recusandae modi dolores exercitationem voluptatum numquam fuga nemo cupiditate impeditvoluptateest quos fugiat, veniam inventore error eveniet dolorem odio ullam? Iusto velperspiciatisdolores, fugit eligendi dolorum odit, quibusdam voluptatum sint accusantiumlaudantium saepedel eniti officia.',
        date: '07.02.2022г.'

    },
    {
        id: 'news3',
        heading: 'Lorem ipsum 3',
        descriptionMini: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, fugit!',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque a eveniet facilis similique sit deserunt id quis accusantium, tenetur recusandae voluptates minus temporibus nesciunt dolores adipisci labore unde, provident repudiandae aliquam soluta accusamus officiis, nisi quos. Quifuga, tempore nemo vero vel ipsam assumenda porro inventore cupiditate odio sequi alias amet enim voluptatem quis blanditiis magnam animi.',
        date: '08.02.2022г.'

    },
    {
        id: 'news4',
        heading: 'Lorem ipsum 4',
        descriptionMini: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, fugit!',
        description: 'Wellcome. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque a eveniet facilis similique sit deserunt id quis accusantium, tenetur recusandae voluptates minus temporibus nesciunt dolores adipisci labore unde, provident repudiandae aliquam soluta accusamus officiis, nisi quos. Quifuga, tempore nemo vero vel ipsam assumenda porro inventore cupiditate odio sequi alias amet enim voluptatem quis blanditiis magnam animi.',
        date: '09.02.2022г.'

    }
]

function News() {

    const [news, setNews] = useState(dataNews[0]);

    const displayNews = (e) => {
        const newsItem = dataNews.find(el => el.id === e.target.closest('.news-btn').id);
        setNews(newsItem);
    }

    return (
        <>
            <PagesHeader heading='Новости' pageId='news' />
            <section className="news center-site">
                <h2 className="subtitle">Новости клуба</h2>
                <section className="news-box">
                    <div className="news-buttons">
                        {
                            dataNews.map(el => (
                                <button onClick={displayNews} className="news-btn" type="button" id={el.id} key={el.id}>
                                    <div className="news-btn-content">
                                        <h4 className="subtitle-size-4 subtitle-size-4_weight-bold">{el.heading}</h4>
                                        <p className="description description_weigth-300">{el.descriptionMini}</p>
                                        <p className="news-btn-content-date">{el.date}</p>
                                    </div>
                                </button>
                            ))
                        }
                    </div>
                    <div className="news-content">
                        <div className="news-item" id={news.id}>
                            <h3 className="subtitle">{news.heading}</h3>
                            <p className="description">{news.description}</p>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
}

export default News;