import styles from "./styles/home.module.css";
import logo from "./images/handshake.png";

const Home = () => {
    return (
        <>
            <section className={`${styles["home-section"]}`}>
                <img className={`${styles["backgr-img"]}`} src={logo} alt="background" />
                <h1 className={`${styles["home-heading"]}`}>Artificial Intelligence</h1>
                <p className={`${styles["home-subheading"]}`}>
                    Stay Up-to-Date with the Latest AI News and Developments.
                    Our newsletter is dedicated to providing you with the latest news, insights,
                    and analysis on the world of artificial intelligence. With AI rapidly transforming
                    every industry, keeping up with the latest developments is more important than ever.
                </p>
                <button className={`${styles["home-btn"]}`}>Catalog news</button>
            </section>
            <section className={`${styles["update-section"]}`}>
                <h1 className={`${styles["update-heading"]}`}>
                    Latest developments in the field of machine learning:
                </h1>
                <p className={`${styles["update-info"]}`}>
                    Recent developments in machine learning include advancements in natural
                    language processing, reinforcement learning, explainable AI, federated learning,
                    and meta-learning. These developments are enabling machines to process and understand
                    human-like language, learn to play games at superhuman levels, improve transparency
                    and privacy, and adapt quickly to new tasks with minimal data. These developments have
                    implications for various fields, including healthcare, robotics, and automation.
                </p>
            </section>
        </>
    );
};

export default Home;