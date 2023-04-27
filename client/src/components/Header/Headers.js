import styles from "./styles/header.module.css";
import logo from "./images/favicon.jpg";

const Header = () => {
    return (
        <nav className={`${styles["navigation"]}`}>
            {/* eslint-disable-next-line */}
            <ul className={`${styles["nav-bar"]}`} role={"list"}>
                <img className={`${styles["nav-item-logo"]}`} src={logo} alt="logo" />
                <li className={`${styles["nav-item"]}`}><a href="/">Catalog news</a></li>
                <li className={`${styles["nav-item"]}`}><a href="/">IT Jobs</a></li>
                <li className={`${styles["nav-item"]}`}><a href="/">About us</a></li>
                <li className={`${styles["nav-item"]}`}><a href="/">Contact us</a></li>
                <li className={`${styles["nav-item"]}`}><a href="/">Coming soon</a></li>
                <div className={`${styles["search-bar"]}`}>
                    <input type="text" placeholder="Search.." />
                    <button className={`${styles["search-btn"]}`}>
                        <i className="fas fa-search" />
                        Search
                    </button>
                </div>
            </ul>
        </nav>
    );
};
export default Header;