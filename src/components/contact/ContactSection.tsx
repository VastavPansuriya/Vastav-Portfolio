import { GameController, GithubLogoIcon, LinkedinLogo, Mailbox, Storefront } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const ContactSection = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const data = new FormData(form);

        const res = await fetch("https://formspree.io/f/mykdgnlg", {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json",
            },
        });

        if (res.ok) {
            alert("Thanks! I’ll get back to you soon 👋");
            form.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    };
    return (
        <section className="contact-section" id="contact">
            <div className="contact-inner">

                {/* LEFT */}
                <div className="contact-left">
                    {/* <span className="contact-tag">Contact</span> */}

                    <h2 className="contact-title">Get in touch</h2>

                    <p className="contact-desc">
                        Have a project, question, or idea?
                        Let's build something clean, performant, and meaningful.
                    </p>

                    <div className="contact-cards">
                        <Link to=" https://mail.google.com/mail/?view=cm&fs=1&to=vastavpansuriya4444@gmail.com" target="_blank" rel="noopener noreferrer">
                            <div className="contact-card">
                                <Mailbox size={32} weight="fill" className="contact-icon" />
                                <p>vastavpansuriya4444@gmail.com</p>
                            </div>
                        </Link>

                        <Link to="https://www.linkedin.com/in/vastav-pansuriya-54234a24a/" target="_blank">
                            <div className="contact-card">
                                <LinkedinLogo size={32} weight="fill" className="contact-icon" />
                                <p>Vastav Pansuriya</p>
                            </div>
                        </Link>

                        <Link to="https://github.com/VastavPansuriya" target="_blank">
                            <div className="contact-card">
                                <GithubLogoIcon size={32} weight="fill" className="contact-icon" />
                                <p>Vastav Pansuriya</p>
                            </div>
                        </Link>

                        <Link to="https://vastav.itch.io/" target="_blank">
                            <div className="contact-card">
                                <div className="icon-stack contact-icon">
                                    <Storefront size={32} />
                                    <GameController
                                        size={10}
                                        weight="fill"
                                        className="icon-overlay "
                                    />
                                </div>
                                <p>/Itch.io</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="contact-right">
                    <form
                        className="contact-form"
                        name="contact"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="_subject" value="New contact message from {{name}}" />

                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <textarea name="message" placeholder="Message" rows={5} required />

                        <button type="submit">Send message</button>
                    </form>
                </div>
            </div>

            {/* soft fade into footer */}
            <div className="contact-fade" />
        </section >
    );
};

export default ContactSection;