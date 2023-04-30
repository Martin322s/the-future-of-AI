import styles from "./styles/about.module.css";
import responsive from "./styles/responsive.module.css";

const About = () => {
    return (
        <setion>
            <h1 className={`${styles["about-heading"]} ${responsive["about-heading"]}`}>
                All topics about artificial intelligence
            </h1>
        </setion>
    );
}
export default About;