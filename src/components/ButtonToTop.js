import { useState, useEffect } from 'react';

function ButtonToTop() {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleUpButton = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <button className={scroll < 400 ? 'btn-to-top invisible' : 'btn-to-top'} onClick={handleUpButton}><i className="fa-solid fa-arrow-up fas-btn-up"></i></button>
    );
}

export default ButtonToTop;