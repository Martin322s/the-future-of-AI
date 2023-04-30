import styles from "./styles/contact.module.css";
import responsive from "./styles/responsive.module.css";

const Contact = () => {
    return (
        <section className={`${styles["contact"]}`}>
            <article className={`${styles["info"]}`}>
                <h3>Phone:</h3>
                <p>+359 877040853</p>
                <p>Martin Sofroniev</p>
                <h3>Address:</h3>
                <p>Sofia, Mladost 4, bul. Hristo Botev 35, Str.</p>
            </article>
            <article>
                <h1 className={`${styles["contact-heading"]} ${responsive["contact-heading"]}`}>Contact us</h1>
                <form className={`${styles["contact-form"]} ${responsive["contact-form"]}`}>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="topic">Topic: </label>
                        <input type="text" id="topic" name="topic" />
                    </div>
                    <label htmlFor="email">Message: </label>
                    <div>
                        <textarea col="25" rows="5"></textarea>
                    </div>
                    <input type="submit" value="Send message" />
                </form>
            </article>
        </section>
    );
}
export default Contact;