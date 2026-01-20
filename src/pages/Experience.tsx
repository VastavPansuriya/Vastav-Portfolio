import SectionHeading from "../components/ui/SectionHeading";
import ExperienceAccordion from "../components/experience/ExperienceAccordion";
import type { ExperienceItem } from "../components/experience/experience.types";

const experienceData: ExperienceItem[] = [
    {
        type: "work",
        logo: "/rayll_studios_logo.jpg",
        company: "Studio XYZ",
        role: "Game Developer",
        start: "01-04-2024",
        end: "01-08-2026",
        summary:
            "Worked on gameplay systems, performance optimization, and tooling for large-scale projects.",
        projects: [
            {
                id: "1",
                title: "Fears to Fathom - Scratch Creek",
                image: "/fears-to-fathom.jpg",
                link: "/fears-to-fathom",
            },
            {
                id: "2",
                title: "F2F Android/iOS",
                image: "/projects/ai.jpg",
                link: "/f2f-mobile",
            },
            {
                id: "3",
                title: "Ununounced",
                image: "/projects/ai.jpg",
                link: "/ununounced",
            },
        ],
    },
];

const ithreesimulations: ExperienceItem[] = [
    {
        type: "work",
        logo: "/i3_simulations_logo.jpg",
        company: "i3 Simulations",
        role: "Game Developer",
        start: "01-07-2023",
        end: "30-04-2024",
        summary: (
            <div style={{ marginTop: "20px" }}>
                The i3 simulation may have been small, but it was an important experience for me.
                Working with the existing codebase was both challenging and rewarding.
                I focused on improving the system, adding new features, and fixing bugs.
                Throughout this process, I adapted{" "}
                <span className="highlight">
                    Unreal Engine
                </span>{" "}
                with {" "}<span className="highlight">c++</span>{" "} basics.

                <div className="experience-text">
                    <h4 className="contact-tag contact-icon">Replay System</h4>
                    <ul>
                        <li>
                            From <span className="highlight">JSON</span> recorded data to executing a recorded
                            video file with audio using <span className="highlight">ffmpeg.</span>
                        </li>
                        <li><span className="highlight">Replay System :</span></li>
                        <ul style={{ marginLeft: "20px" }}>
                            <li>
                                Developed an <span className="highlight">interview simulation</span> feature that records user progress
                                through <strong>JSON</strong> data analysis.
                            </li>
                            <li>
                                Built a system that <span className="highlight">reads JSON data and simulates the exact same interview.</span>
                            </li>
                            <li>
                                Added session video export using <span className="highlight">ffmpeg.</span>
                            </li>
                        </ul>
                    </ul>
                    <ul>
                        <li>
                            <span className="highlight">VR Medical Resuscitation:</span> Improved CPR mechanics, AED usage simulations, rescue breathing,
                            and tactile feedback accuracy for virtual medical training.
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span className="highlight">Quality Assurance</span> Optimised systems based on user feedback, fixed technical issues,
                            and implemented analytics for user performance tracking.
                        </li>
                    </ul>
                </div>
            </div>
        ),

    },
];

const marqueesolution: ExperienceItem[] = [
    {
        type: "work",
        logo: "/marqueesolution_logo.jpg",
        company: "Marquee Solution",
        role: "Game Developer",
        start: "01-07-2023",
        end: "30-04-2024",
        summary: (
            <div style={{ marginTop: "20px" }}>

                <div className="experience-text">
                    <ul>
                        <li>Developed and published <span className="highlight">5 mobile games</span> from concept to release.</li>

                        <li>I oversaw research, game development, quality assurance, Google Ads, analytics, and publishing for both Android and iOS platforms.</li>
                        <li><span className="highlight">Titles include:</span> Keyboard Clicker, Cannon Guardian, Ball Sort 3D, Stack Build, Crowd Clash.</li>
                        <li>Boll Short 3D: <span className="highlight">Crafted 100+ levels</span> levels using modular level generation with <span className="highlight">scriptable objects.</span>  </li>
                        <li>Keyboard Clicker: Contains a <span className="highlight"> Modular UI based on data.</span></li>
                        <li>Stack Build: Added a polished environment and game feel fundamentals </li>
                    </ul>
                </div>
            </div>
        ),

    },
];

const personalprojects: ExperienceItem[] = [
    {
        type: "personal",
        projects: [
            {
                id: "KitchenChaos",
                title: "Kitchen Chaos",
                image: "/kitchenchaos.png",
                link: "/kitchenchaos"
            },
            {
                id: "PawnGambit",
                title: "Pawn Gambit",
                image: "/pawngambit.png",
                link: "/pawngambit"
            },
            {
                id: "ZeroEffort",
                title: "Zero Effort",
                image: "public/zeroeffort.png",
                link: "/zeroeffort"
            },
            {
                id: "SmileSnake",
                title: "Smile Snake",
                image: "public/smilesnake.png",
                link: "/smilesnake"
            },
            {
                id: "PhotonPhobia",
                title: "Photon Phobia",
                image: "/photonphobia.png",
                link: "/photonphobia"
            },
            {
                id: "Hurrr",
                title: "Hurrr",
                image: "/hurrr.png",
                link: "/hurrr"
            },
        ]
    },
];

const unrealprojects: ExperienceItem[] = [
    {
        type: "work",
        company: "Unreal Projects",
        summary: (
            <div style={{ marginTop: "20px" }}>
                <p style={{ marginBottom: "20px" }}>I started learning Unreal Engine a few months ago (January '25) and have immersed myself in its intricacies. Unreal Engine stands out as the best tool I've worked with.</p>

                <div className="experience-text">
                    <ul>
                        <li><a href="https://youtu.be/dwh7H3VNuIw"><span className="highlight">Project Kix:</span></a>This was my second learning project. It involved Blueprint Classes, Animation Blueprint (ABP), Enhanced Input, and Basic UI.</li>
                        <li><a href="https://youtu.be/F858K5fkPn8"><span className="highlight">Platformer 2D</span></a> I explored Behaviour Trees for Enemy AI, Paper 2D, Niagara Effects, and other fundamental concepts.</li>
                        <li><a href="https://youtu.be/LB61xenId-M"><span className="highlight">Multiplayer CO-OP</span></a> Using both CPP and Blueprints, I developed a small project enabling interaction between two players and items within the game world.</li>
                        <li><a href="https://youtu.be/Yel6CGmNm1c"><span className="highlight">User Interface</span></a> This project covered Canvases, Layout Boxes, Groups, Images, Events, UI Animations, and other essential UI elements.</li>
                    </ul>
                </div>
            </div>
        ),

    },
];

const Experience = () => {
    return (

        <main style={{ paddingBottom: "40px" }}>
            <section id="experience">
                <SectionHeading title="Work experience" />
            </section>
            <section className="experience-hero">
                <div className="experience-section">
                    {experienceData.map((item) => (
                        <ExperienceAccordion key={item.company} data={item} />
                    ))}
                </div>
            </section>
            <section className="experience-hero">
                <div className="experience-section">
                    {ithreesimulations.map((item) => (
                        <ExperienceAccordion key={item.company} data={item} />
                    ))}
                </div>
            </section>
            <section className="experience-hero">
                <div className="experience-section">
                    {marqueesolution.map((item) => (
                        <ExperienceAccordion key={item.company} data={item} />
                    ))}
                </div>
            </section>
            <section id="experience">
                <SectionHeading title="PERSONAL PROJECTS" />
            </section>
            <section className="experience-hero">
                <div className="experience-section">
                    {personalprojects.map((item) => (
                        <ExperienceAccordion key={item.company} data={item} />
                    ))}
                </div>
            </section>
            <section className="experience-hero">
                <div className="experience-section">
                    {unrealprojects.map((item) => (
                        <ExperienceAccordion key={item.company} data={item} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Experience;
