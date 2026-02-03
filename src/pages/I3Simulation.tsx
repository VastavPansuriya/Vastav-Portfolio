import { useEffect } from "react";
import ExperienceAccordion from "../components/experience/ExperienceAccordion";
import type { ExperienceItem } from "../components/experience/experience.types";
// import ProjectNavigator from "../components/ui/ProjectNavigator";
// import { Link } from "react-router-dom";
// import { CaretDoubleRight, GithubLogoIcon, LinkedinLogo, ReadCvLogo } from "@phosphor-icons/react";

const i3simulation: ExperienceItem[] = [
    {
        type: "work",
        summary: (
            <div>
                <h4><span className="highlight">PAGE IS IN CONSTRUCTION</span></h4>
                <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>I3Simulation</h2>
                <h4>At I3 Simulation with role of a Programmer, I was working on VR based simulations, where I improved and crafted new systems based on data and user feedbacks. </h4>
                <div className="hero-poster-media">
                    <div className="hero-poster hero-poster">
                        <img src="/I3Simulation/InterviewSimulation.gif" />
                    </div>
                    <div>
                        <h3 style={{ color: "var(--accent)", marginBottom: "10px" }}>Interview Simulation</h3>
                        <ul>
                            <li>Build a system that reads the user recorded JSON data and simulates the user actions in realtime</li>
                            <li>Crafted a modular Data Loading that loads all the recorded sessions with UI allowing user to select the specific interview session to simulate.</li>
                            <li>Build a screen recording system that uses the ffmpeg, allowing user to export the simulated videos into video format</li>
                        </ul>
                    </div>
                    <div className="hero-poster hero-poster">
                        <img src="/I3Simulation/AEDSimulation.gif" />
                    </div>
                    <p>
                        <ul>
                            <li> VR Medical Resuscitation: Improved CPR mechanics, AED usage simulations, and rescue breathing functionality with refactoring and added features. Improved tactile feedback and medical procedure accuracy in virtual training scenarios.</li>
                            <li> Quality Assurance: Optimised systems based on user feedback, solved technical issues, and implemented analytics to track user interactions and performance metrics.</li>
                        </ul>
                    </p>
                </div>
            </div >
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
            {/* <section className="experience-hero" id="f2f-pc">
                <SectionHeading title="I3 Simulations" />
            </section> */}
            <section className="experience-hero">
                <div className="experience-section">
                    {i3simulation.map((item, index) => (
                        <ExperienceAccordion key={index} data={item} />
                    ))}
                </div>
            </section>
            {/* <ProjectNavigator /> */}
        </main >
    );
};

export default I3Simulation;