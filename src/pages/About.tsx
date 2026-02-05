import { CaretDoubleRight, GithubLogoIcon, LinkedinLogo, ReadCvLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <main>
            <section className="home hero" >
                <div className="home-card">
                    <div className="hero-poster hero-poster--dual">
                        <div>
                            <h1 style={{ color: "var(--accent)" }}>
                                I'm Vastav
                            </h1>
                            <p style={{ marginTop: "8px", marginBottom: "15px" }}>
                                A game programmer with 4+ years of <Link to="/experience"><span className="highlight"><u>experience</u></span></Link> in the industry.
                                 I started my journey with learning<span className="highlight">Unity and C#</span> while doing collage externally.
                                  By the collage fineshes I have gained variety of experiences working with Unity and C#.
                                   Over time, I improved a lot by learning game development equivalent, such as OOPS, code architecture and principles, Unity engine relevant stuff, third-party tools and API implementations, system design and more.
                            </p>

                            <p style={{ marginTop: "8px", marginBottom: "15px" }}>
                                Beyond my work life, I love to visit natural places, Play story, 
                                FPS, and platformer games. I would love to draw, play music, and learn strong maths.
                            </p>
                            <p style={{ marginTop: "8px", marginBottom: "15px" }}>
                                <b>Games that I liked</b>
                            </p>
                            <p>JUSANT | PLANET OF LANA | CELESTE</p>
                            <p style={{ marginTop: "8px", marginBottom: "15px" }}>
                                <b>Movies that I liked</b>
                            </p>
                            <p> GRAN TURISMO | MEET JOE BLACK | WHIPLASH</p>
                            <Link className="clickable-buttons" to="/Vastav-Pansuriya.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><ReadCvLogo size={20} weight="fill" style={{ marginTop: "2px" }} /></Link>

                            <Link className="clickable-buttons" to="https://www.linkedin.com/in/vastav-pansuriya-54234a24a/"
                                target="_blank"
                                rel="noopener noreferrer"><LinkedinLogo size={20} weight="fill" style={{ marginTop: "2px" }} /></Link>

                            <Link className="clickable-buttons" to="https://github.com/VastavPansuriya"
                                target="_blank"
                                rel="noopener noreferrer"><GithubLogoIcon size={20} weight="fill" style={{ marginTop: "2px" }} /></Link>

                            <Link className="clickable-buttons contact-icon" to="/experience">
                                <CaretDoubleRight size={20} weight="fill" style={{ marginTop: "2px" }} />
                            </Link>
                        </div>
                        <div className="hero-right">
                            <div>
                                <img src="/avatar.png" className="hero-avatar" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* <section className="hero hero-grid">
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

                    <Link className="clickable-buttons" to="/Vastav-Pansuriya.pdf"
                        target="_blank"
                        rel="noopener noreferrer"><ReadCvLogo size={20} weight="fill" style={{ marginTop: "2px" }} /></Link>

                    <Link className="clickable-buttons" to="https://www.linkedin.com/in/vastav-pansuriya-54234a24a/"
                        target="_blank"
                        rel="noopener noreferrer"><LinkedinLogo size={20} weight="fill" style={{ marginTop: "2px" }} /></Link>

                    <Link className="clickable-buttons" to="https://github.com/VastavPansuriya"
                        target="_blank"
                        rel="noopener noreferrer"><GithubLogoIcon size={20} weight="fill" style={{ marginTop: "2px" }} /></Link>

                    <Link className="clickable-buttons contact-icon" to="/experience">
                        <CaretDoubleRight size={20} weight="fill" style={{ marginTop: "2px" }} />
                    </Link>
                </div>

                <div className="hero-right">
                    <div>
                        <img src="/avatar.png" className="hero-avatar"/>
                    </div>
                </div>
            </section> */}
        </main>
    );
};

export default About;