import { CaretDoubleRight, GithubLogoIcon, LinkedinLogo, ReadCvLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <main>
            <section className="hero hero-grid">
                <div className="hero-left">
                    <h1 style={{ color: "var(--accent)" }}>
                        I'm Vastav
                    </h1>

                    <span style={{ color: "var(--text-muted)", marginBottom: "20px" }}>
                        Systems • Performance • Gameplay
                    </span>
                    <p style={{ marginTop: "8px", marginBottom: "15px" }}>
                        A game programmer with nearly <Link to="/experience"><span className="highlight"><u>four years of experience</u></span></Link> in the industry. I started my journey with <span className="highlight">Unity and C#</span>, without prioritising college, and that to build only the required knowledge. Over time, I improved a lot by learning a variety of coding and game development skills, such as Code architecture and principles, Unity engine relevant stuff, third-party tools and API implementations, system design and more.
                    </p>
                    
                    <Link className="resume-pdf" to="/Vastav-Pansuriya.pdf"
                        target="_blank"
                        rel="noopener noreferrer"><ReadCvLogo size={20} weight="fill" style={{ marginTop: "2px" }} /></Link>

                    <Link className="resume-pdf" to="https://www.linkedin.com/in/vastav-pansuriya-54234a24a/"
                        target="_blank"
                        rel="noopener noreferrer"><LinkedinLogo size={20} weight="fill" style={{ marginTop: "2px" }} /></Link>

                    <Link className="resume-pdf" to="https://github.com/VastavPansuriya"
                        target="_blank"
                        rel="noopener noreferrer"><GithubLogoIcon size={20} weight="fill" style={{ marginTop: "2px" }} /></Link>

                    <Link className="resume-pdf contact-icon" to="/experience">
                        <CaretDoubleRight size={20} weight="fill" style={{ marginTop: "2px" }} />
                    </Link>
                </div>

                <div className="hero-right">
                    <div
                        style={{
                            background: "var(--surface)",
                            border: "1px solid var(--border)",
                            padding: "20px",
                            marginTop: "24px",
                            borderRadius: "8px",
                        }}
                    >
                        <img
                            src="/avatar.png"
                            alt="Vastav avatar"
                            className="hero-avatar"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;