import styles from "./styles/home.module.css";
import logo from "./images/handshake.png";

const Home = () => {
    return (
        <img className={`${styles["backgr-img"]}`}src={logo} alt="background" />
    );
};

export default Home;