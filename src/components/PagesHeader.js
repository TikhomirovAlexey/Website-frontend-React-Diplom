import Logo from "./Logo";
import Nav from "./Nav";
import NavForChildren from "./NavForChildren";

function PagesHeader(props) {
    return (
        <header className={`pages-header pages-header_${props.pageId}`}>
            <div className="header-top">
                <Logo styles="logo-img logo-img_margin-top" />
                <Nav />
                <p className="phone">т.: 8(49331)97254</p>
            </div>
            <div className="pages-header__heading-wrapper">
                <h2 className="pages-heading">{props.heading}</h2>
            </div>
            <NavForChildren />
        </header>
    );
}

export default PagesHeader;