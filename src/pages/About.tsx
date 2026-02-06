import { CaretDoubleRight, GithubLogoIcon, LinkedinLogo, ReadCvLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <main>
            <section className="home hero">
                <div className="home-card">
                    <div className="hero-poster hero-poster--dual">
                        <div>
                            <h1 style={{ color: "var(--accent)" }}>
                                I'm Vastav
                            </h1>
                            <p style={{ marginTop: "8px", marginBottom: "15px" }}>
                                A Game Programmer with 4+ years of <Link to="/experience"><span className="highlight"><u>experience</u></span></Link> in the industry.
                                I started my journey by learning <span className="highlight">Unity and C#</span> while attending college externally.
                                By the time I finished college, I had gained a variety of experience working with Unity and C#.
                                Over time, I improved significantly by learning game development fundamentals such as OOP, code architecture and principles, Unity engine specifics, third-party tools and API implementations, system design, and more.
                            </p>

                            <p style={{ marginTop: "8px", marginBottom: "15px" }}>
                                Beyond my work life, I love visiting natural places, playing story-driven,
                                FPS, and platformer games. I also enjoy drawing, playing music, and learning advanced mathematics.
                            </p>
                            <p style={{ marginTop: "8px", marginBottom: "15px" }}>
                                <b>Games that I like</b>
                            </p>
                            <p>JUSANT | PLANET OF LANA | CELESTE</p>
                            <p style={{ marginTop: "8px", marginBottom: "15px" }}>
                                <b>Movies that I like</b>
                            </p>
                            <p>GRAN TURISMO | MEET JOE BLACK | WHIPLASH</p>
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
                                <img src="/avatar.png" className="hero-avatar" alt="Avatar" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;