import styles from "./styles/catalog.module.css";
import responsive from "./styles/responsive.module.css";
import ai from "./images/ai-one.jpg";
import two from "./images/ai-two.jpg";

const Catalog = () => {
    return (
        <>
            <h1 className={`${styles["about-heading"]} ${responsive["about-heading"]}`}>
                Artificial intelligence (AI) newsletter
            </h1>
            <section>
                <article className={`${styles["what-section"]} ${responsive["what-section"]}`}>
                    <img className={`${styles["ai-img"]} ${responsive["ai-img"]}`} src={ai} alt="ai" />
                    <div>
                        <h1>Artificial intelligence predicts the price of Ethereum</h1>
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
                    </div>
                </article>
                <article className={`${styles["what-section"]} ${responsive["what-section"]}`}>
                    <img className={`${styles["ai-img"]} ${responsive["ai-img"]}`} src={two} alt="ai" />
                    <div>
                        <h1>The new AI world order will inevitably include a period of chaos</h1>
                        <p>
                            Artificial intelligence will turn the working human into an exotic. It is a
                            fact that there is a slowdown in Bulgarian IT companies. I hear that at least
                            2000 people have been released from programming positions in Bulgaria. This is
                            the result of a combination of several factors, not just the emergence of
                            artificial intelligence. There is a mini-recession coming from the echoes of
                            the Covid crisis. In addition, rising interest rates tighten cash flow,
                            forcing companies to make layoffs. But anyway, artificial intelligence makes
                            a huge impact.
                        </p>
                    </div>
                </article>
                <article className={`${styles["what-section"]} ${responsive["what-section"]}`}>
                    <img className={`${styles["ai-img"]} ${responsive["ai-img"]}`} src={ai} alt="ai" />
                    <div>
                        <h1>Artificial intelligence predicts the price of Ethereum</h1>
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
                    </div>
                </article>
                <article className={`${styles["what-section"]} ${responsive["what-section"]}`}>
                    <img className={`${styles["ai-img"]} ${responsive["ai-img"]}`} src={ai} alt="ai" />
                    <div>
                        <h1>Artificial intelligence predicts the price of Ethereum</h1>
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
                    </div>
                </article>
                <article className={`${styles["what-section"]} ${responsive["what-section"]}`}>
                    <img className={`${styles["ai-img"]} ${responsive["ai-img"]}`} src={ai} alt="ai" />
                    <div>
                        <h1>Artificial intelligence predicts the price of Ethereum</h1>
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
                    </div>
                </article>
                <article className={`${styles["what-section"]} ${responsive["what-section"]}`}>
                    <img className={`${styles["ai-img"]} ${responsive["ai-img"]}`} src={ai} alt="ai" />
                    <div>
                        <h1>Artificial intelligence predicts the price of Ethereum</h1>
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
                    </div>
                </article>
            </section>
        </>
    );
}
export default Catalog;