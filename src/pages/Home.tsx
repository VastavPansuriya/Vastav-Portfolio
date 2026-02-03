import { CaretDoubleRight, GithubLogoIcon, LinkedinLogo, ReadCvLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main>
            <section className="home hero" >
                <div className="home-card">
                    <div className="home-right">
                        <h1 style={{ color: "var(--accent)" }}>
                            Hey! I'm Vastav,
                        </h1>
                        <p>
                            I'm VASTA, a professional with almost 3 years experience in Game
                            Development. With knowledge of Programming Patterns, Editor Scripting
                            API, JSON, and many others, I use best practices to work on
                            large-scale projects. I have game engine knowledge of Unity and Unreal
                            and programming knowledge of C# and C++.
                        </p>
                        <div style={{ marginTop: "15px" }}>
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
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;