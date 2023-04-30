import styles from "./styles/contact.module.css";
import responsive from "./styles/responsive.module.css";

const Contact = () => {
    return (
        <section className={`${styles["contact"]} ${responsive["contact"]}`}>
            <article className={`${styles["user-info"]} ${responsive["user-info"]}`}>
                <ul>
                    <li>Access the website's "Contact Us" page: This is usually found in the website's main navigation menu.</li>
                    <li>Select the preferred method of contact: The website may offer multiple ways to contact them, such as email, phone,or a contact form. The user should choose the method that is most convenient for them.</li>
                    <li>Fill out the contact form (if available): If the website provides a contact form, the user should fill out all the required fields, such as their name, email address, subject, and message. They may also be asked to provide additional information, such as their phone number or order number.</li>
                    <li>Write a message: If the website does not provide a contact form, the user should compose a message with their inquiry or concern. They should be clear and concise in their message, providing all the necessary details for the website to address their issue.</li>
                    <li>Submit the inquiry: Once the user has completed the contact form or composed their message, they should submit it to the website's customer support team. The website may provide an automated confirmation message to let the user know that their inquiry has been received.</li>
                    <li>Wait for a response: The website's customer support team will typically respond to the user's inquiry within a few business days. The user should keep an eye on their email inbox or other preferred method of contact for a response.</li>
                </ul>
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
            <article className={`${styles["info"]} ${responsive["info"]}`}>
                <h3>Phone:</h3>
                <p>+359 877040853</p>
                <p>Martin Sofroniev</p>
                <h3>Address:</h3>
                <p>Sofia, Mladost 4, bul. Hristo Botev 35, Str.</p>
            </article>
        </section>
    );
}
export default Contact;