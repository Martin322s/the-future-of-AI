import styles from "./styles/home.module.css";
import logo from "./images/handshake.png";

const Home = () => {
    return (
        <>
            <img className={`${styles["backgr-img"]}`} src={logo} alt="background" />
            <h1 className={`${styles["home-heading"]}`}>Artificial Intelligence</h1>
            <p className={`${styles["home-subheading"]}`}>Stay Up-to-Date with the Latest AI News and Developments</p>
            <button className={`${styles["home-btn"]}`}>Catalog news</button>
        </>
    );
};

export default Home;