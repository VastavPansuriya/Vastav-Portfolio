import { useEffect } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import ExperienceAccordion from "../components/experience/ExperienceAccordion";
import type { ExperienceItem } from "../components/experience/experience.types";
import ProjectNavigator from "../components/ui/ProjectNavigator";
import { Link } from "react-router-dom";
import { CaretDoubleRight, GithubLogoIcon, LinkedinLogo, ReadCvLogo } from "@phosphor-icons/react";

const fearstofathom: ExperienceItem[] = [
    {
        type: "work",
        summary: (
            <div>
                <h4><span className="highlight">PAGE IS IN CONSTRUCTION</span></h4>

                <h1 style={{ color: "var(--accent)", marginBottom: "10px" }}>FEARS TO FATHOM - SCRATCH CREAK</h1>
                <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>DialogueSystem</h2>

                <div className="hero-poster hero-poster-media">
                    <img src="/RayllProject/DialogueSystem.jpg" alt="dialogue system" />
                    <img src="/RayllProject/Road96.jpg" alt="dialogue system alt" />
                </div>
                <h4 style={{ color: "var(--accent)", marginBottom: "10px" }}>Goal</h4>
                <p><span className="highlight">Road96</span> inspired UI with dialogue interaction that sync accross players. We needed option to be render on world position based 2D canvas that follow the npc or the other player</p>
                <h4 style={{ color: "var(--accent)", marginTop: "0" }}>Execution</h4>
                <div className="experience-text">
                    <ul>
                        <span className="highlight">Custom UI Interaction System</span>,
                        <span className="highlight">Dialogue System</span>, are the systems that I've used and created for archive this result.
                    </ul>
                    <div className="hero-poster-media">

                        <div className="hero-poster-media__image">
                            <img src="/RayllProject/Npc.jpg" alt="Dialogue system UI" />
                        </div>

                        <div className="hero-poster__content">
                            <h3>Custom UI Interaction System</h3>
                            <p></p>
                            <ul>
                                <li></li>
                                <li>Handled <span className="highlight">manual UI interaction</span> like pointer enter, pointer exit through ExecuteEvents.Execute, Allow user to interact with the UI that exist on center of the screen</li>
                                <li>Used <span className="highlight">Observer design pattern</span> for script communication</li>
                                <li>Using <span className="highlight">client and server based RPC methods</span> sync player UI interaction </li>
                                <a
                                    href="https://github.com/VastavPansuriya/Code-Samples/blob/main/OptionsCanvasManager.cs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="code-link"
                                >
                                    &lt;code&gt;
                                </a>

                            </ul>

                        </div>


                        <div className="hero-poster__content">
                            <h3>Dialogue System(PixelCrushers)</h3>
                            <p>We majorly used dialogue system for all kinds of dialogue and conversation for the story-telling. Below are the things that I've extended upon dialogue system. </p>
                            <ul>
                                <li><span className="highlight">Conversation and flow control</span> helper methods invoke call from LUA</li>
                                <li>Introduction based name rendering</li>
                                <li><span className="highlight">Isolated Conversation</span> based on player distance or the area</li>
                                <li>An <span className="highlight">NPC base</span> class system that work majorly with dialog system and navigation</li>
                            </ul>

                        </div>

                        <div className="hero-poster-media__image">
                            <img src="/RayllProject/PixelCrushertsDialogueSystem.png" alt="Dialogue system UI" />
                        </div>
                    </div>
                    <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>Other Networked Systems</h2>

                    <div className="hero-poster-media">

                        <div className="hero-poster-media__image">
                            <img src="/RayllProject/TrafficSystem.png" alt="Dialogue system UI" />
                        </div>
                        <div className="hero-poster__content">
                            <h3>Networked Traffic System</h3>
                            <p><span className="highlight">A syncronised server authoritative traffic system</span> that uses custom spline based movement.</p>
                            <ul>
                                <li>Custom spline animator work with  with other components.</li>
                                <li>Tweening for stop and start car movements.</li>
                                <li>Dynamic object detection with using <span className="highlight">abstraction</span> and <span className="highlight">layers</span>.</li>
                            </ul>
                            <a
                                href="https://github.com/VastavPansuriya/Code-Samples/tree/main/TrafficSystemScripts"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="code-link"
                            >
                                &lt;code&gt;
                            </a>

                        </div>
                        <div className="hero-poster-media__image">
                            <img src="/RayllProject/PedestrianSystem.png" alt="Dialogue system UI" />
                        </div>
                        <div className="hero-poster__content">
                            <h3>Pedestrian System</h3>
                            <p><span className="highlight">PedestrianNPC</span> that uses waypoint system to walk around a footpath based on randomized location and braches of path.</p>
                            <ul>
                                <li>Using editor scripting and online resources, crafted a <span className="highlight">networked waypoint system</span></li>
                                <li>Built a pedestrian logic that work with multiple system like <span className="highlight">Dialogue System</span>, <span className="highlight">Waypoint System</span>, <span className="highlight">Interaction System</span> </li>
                                <li>Skills include<span className="highlight">Editor Scripting</span>, <span className="highlight">Refactoring</span>, <span className="highlight">OOPs</span>, <span className="highlight">Design Patterns</span>.</li>
                            </ul>
                            <a
                                href="https://github.com/VastavPansuriya/Code-Samples/tree/main/WaypointSystem"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="code-link"
                            >
                                &lt;code&gt;
                            </a>

                        </div>
                    </div>
                    <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>Other Systems</h2>

                    <div className="hero-poster__content">
                        <p>Had a chanse to work on variety of small interactions and other skills that i can't showcase, but some of those mentioned below.</p>
                        <ul>
                            <li><span className="highlight">Networked Jumpscare</span>,
                                <span className="highlight">Interactable Bed with hiding machanics</span>,
                                <span className="highlight">Cinemetic look at</span>,
                                <span className="highlight">In game Mini-Game</span>,
                                <span className="highlight">Editor Scripting</span>,
                                <span className="highlight">Potty</span>,
                                <span className="highlight">NPC Door Navigation</span>,
                                <span className="highlight">Visual Cue</span>,
                                <span className="highlight">Refactoring</span>,
                            </li>
                            <li><span className="highlight">NPC Door</span>: Design a door system that worked with the navmesh link and allow NPC to use the door</li>
                            <li><span className="highlight">Potty</span>: A full interactive element of the game for improving game feel</li>
                            <li><span className="highlight">Jumpscare</span>: Had a chanse to work on a small sequence of jumpscare with maintaining isolation of different player. Improved variety of soft skills to improve game feel and workflow</li>
                        </ul>

                    </div>
                    <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>Summary</h2>

                    <div className="hero-poster-media">
                        <div className="hero-poster-media__image">
                            <img src="/RayllProject/F2FScratchCreek.png" alt="Dialogue system UI" />
                        </div>
                    </div>
                    <div className="hero-poster__content">
                        <h4>This project allowed me to work on variety of different system and logic. with that I've done personal development in verbal and nonverbal things. I improved on every espect and learned from my mistake wheather if it's programming or working with team</h4>
                        <p>Throwout the project these are the skills that I've improved or Learned: <span className="highlight">C#, Multiplayer, OOPs, Refactoring, Design Patterns, Notion, Photoshop(Basic), UX, Thirdparty tools(FinalIK, DialogueSystem, OdinInspector)</span></p>
                    </div>
                </div>
            </div>
        ),
    },
];

const f2fAndroidiOS: ExperienceItem[] = [
    {
        type: "work",
        summary: (
            <div>
                <h1 style={{ color: "var(--accent)", marginBottom: "10px" }}>FEARS TO FATHOM - ANDROID/IOS</h1>

                <div className="hero-poster-media">
                    <div className="hero-poster-media__image">
                        <img src="/RayllProject/F2FHomeAlone.png" alt="Dialogue system UI" />
                    </div>
                    <div className="hero-poster-media__image">
                        <img src="/RayllProject/F2FNoorwoodHitchhike.png" alt="Dialogue system UI" />
                    </div>
                </div>
                <h4 style={{ color: "var(--accent)", marginBottom: "10px" }}>Goal</h4>
                <p>Port all the logics, system, and graphics for the mobile versions for <span className="highlight"> both Android and iOS platform</span></p>
                <div className="hero-poster-media">

                    <div className="experience-text">
                        <h4 style={{ color: "var(--accent)", marginBottom: "10px" }}>Execution</h4>
                        <ul>
                            <li><span className="highlight">Implemented abstract interaction system</span>, allowing reduse update call for checking interaction in every single interactables</li>
                            <li><span className="highlight">Utilised Unity's new input system</span> to port all the inputs from pc to mobile</li>
                            <li>Implemented <span className="highlight">responsive UI</span> for the various types of mobile devices.</li>
                            <li>Compressed texture and audio size to increase performance and decrease game size</li>
                            <li><span className="highlight">Combined meshes to reduce the drawcall</span></li>
                            <li>Light-baking and liting optimization</li>
                            <li>Replace unity terrain with backed meshe and backed texture </li>
                        </ul>
                    </div>
                    <div className="experience-text">
                        <h4 style={{ color: "var(--accent)", marginBottom: "10px" }}>Results</h4>
                        <ul>
                            <li><span className="highlight">Boosted FPS from 7-10 to 30</span> on mid-range mobile devices by optimising game behaviours and assets.</li>
                            <li>Use of Unity Profiling and debugging tools<span className="highlight"> Increased performance by 200%.</span></li>
                            <li><span className="highlight">Reduced game size by 80% (2GB → 400MB)</span> through scene and asset optimisation.</li>
                            <li><span className="highlight">Decreasing update calls by 60%.</span></li>
                        </ul>
                    </div>
                </div>
                <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>Summary</h2>

                <div className="hero-poster-media">
                    <div className="hero-poster-media__image">
                        <img src="/RayllProject/F2FScratchCreek.png" alt="Dialogue system UI" />
                    </div>
                </div>
                <div className="hero-poster__content">
                    <h4>Had a great chance working with mentorship and learning various stuff. <span className="highlight">Improved team talks, Management, Researching and other soft skills during this.</span></h4>
                    <p>Throwout the project these are the skills that I've improved or Learned: <span className="highlight">Optimisation, C#, OOPs, Refactoring, Design Patterns, Notion</span>.</p>
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
                <h1 style={{ color: "var(--accent)", marginBottom: "10px" }}>FEARS TO FATHOM - CANCLED</h1>

                <div className="hero-poster__content">
                    <h4>I can't share the systems and stuff with the actual visuals as the project is not released or unannounced in public, but below are the things with raw visual that I've workerd on</h4>
                </div>
                <div className="hero-poster-media">

                    <div className="experience-text">
                        <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>Interaction System</h2>
                        <ul>
                            <li>Crafted <span className="highlight">Unified interaction system</span></li>
                            <li>A Single input binding use for all kind of interaction and most of the action in order to keep user experience simple and story focus.</li>
                            <li>Implemented a <span className="highlight"> conflict-free pickup/interaction system</span> with unified input bindings.</li>
                        </ul>
                    </div>
                    <div className="experience-text">
                        <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>Cocking System</h2>
                        <ul>
                            <li>A <span className="highlight">modular cooking system</span> that allow designer to create various types of recipe</li>
                            <li>Use of ScriptableObjects in order to manage the cooking data</li>
                            <li><span className="highlight">Heavy use of OOPs and Design patterns</span></li>
                        </ul>
                    </div>
                    <div className="experience-text">
                        <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>Cleaning System</h2>
                        <ul>
                            <li><span className="highlight">Custom Shader based interaction</span></li>
                            <li><span className="highlight">Binded various previously crafted systems</span> to archive required results</li>
                            <li>DOTween library used for smooth movement</li>
                        </ul>
                    </div>
                    <div className="experience-text">
                        <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>Other Stuff/System</h2>
                        <ul>
                            <li><span className="highlight">Intro/Sub System</span> to show small intros and subtitles</li>
                            <li><span className="highlight">Sequence manager</span> to manage various sequences of game</li>
                            <li>Chanse to work on intro sequence of the game</li>
                            <li><span className="highlight">Waypoint System</span></li>
                        </ul>
                    </div>
                </div>
                <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>Summary</h2>
                <div className="hero-poster__content">
                    <h4>Having an opportunity to work with team and discuss various ideas and approches was the pleasure experience. Realy had a good time solving problems, dicuss System Achitecture, Work with designers and other team members</h4>
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
        <main style={{ paddingBottom: "40px" }} >
            {/* <section className="experience-hero" id="f2f-pc">
                <SectionHeading title="Fears to Fathom - Scratch Creek" />
            </section> */}
            <section className="experience-hero">
                <div className="experience-section">
                    {fearstofathom.map((item, index) => (
                        <ExperienceAccordion key={index} data={item} />
                    ))}
                </div>
            </section>



            {/* <section className="experience-hero" id="f2f-mobile">
                <SectionHeading title="F2F Android/iOS" />
            </section> */}
            <section className="experience-hero">
                <div className="experience-section">
                    {f2fAndroidiOS.map((item, index) => (
                        <ExperienceAccordion key={index} data={item} />
                    ))}
                </div>
            </section>

            {/* <section className="experience-hero" id="f2f-unannounced">
                <SectionHeading title="Unannounced" />
            </section> */}
            <section className="experience-hero">
                <div className="experience-section">
                    {unannounced.map((item, index) => (
                        <ExperienceAccordion key={index} data={item} />
                    ))}
                </div>
            </section>
            {/* <ProjectNavigator /> */}
        </main >
    );
};

export default RayllStudio;