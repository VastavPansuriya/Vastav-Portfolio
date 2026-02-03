import { useEffect } from "react";
import SectionHeading from "../components/ui/SectionHeading";
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
                <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>Marquee Solution</h2>
                <h4>Worked as full stack game programmer, responsible for building a game from strach, Add monitization SDK, Upload for both Android and iOS.</h4>
                <div className="hero-poster-media">
                    <div className="hero-poster hero-poster--dual">
                        <img src="/Gifs/KeyboardClicker.gif" />
                        <img src="/Gifs/StackBuild.gif" />
                    </div>
                    <div className="hero-poster hero-poster--dual">
                        <img src="/Gifs/BallSorting3d.gif" />
                        <img src="/Gifs/CannonGardian.gif" />
                    </div>
                </div>

                <div>
                    {/* <h3 style={{ color: "var(--accent)", marginBottom: "10px" }}>Interview Simulation</h3> */}
                    <p>
                        <ul>
                            <li> Developed and published 5 mobile games from concept to release.</li>
                            <li> I oversaw research, game development, quality assurance, Google Ads, analytics, and publishing for both Android and iOS platforms.</li>
                            <li> Titles include: Keyboard Clicker, Cannon Guardian, Ball Sort 3D, Stack Build, Crowd Clash.</li>
                            <li> Boll Short 3D: Crafted 100+ levels using modular level generation with scriptable objects.</li>
                            <li> Keyboard Clicker: Contains a  Modular UI based on data.</li>
                            <li> Stack Build: Added a polished environment and game feel fundamentals</li>
                        </ul>
                    </p>
                </div>
            </div >
        ),
    },
];


const Marquee = () => {
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

export default Marquee;