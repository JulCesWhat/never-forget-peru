import React, { useState } from "react";

import "./Contact.scss"

const emailEndpoint = "https://us-central1-never-forget-peru.cloudfunctions.net/email";

function Contact() {
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        try {
            let response = await fetch(emailEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(details),
            });

            await response.json();
            setSubmitted(true)
        } catch (error) {
            alert(error);
            setSubmitted(false);
        } finally {
            setSubmitting(false)
        }
    };

    return (
        <section>
            <div className="form-container">
                <div className="contact-form-item">
                    {
                        submitted ? (
                            <div className="thanks-result">
                                <div>Muchas gracias!</div>
                                <div>Estaremos en contacto pronto.</div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name">Nombre:</label>
                                    <input type="text" id="name" required />
                                </div>
                                <div>
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" required />
                                </div>
                                <div>
                                    <label htmlFor="message">Mensaje:</label>
                                    <textarea id="message" required />
                                </div>
                                <button type="submit" disabled={submitting}>Enviar</button>
                            </form>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default Contact;