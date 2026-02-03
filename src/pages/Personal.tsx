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
                <h1 style={{ color: "var(--accent)", marginBottom: "10px" }}>PersonalProjects</h1>
                <h4>These are some of my personal works</h4>
                <div className="hero-poster-media">
                    <div className="hero-poster hero-poster">
                        <img src="/Personal/WhereDidMyHairGo.gif" />
                    </div>
                    <div className="hero-poster hero-poster">
                        <img src="/Personal/WhereDidMyHairGo2.gif" />
                    </div>
                    <div className="hero-poster hero-poster">
                        <img src="/Personal/ZeroEfforts.gif" />
                    </div>
                    <div className="hero-poster hero-poster">
                        <img src="/Personal/ZeroEfforts2.gif" />
                    </div>
                     <div className="hero-poster hero-poster">
                        <img src="/Personal/PawnGambit.gif" />
                    </div>
                    <div className="hero-poster hero-poster">
                        <img src="/Personal/PawnGambit2.gif" />
                    </div>
                    <div className="hero-poster hero-poster">
                        <img src="/Personal/Hurr.gif" />
                    </div>
                    <div className="hero-poster hero-poster">
                        <img src="/Personal/Hurr2.gif" />
                    </div>
                </div>
            </div >
        ),
    },
];


const Personal = () => {
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

export default Personal;