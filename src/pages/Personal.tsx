import { useEffect } from "react";
import ExperienceAccordion from "../components/experience/ExperienceAccordion";
import type { ExperienceItem } from "../components/experience/experience.types";

const personalProjects: ExperienceItem[] = [
    {
        type: "work",
        summary: (
            <div>
                <h4><span className="highlight">PAGE IS UNDER CONSTRUCTION</span></h4>
                <h1 style={{ color: "var(--accent)", marginBottom: "10px" }}>PERSONAL PROJECTS</h1>

                <div className="hero-poster hero-poster--dual">
                    <div className="experience-text">
                        <h3 style={{ color: "var(--accent)", marginBottom: "10px" }}>Pawn Gambit (BYOG 2024 Winner)</h3>
                        <div>
                            <div className="hero-poster hero-poster--dual">
                                <img src="/Personal/PawnGambit.gif" alt="Pawn Gambit Gameplay 1" />
                                <img src="/Personal/PawnGambit2.gif" alt="Pawn Gambit Gameplay 2" />
                            </div>
                            <div className="hero-poster__content">
                                <ul>
                                    <li>Led my team to <span className="highlight">first place victory</span> in the competition</li>
                                    <li>Developed a <span className="highlight">custom level editor</span> using editor scripting tools</li>
                                    <li>Implemented extensive use of <span className="highlight">OOP principles</span> and <span className="highlight">programming patterns</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="experience-text">
                        <h3 style={{ color: "var(--accent)", marginBottom: "10px" }}>Zero Efforts</h3>
                        <div className="hero-poster hero-poster--dual">
                            <img src="/Personal/ZeroEfforts.gif" alt="Zero Efforts Gameplay 1" />
                            <img src="/Personal/ZeroEfforts2.gif" alt="Zero Efforts Gameplay 2" />
                        </div>
                        <div className="hero-poster__content">
                            <ul>
                                <li>Collaborative team project developed during Outscal program</li>
                                <li>Applied <span className="highlight">comprehensive game development knowledge</span> acquired throughout training</li>
                                <li>Implemented <span className="highlight">programming patterns</span>: <span className="highlight">Observer</span>, <span className="highlight">Single Responsibility Principle (SRP)</span>, <span className="highlight">Singleton</span>, <span className="highlight">Finite State Machine</span></li>
                                <li>Additional skills: <span className="highlight">Unity Cinemachine</span> and <span className="highlight">Timeline</span>, <span className="highlight">third-party tool integration</span>, <span className="highlight">custom rendering techniques</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="experience-text">
                        <h3 style={{ color: "var(--accent)", marginBottom: "10px" }}>Hurr</h3>
                        <div className="hero-poster hero-poster--dual">
                            <img src="/Personal/Hurr.gif" alt="Hurr Gameplay 1" />
                            <img src="/Personal/Hurr2.gif" alt="Hurr Gameplay 2" />
                        </div>
                        <div className="hero-poster__content">
                            <ul>
                                <li>Utilized <span className="highlight">Object-Oriented Programming (OOP)</span> principles for system architecture</li>
                                <li>Implemented <span className="highlight">object pooling techniques</span> for performance optimization</li>
                                <li>Applied <span className="highlight">game polishing techniques</span> to enhance player experience</li>
                                <li>Developed UI systems using <span className="highlight">UI Toolkit</span></li>
                                <li>Created visual effects with <span className="highlight">Particle System</span> integration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
];

const Personal = () => {
    useEffect(() => {
        const scrollToSection = localStorage.getItem('scrollToSection');
        if (scrollToSection) {
            const element = document.getElementById(scrollToSection);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
            localStorage.removeItem('scrollToSection');
        }

        const hash = window.location.hash;
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, []);

    return (
        <main style={{ paddingBottom: "40px" }}>
            <section className="experience-hero">
                <div className="experience-section">
                    {personalProjects.map((item, index) => (
                        <ExperienceAccordion key={index} data={item} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Personal;