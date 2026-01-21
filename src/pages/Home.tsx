import { CaretDoubleRight, GithubLogoIcon, LinkedinLogo, ReadCvLogo } from "@phosphor-icons/react";

const Home = () => {
    return (

        <main>
            <section className="home hero" >
                <div className="home-card">
                    {/* <div className="home-grid">
                        <div className="home-left">
                            <img
                                src="/avatar.png"
                                alt="Vastav avatar"
                                className="home-avatar"
                            />
                        </div>
                    </div> */}


                    {/* RIGHT – Text */}
                    <div className="home-right">
                        <h1 style={{ color: "var(--accent)" }}>
                            Hey! I’m Vastav,
                        </h1>
                        <p>
                            I'm VASTA, a professional with almost 3 years experience in Game
                            Development. With knowledge of Programming Patterns, Editor Scripting
                            API, JSON, and many others, I use best practices to work on
                            large-scale projects. I have game engine knowledge of Unity and Unreal
                            and programming knowledge of C# and C++.
                        </p>
                        <div style={{ marginTop: "15px" }}>
                            <a className="resume-pdf" href="/Vastav-CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"><ReadCvLogo size={20} weight="fill" style={{ marginTop: "2px" }} /></a>

                            <a className="resume-pdf" href="https://www.linkedin.com/in/vastav-pansuriya-54234a24a/"
                                target="_blank"
                                rel="noopener noreferrer"><LinkedinLogo size={20} weight="fill" style={{ marginTop: "2px" }} /></a>

                            <a className="resume-pdf" href="https://github.com/VastavPansuriya"
                                target="_blank"
                                rel="noopener noreferrer"><GithubLogoIcon size={20} weight="fill" style={{ marginTop: "2px" }} /></a>

                            <a className="resume-pdf contact-icon" href="/about"><CaretDoubleRight size={20} weight="fill" style={{ marginTop: "2px" }} /></a>

                        </div>
                    </div>
                </div>
            </section>


        </main >
    );
};

export default Home;
