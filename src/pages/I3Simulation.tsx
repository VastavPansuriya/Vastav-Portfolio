import { useEffect } from "react";
import ExperienceAccordion from "../components/experience/ExperienceAccordion";
import type { ExperienceItem } from "../components/experience/experience.types";

const i3simulation: ExperienceItem[] = [
    {
        type: "work",
        summary: (
            <div>
                <h1 style={{ color: "var(--accent)", marginBottom: "10px" }}>I3 SIMULATION</h1>
                <h4>As a Programmer at I3 Simulation, I developed <span className="highlight">VR-based training simulations</span>, designing and enhancing systems based on user data and feedback to improve training effectiveness.</h4>
                
                <div className="hero-poster-media">
                    <div className="hero-poster hero-poster">
                        <img src="/I3Simulation/InterviewSimulation.gif" alt="Interview Simulation System" />
                    </div>
                    <div>
                        <h3 style={{ color: "var(--accent)", marginBottom: "10px" }}>Interview Simulation System</h3>
                        <ul>
                            <li>Developed a <span className="highlight">JSON-based playback system</span> that simulates recorded user interactions in real-time</li>
                            <li>Created a <span className="highlight">modular data loading architecture</span> with UI controls for selecting specific interview sessions</li>
                            <li>Implemented a <span className="highlight">screen recording system using FFmpeg</span> for exporting simulation sessions to video format</li>
                        </ul>
                    </div>
                    
                    <div className="hero-poster hero-poster">
                        <img src="/I3Simulation/AEDSimulation.gif" alt="VR Medical Resuscitation Simulation" />
                    </div>
                    <div>
                        <h3 style={{ color: "var(--accent)", marginBottom: "10px" }}>VR Medical Resuscitation Training</h3>
                        <ul>
                            <li>Enhanced <span className="highlight">CPR mechanics, AED usage simulations, and rescue breathing functionality</span> through comprehensive refactoring and feature implementation</li>
                            <li>Improved <span className="highlight">tactile feedback systems</span> and <span className="highlight">medical procedure accuracy</span> in virtual training scenarios</li>
                            <li>Conducted <span className="highlight">quality assurance</span> by optimizing systems based on user feedback, resolving technical issues, and implementing analytics for performance tracking</li>
                        </ul>
                    </div>
                </div>
                
                <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>Summary</h2>
                <div className="hero-poster__content">
                    <h4>This position provided extensive experience with <span className="highlight">advanced programming techniques</span> including <span className="highlight">C# reflection</span>, <span className="highlight">ScriptableObject-based event systems</span>, and learning with <span className="highlight">Unreal Engine UI</span>, <span className="highlight">Blueprints</span>, and <span className="highlight">C++</span>.</h4>
                </div>
            </div>
        ),
    },
];

const I3Simulation = () => {
    // Auto-scroll to the section if coming from Experience page
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

        // Also check for hash in URL
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
                    {i3simulation.map((item, index) => (
                        <ExperienceAccordion key={index} data={item} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default I3Simulation;