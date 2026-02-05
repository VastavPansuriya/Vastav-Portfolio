import { CaretDoubleRight, GithubLogoIcon, LinkedinLogo, ReadCvLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main>
            <section className="home hero" >
                <div className="home-card">
                    <h1 style={{ textAlign: "center", marginTop: "20px", marginBottom: "10px" }}>Game Programmer</h1>
                    <div className="home-right">
                        {/* <h1 style={{ color: "var(--accent)" }}> */}
                        {/* <span className="highlight" style={{
                                background: "#FAF3E1",
                                display: "inline-block",
                                padding: "2px 6px",
                                lineHeight: "1",
                            }}>Game Programmer</span> */}
                        {/* Game Programmer */}
                        {/* </h1--/> */}
                        <p style={{ marginTop: "0px", marginBottom: "0px" }}>
                            Wellcome to my portfolio, where you will able to find <Link to="/experience"><u><b>experiences</b></u></Link>, <Link to="/about"><u><b>about me</b></u></Link> and my <Link to="/experience"> <u><b>projects</b></u></Link>.
                        </p>
                        <p style={{ marginBottom: "0px" }}>
                            As title suggest I'm a programmer who love making games, systems and do gamejams.
                        </p>
                        <p style={{ marginBottom: "0px" }}>
                            My skills sand experience might encorage you to <Link to="/contact"><u><b>contact me</b></u></Link>
                        </p>
                        <h3 style={{ marginBottom: "1px", marginTop: "15px" }}>
                            Core Skills
                        </h3>
                        <p style={{ marginBottom: "10px" }}>
                            <span style={{ color: "var(--text-muted)", marginBottom: "20px" }}>
                                <b> Unity • C# • OOP • Netcode(Multiplayer Unity) • Design Patterns • System Architecture • Github • Debugging • EditorScripting</b>
                            </span>
                        </p>
                        <h3 style={{ marginBottom: "1px", marginTop: "15px" }}>
                            Other Skills
                        </h3>
                        <p style={{ marginBottom: "10px" }}>
                            <span style={{ color: "var(--text-muted)", marginBottom: "20px" }}>
                                <b> UNREAL • CPP • Optimization(Unity) • Unity Profiling • JSON • DialogueSystem(Pixel Crushers) • FEEL • NOTION • Photoshop</b>
                            </span>
                        </p>
                        <h3>Showreel</h3>
                        <div className="home-video">
                            <iframe
                                width="90%"
                                height="500px"
                                src="https://www.youtube.com/embed/hBH8SGsuhag"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>

                        </div>
                        <ul className="highlight" style={{ fontSize: "10px" }}>VIDEO WILL GET UPDATED SOON!</ul>
                        <div style={{ marginTop: "15px", marginBottom: "15px" }}>
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