import { useEffect } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import ExperienceAccordion from "../components/experience/ExperienceAccordion";
import type { ExperienceItem } from "../components/experience/experience.types";
import ProjectNavigator from "../components/ui/ProjectNavigator";

const fearstofathom: ExperienceItem[] = [
    {
        type: "work",
        summary: (
            <div>
                <h4 className="f2f-heading-h4">Fears to Fathom - Scratch Creek</h4>

                <div className="fears-to-fathom-poster">
                    <img src="/fears-to-fathom-poster.jpg" alt="fears-to-fathom" />
                </div>

                <div className="experience-text ml-20">
                    <ul>
                        <li>A <span className="highlight">multiplayer dialogue interaction system</span> that synced across all players.</li>

                        <li>A<span className="highlight"> networked traffic system</span> for making the environment feel alive.</li>

                        <li><span className="highlight">Reusable NPC core logic.</span></li>

                        <li><span className="highlight">A clicker mini game</span> inside the in-game phone system.</li>

                        <li><span className="highlight">Notification and Messaging System.</span></li>

                        <li>Other various types of small system changes and bug fixing.</li>
                    </ul>
                </div>
            </div>
        ),
        projects: [
            {
                id: "1",
                title: "Fears to Fathom - Scratch Creek",
                image: "/Gifs/RayllStudioGif.gif",
                link: "#f2f-pc",
            },
            {
                id: "2",
                title: "F2F Android/iOS",
                image: "/Gifs/EP2Gif.gif",
                link: "#f2f-mobile",
            },
            {
                id: "3",
                title: "Unannounced",
                image: "/Gifs/Unannounced.gif",
                link: "#f2f-unannounced",
            },
        ],
    },
];

const f2fAndroidiOS: ExperienceItem[] = [
    {
        type: "work",
        summary: (
            <div>
                <h4 className="f2f-heading-h4">F2F Android/iOS</h4>
                <div className="fears-to-fathom-poster">
                    <iframe src="https://www.youtube.com/embed/36ZKctUyRiU?si=PJcG9293V31fKK98" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <div className="experience-text ml-20">
                    <ul>
                        <li><span className="highlight">Boosted FPS from 7-10 to 30</span> on mid-range mobile devices by optimising game behaviours and assets.</li>

                        <li>Use of Unity Profiling and debugging tools<span className="highlight"> - Increased performance by 200%.
                            - Reduced game size by 80% (2GB → 400MB)</span> through scene and asset optimisation.</li>

                        <li>Implemented <span className="highlight">responsive UI</span> for the various types of mobile devices.</li>

                        <li>Utilised<span className="highlight"> editor scripting for systems</span> like the Pickup, Interaction, and Cleaning systems to enhance workflow and save hours for my teammates. </li>

                        <li>Designed an <span className="highlight">abstract interaction system for all interactable objects,</span> improving code reusability. </li>

                        <li>Refactored codebase using reusable architectures and Unity's New Input System, rebuilt the game interaction system using Unity's new Input System.</li>

                        <li><span className="highlight">Decreasing update calls by 60%.</span></li>
                        <li>Ported pc logics for mobile devices.</li>
                    </ul>
                </div>
            </div >
        ),
    },
];

const unannounced: ExperienceItem[] = [
    {
        type: "work",
        summary: (
            <div>
                <h4 className="f2f-heading-h4">Unannounced</h4>
                <div className="fears-to-fathom-poster">
                    <img src="/ununounced.png" alt="unannounced project" />
                </div>

                <div className="experience-text ml-20">
                    <ul>
                        <li>Created a<span className="highlight"> modular Cooking System using Scriptable Objects </span> to manage a variety of recipe types.</li>

                        <li>Implemented a <span className="highlight"> conflict-free pickup/interaction system</span> with unified input bindings.</li>

                        <li><span className="highlight">Cleaning System</span> with custom shaders.</li>
                    </ul>
                </div>
            </div>
        ),
    },
];

const RayllStudio = () => {
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
        <main style={{ paddingBottom: "40px" }} className="studio-xyz-section">
            <section className="experience-hero" id="f2f-pc">
                <SectionHeading title="Fears to Fathom - Scratch Creek" />
            </section>
            <section className="experience-hero">
                <div className="experience-section">
                    {fearstofathom.map((item, index) => (
                        <ExperienceAccordion key={index} data={item} />
                    ))}
                </div>
            </section>

            <section className="experience-hero" id="f2f-mobile">
                <SectionHeading title="F2F Android/iOS" />
            </section>
            <section className="experience-hero">
                <div className="experience-section">
                    {f2fAndroidiOS.map((item, index) => (
                        <ExperienceAccordion key={index} data={item} />
                    ))}
                </div>
            </section>

            <section className="experience-hero" id="f2f-unannounced">
                <SectionHeading title="Unannounced" />
            </section>
            <section className="experience-hero">
                <div className="experience-section">
                    {unannounced.map((item, index) => (
                        <ExperienceAccordion key={index} data={item} />
                    ))}
                </div>
            </section>

            <ProjectNavigator />
        </main >
    );
};

export default RayllStudio;