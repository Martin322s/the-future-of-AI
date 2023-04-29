import styles from "./styles/home.module.css";
import logo from "./images/handshake.png";
import machine from "./images/portada.jpg";
import expert from "./images/expert.jpg";
import responsive from "./styles/responsive.module.css";

const Home = () => {
    return (
        <>
            <section className={`${styles["home-section"]} ${responsive["home-section"]}`}>
                <img className={`${styles["backgr-img"]} ${responsive["backgr-img"]}`} src={logo} alt="background" />
                <h1 className={`${styles["home-heading"]} ${responsive["home-heading"]}`}>Artificial Intelligence</h1>
                <p className={`${styles["home-subheading"]} ${responsive["home-subheading"]}`}>
                    Stay Up-to-Date with the Latest AI News and Developments.
                    Our newsletter is dedicated to providing you with the latest news, insights,
                    and analysis on the world of artificial intelligence. With AI rapidly transforming
                    every industry, keeping up with the latest developments is more important than ever.
                </p>
                <a className={`${styles["home-btn"]} ${responsive["home-btn"]}`}>Catalog news</a>
            </section>
            <section className={`${styles["update-section"]} ${responsive["update-section"]}`}>
                <img className={`${styles["machine-img"]} ${responsive["machine-img"]}`} src={machine} alt="machine" />
                <article>
                    <h1 className={`${styles["update-heading"]} ${responsive["update-heading"]}`}>
                        Latest developments in the field of machine learning:
                    </h1>
                    <p className={`${styles["update-info"]} ${responsive["update-info"]}`}>
                        Recent developments in machine learning include advancements in natural
                        language processing, reinforcement learning, explainable AI, federated learning,
                        and meta-learning. These developments are enabling machines to process and understand
                        human-like language, learn to play games at superhuman levels, improve transparency
                        and privacy, and adapt quickly to new tasks with minimal data. These developments have
                        implications for various fields, including healthcare, robotics, and automation.
                    </p>
                </article>
            </section>
            <section className={`${styles["expert-section"]} ${responsive["expert-section"]}`}>
                <article>
                    <h1 className={`${styles["expert-heading"]} ${responsive["expert-heading"]}`}>
                        Expert Opinions About The Future Of Human-Level AI
                    </h1>
                    <p className={`${styles["expert-info"]} ${responsive["expert-info"]}`}>
                        Many artificial intelligence experts believe there is a real chance that
                        human-level AI will be developed within the next decades. Some AI experts even
                        predict that it will exist much sooner than expected. In 2023, many industries
                        are already using technology to improve business operations,
                        understand market trends, and stay competitive. However, there are still a lot of
                        facts hidden about artificial intelligence. Experts believe that AI can compete with
                        human intelligence. However, artificial intelligence surpassing our own intelligence
                        sounds like sci-fi stuff. With that in mind, it becomes extra important to understand
                        what experts in the field of AI think about such scenarios.
                    </p>
                </article>
                <img
                    className={`
                    ${styles["expert-img"]} 
                    ${responsive["expert-img"]}`
                    } src={expert}
                    alt="machine"
                />
            </section>
            <h1 className={`${styles["latest-heading"]}`}>Latest news about AI...</h1>
            <section className={`${styles["latest-updates"]}`}>
                <article className={`${styles["article-update"]}`}>
                    <img className={`${styles["article-img"]}`} src={expert} alt="article-img" />
                    <h1 className={`${styles["article-heading"]}`}>Heading</h1>
                    <p className={`${styles["article-parag"]}`}>
                        afdsfdfgdfhgdfg
                    </p>
                    <a>Learn more..</a>
                </article>
                <article className={`${styles["article-update"]}`}>
                    <img className={`${styles["article-img"]}`} src={expert} alt="article-img" />
                    <h1 className={`${styles["article-heading"]}`}>Heading</h1>
                    <p className={`${styles["article-parag"]}`}>
                        afdsfdfgdfhgdfg
                    </p>
                    <a>Learn more..</a>
                </article>
                <article className={`${styles["article-update"]}`}>
                    <img className={`${styles["article-img"]}`} src={expert} alt="article-img" />
                    <h1 className={`${styles["article-heading"]}`}>Heading</h1>
                    <p className={`${styles["article-parag"]}`}>
                        afdsfdfgdfhgdfg
                    </p>
                    <a>Learn more..</a>
                </article>
            </section>
        </>
    );
};

export default Home;