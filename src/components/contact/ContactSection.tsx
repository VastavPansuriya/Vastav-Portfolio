import { GithubLogoIcon, LinkedinLogo, Mailbox } from "@phosphor-icons/react";


const ContactSection = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-inner">

                {/* LEFT */}
                <div className="contact-left">
                    <span className="contact-tag">Contact</span>

                    <h2 className="contact-title">Get in touch</h2>

                    <p className="contact-desc">
                        Have a project, question, or idea?
                        Let’s build something clean, performant, and meaningful.
                    </p>

                    <div className="contact-cards">
                        <div className="contact-card">
                            <a href=" https://mail.google.com/mail/?view=cm&fs=1&to=vastavpansuriya4444@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Mailbox size={32} weight="fill" className="contact-icon" />
                                <p>vastavpansuriya4444@gmail.com</p>
                            </a>
                        </div>

                        <div className="contact-card">
                            <a href="https://www.linkedin.com/in/vastav-pansuriya-54234a24a/" target="_blank">
                                <LinkedinLogo size={32} weight="fill" className="contact-icon" />
                                <p>Vastav Pansuriya</p>
                            </a>
                        </div>

                        <div className="contact-card">
                            <a href="https://github.com/VastavPansuriya" target="_blank">
                                <GithubLogoIcon size={32} weight="fill" className="contact-icon" />
                                <p>Vastav Pansuriya</p>
                            </a>
                        </div>


                        <div className="contact-card">
                            <a href="https://www.linkedin.com/in/vastav-pansuriya-54234a24a/" target="_blank">
                                <span>Location</span>
                                <p>Vastav Pansuriya</p>
                            </a>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="contact-right">
                    <form
                        className="contact-form"
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                    >
                        {/* REQUIRED hidden fields */}
                        <input type="hidden" name="form-name" value="contact" />

                        <p hidden>
                            <label>
                                Don’t fill this out: <input name="bot-field" />
                            </label>
                        </p>

                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <textarea name="message" placeholder="Message" rows={5} required />

                        <button type="submit">Send message</button>
                        <input type="hidden" name="redirect" value="/thank-you" />
                    </form>

                </div>

            </div>

            {/* soft fade into footer */}
            <div className="contact-fade" />
        </section >
    );
};

export default ContactSection;
