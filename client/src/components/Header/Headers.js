import { Link } from "react-router-dom";
import styles from "./styles/header.module.css";
import responsive from "./styles/responsive.module.css";
import logo from "./images/favicon.jpg";

const Header = () => {
    return (
        <nav className={`${styles["navigation"]} ${responsive["navigation"]}`}>
            {/* eslint-disable-next-line */}
            <ul className={`${styles["nav-bar"]} ${responsive["nav-bar"]}`} role={"list"}>
                <Link to="/"><img className={`${styles["nav-item-logo"]}`} src={logo} alt="logo" /></Link>
                <li className={`${styles["nav-item"]}`}><Link to="/catalog">Catalog news</Link></li>
                <li className={`${styles["nav-item"]}`}>
                    <Link
                        to="https://dev.bg/?gclid=CjwKCAjwo7iiBhAEEiwAsIxQEYeT58sn0kqbhi1hk1WC7wHP_S1u6FooL5YhIYYJtTW24nwOpNMcmBoCBIAQAvD_BwE"
                        target="_blank"
                    >
                        IT Jobs
                    </Link>
                </li>
                <li className={`${styles["nav-item"]}`}><Link to="/about">About us</Link></li>
                <li className={`${styles["nav-item"]}`}><Link to="/contact">Contact us</Link></li>
                <li className={`${styles["nav-item"]}`}><Link to="/coming">Coming soon</Link></li>
            </ul>
        </nav>
    );
};
export default Header;