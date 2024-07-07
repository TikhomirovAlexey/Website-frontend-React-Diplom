import img from '../img/notFoundPage.jpg';

function NotFoundPage() {
    return (
        <section className="not-found-page">
            <h2 className="not-found-header">The page was not found!</h2>
            <div className='not-found-wrapper'>
                <p className="not-found-text">404!</p>
                <img className="not-found-img" src={img} alt="Not Found Page" />
            </div>
        </section>
    );
}

export default NotFoundPage;