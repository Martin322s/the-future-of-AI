import styles from "./styles/about.module.css";
import responsive from "./styles/responsive.module.css";

const About = () => {
    return (
        <>
            <h1 className={`${styles["about-heading"]} ${responsive["about-heading"]}`}>
                Artificial intelligencs (AI) newsletter
            </h1>
            <section className={`${styles["about-section"]} ${responsive["about-section"]}`}>
                <article className={`${styles["what-section"]} ${responsive["what-section"]}`}>
                    <h1>1. What Is Artificial Intelligence (AI)?</h1>
                    <p>
                        Artificial intelligence (AI) refers to the simulation of human intelligence by
                        software-coded heuristics. Nowadays this code is prevalent in everything from
                        cloud-based, enterprise applications to consumer apps and even embedded firmware.
                        The year 2022 brought AI into the mainstream through widespread familiarity with
                        applications of Generative Pre-Training Transformer. The most popular application
                        is OpenAI's ChatGPT. The widespread fascination with ChatGPT made it synonymous
                        with AI in the minds of most consumers. However, it represents only a small portion
                        of the ways that AI technology is being used today.
                    </p>
                </article>
                <article className={`${styles["history-section"]} ${responsive["history-section"]}`}>
                    <h1>2. A Brief History of Artificial Intelligence</h1>
                    <p>
                        Here's a brief timeline of the past six decades of how AI evolved from its inception.<br />
                        1956 - John McCarthy coined the term 'artificial intelligence' and had the
                        first AI conference.<br />
                        1969 - Shakey was the first general-purpose mobile robot built. It is now able
                        to do things with a purpose vs. just a list of instructions.<br />
                        1997 - Supercomputer 'Deep Blue' was designed, and it defeated the world
                        champion chess player in a match. It was a massive milestone by IBM to create
                        this large computer.<br />
                        2002 - The first commercially successful robotic vacuum cleaner was created.<br />
                        2005 - 2019 - Today, we have speech recognition, robotic process automation (RPA),
                        a dancing robot, smart homes, and other innovations make their debut.<br />
                        2020 - Baidu releases the LinearFold AI algorithm to medical and scientific and
                        medical teams developing a vaccine during the early stages of the SARS-CoV-2
                        (COVID-19) pandemic. The algorithm can predict the RNA sequence of the virus in
                        only 27 seconds, which is 120 times faster than other methods.<br />
                    </p>
                </article>
                <h1 className={`${styles["terms-heading"]} ${responsive["terms-heading"]}`}>Read all 
                    <a 
                        href="https://www.artificialintelligence-news.com/privacy-policy/" 
                        target="_blank"
                    >
                        Terms & conditions for Privacy Policy
                    </a>
                </h1>
            </section >
        </>
    );
}
export default About;