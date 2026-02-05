import { useEffect } from "react";
import ExperienceAccordion from "../components/experience/ExperienceAccordion";
import type { ExperienceItem } from "../components/experience/experience.types";
import { Link } from "react-router-dom";

const fearstofathom: ExperienceItem[] = [
    {
        type: "work",
        summary: (
            <div>
                <h5><span className="highlight">PAGE IS UNDER CONSTRUCTION</span></h5>

                <h1 style={{ color: "var(--accent)", marginBottom: "10px" }}>FEARS TO FATHOM - SCRATCH CREEK</h1>
                <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>Dialogue System</h2>

                <div className="hero-poster hero-poster-media">
                    <img src="/RayllProject/DialogueSystem.jpg" alt="Dialogue System Interface" />
                    <img src="/RayllProject/Road96.jpg" alt="Road96 Inspired UI" />
                </div>

                <h4 style={{ color: "var(--accent)", marginBottom: "10px" }}>Goal</h4>
                <p>Create a <span className="highlight">Road96-inspired dialogue interface</span> with synchronized multiplayer interactions. The system required dynamic UI rendering on world-position-based 2D canvases that follow NPCs and other players.</p>

                <h4 style={{ color: "var(--accent)", marginTop: "0" }}>Execution</h4>
                <div className="experience-text">
                    <ul>
                        Developed and integrated two core systems: <span className="highlight">Custom UI Interaction System</span> and <span className="highlight">Dialogue System</span>.
                    </ul>

                    <div className="hero-poster-media">
                        <div className="hero-poster-media__image">
                            <img src="/RayllProject/Npc.jpg" alt="NPC Dialogue Interface" />
                        </div>

                        <div className="hero-poster__content">
                            <h3>Custom UI Interaction System</h3>
                            <ul>
                                <li>Implemented <span className="highlight">manual UI interaction handling</span> using ExecuteEvents.Execute for pointer events</li>
                                <li>Designed system to enable center-screen UI interactions while maintaining game immersion</li>
                                <li>Utilized <span className="highlight">Observer design pattern</span> for efficient script communication</li>
                                <li>Created <span className="highlight">client-server RPC methods</span> to synchronize UI interactions across all players</li>
                                <Link
                                    to="https://github.com/VastavPansuriya/Code-Samples/blob/main/OptionsCanvasManager.cs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="code-link"
                                >
                                    &lt;View Code&gt;
                                </Link>
                            </ul>
                        </div>

                        <div className="hero-poster__content">
                            <h3>Dialogue System (PixelCrushers)</h3>
                            <p>Extended the PixelCrushers Dialogue System for comprehensive narrative implementation:</p>
                            <ul>
                                <li>Built <span className="highlight">conversation flow control</span> helper methods invoked from LUA scripts</li>
                                <li>Implemented dynamic name rendering based on introduction states</li>
                                <li>Created <span className="highlight">isolated conversation zones</span> based on player proximity</li>
                                <li>Developed <span className="highlight">NPC base class system</span> integrating dialogue and navigation systems</li>
                            </ul>
                        </div>

                        <div className="hero-poster-media__image">
                            <img src="/RayllProject/PixelCrushertsDialogueSystem.png" alt="Dialogue System Architecture" />
                        </div>
                    </div>

                    <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>Networked Systems</h2>

                    <div className="hero-poster-media">
                        <div className="hero-poster-media__image">
                            <img src="/RayllProject/TrafficSystem.png" alt="Traffic System Visualization" />
                        </div>
                        <div className="hero-poster__content">
                            <h3>Networked Traffic System</h3>
                            <p>Built a <span className="highlight">server-authoritative synchronized traffic system</span> using custom spline-based movement.</p>
                            <ul>
                                <li>Created custom spline animator integrating with existing components</li>
                                <li>Implemented tweening for smooth vehicle acceleration and deceleration</li>
                                <li>Designed dynamic obstacle detection using <span className="highlight">abstraction layers</span></li>
                            </ul>
                            <Link
                                to="https://github.com/VastavPansuriya/Code-Samples/tree/main/TrafficSystemScripts"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="code-link"
                            >
                                &lt;View Code&gt;
                            </Link>
                        </div>

                        <div className="hero-poster-media__image">
                            <img src="/RayllProject/PedestrianSystem.png" alt="Pedestrian System Overview" />
                        </div>
                        <div className="hero-poster__content">
                            <h3>Pedestrian System</h3>
                            <p>Developed a <span className="highlight">networked waypoint system</span> for NPC navigation along randomized paths.</p>
                            <ul>
                                <li>Created editor scripting tools for waypoint management</li>
                                <li>Integrated pedestrian logic with <span className="highlight">Dialogue</span>, <span className="highlight">Waypoint</span>, and <span className="highlight">Interaction</span> systems</li>
                                <li>Applied <span className="highlight">OOP principles</span> and <span className="highlight">design patterns</span> for maintainable architecture</li>
                            </ul>
                            <Link
                                to="https://github.com/VastavPansuriya/Code-Samples/tree/main/WaypointSystem"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="code-link"
                            >
                                &lt;View Code&gt;
                            </Link>
                        </div>
                    </div>

                    <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>Additional Systems</h2>

                    <div className="hero-poster__content">
                        <p>Contributed to various game systems enhancing gameplay experience:</p>
                        <ul>
                            <li><span className="highlight">Networked Jumpscare System</span> with player isolation</li>
                            <li><span className="highlight">Interactive Bed System</span> with hiding mechanics</li>
                            <li><span className="highlight">Cinematic Camera Controls</span></li>
                            <li><span className="highlight">In-game Mini-Games</span></li>
                            <li><span className="highlight">NPC Door Navigation</span> with navmesh integration</li>
                            <li><span className="highlight">Visual Feedback Systems</span> for player interactions</li>
                            <li><span className="highlight">Code Refactoring</span> for improved performance</li>
                        </ul>
                    </div>

                    <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>Summary</h2>

                    <div className="hero-poster-media">
                        <div className="hero-poster-media__image">
                            <img src="/RayllProject/F2FScratchCreek.png" alt="Fears to Fathom Game Screenshot"/>
                        </div>
                        <div className="hero-poster__content">
                            <h3>This project provided extensive experience with diverse game systems and multiplayer architecture. I developed both technical skills and collaborative abilities through team coordination and iterative improvement.</h3>
                            <p>Key skills developed: <span className="highlight">C#, Multiplayer Networking, OOP Principles, Code Refactoring, Design Patterns, Project Management (Notion), UI/UX Design, Third-party Tool Integration (FinalIK, DialogueSystem, OdinInspector)</span></p>
                        </div>
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
                <h1 style={{ color: "var(--accent)", marginBottom: "10px" }}>FEARS TO FATHOM - ANDROID/IOS PORT</h1>

                <div className="hero-poster-media">
                    <div className="hero-poster-media__image">
                        <img src="/RayllProject/F2FHomeAlone.png" alt="Mobile Game Screenshot 1" />
                    </div>
                    <div className="hero-poster-media__image">
                        <img src="/RayllProject/F2FNoorwoodHitchhike.png" alt="Mobile Game Screenshot 2" />
                    </div>
                </div>

                <h4 style={{ color: "var(--accent)", marginBottom: "10px" }}>Goal</h4>
                <p>Port existing PC game systems, logic, and assets to <span className="highlight">both Android and iOS platforms</span> while maintaining performance and user experience.</p>

                <div className="hero-poster-media">
                    <div className="experience-text">
                        <h4 style={{ color: "var(--accent)", marginBottom: "10px" }}>Execution</h4>
                        <ul>
                            <li>Implemented <span className="highlight">abstract interaction system</span> to minimize Update() calls across interactable objects</li>
                            <li>Migrated all input handling to <span className="highlight">Unity's New Input System</span> for cross-platform support</li>
                            <li>Developed <span className="highlight">responsive UI</span> adaptable to various mobile screen sizes</li>
                            <li>Optimized asset sizes through texture and audio compression</li>
                            <li>Reduced draw calls through <span className="highlight">mesh combination techniques</span></li>
                            <li>Implemented light baking and lighting optimizations</li>
                            <li>Replaced Unity terrain with optimized baked meshes and textures</li>
                        </ul>
                    </div>

                    <div className="experience-text">
                        <h4 style={{ color: "var(--accent)", marginBottom: "10px" }}>Results</h4>
                        <ul>
                            <li><span className="highlight">Increased FPS from 7-10 to stable 30</span> on mid-range mobile devices</li>
                            <li><span className="highlight">Improved performance by 200%</span> through profiling and optimization</li>
                            <li><span className="highlight">Reduced game size by 80%</span> (2GB → 400MB)</li>
                            <li><span className="highlight">Decreased Update() calls by 60%</span> through system architecture improvements</li>
                        </ul>
                    </div>
                </div>

                <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>Summary</h2>
                <div className="hero-poster__content">
                    <h3>This project offered valuable mentorship opportunities while enhancing technical and soft skills. <span className="highlight">Improved team communication, project management, research methodologies, and collaborative problem-solving.</span></h3>
                    <p>Skills developed: <span className="highlight">Mobile Optimization, C#, OOP Principles, Code Refactoring, Design Patterns, Project Management</span>.</p>
                </div>
            </div>
        ),
    },
];

const unannounced: ExperienceItem[] = [
    {
        type: "work",
        summary: (
            <div>
                <h1 style={{ color: "var(--accent)", marginBottom: "10px" }}>UNANNOUNCED PROJECT</h1>

                <div className="hero-poster__content">
                    <h5>Note: Project details and visuals are confidential as this title has not been publicly announced. Below prototypes demonstrate implemented systems.</h5>
                    <h5><span className="highlight">All visuals shown are development prototypes</span></h5>
                </div>

                <div className="hero-poster-media">
                    <div className="experience-text">
                        <h3 style={{ color: "var(--accent)", marginBottom: "10px" }}>Interaction System</h3>
                        <ul>
                            <li>Architected <span className="highlight">unified interaction framework</span></li>
                            <li>Implemented single-input binding for all interactions to maintain focus on narrative experience</li>
                            <li>Created <span className="highlight">conflict-free pickup/interaction system</span> with intuitive controls</li>
                        </ul>
                    </div>

                    <div className="hero-poster hero-poster--dual">
                        <img src="/RayllProject/InteractionSystem.gif" alt="Interaction System Prototype" />
                    </div>


                    <div className="experience-text">
                        <h3 style={{ color: "var(--accent)", marginBottom: "10px" }}>Cooking System</h3>
                        <ul>
                            <li>Developed <span className="highlight">modular cooking system</span> with designer-configurable recipes</li>
                            <li>Utilized ScriptableObjects for data-driven recipe management</li>
                            <li>Applied <span className="highlight">OOP principles and design patterns</span> for extensible architecture</li>
                        </ul>
                    </div>
                    <div className="hero-poster hero-poster--dual">
                        <img src="/RayllProject/CookingSystem.gif" alt="Cooking System Prototype" />
                    </div>

                    <div className="experience-text">
                        <h3 style={{ color: "var(--accent)", marginBottom: "10px" }}>Cleaning System</h3>
                        <ul>
                            <li>Implemented <span className="highlight">custom shader-based interaction system</span></li>
                            <li>Integrated multiple existing systems to create cohesive gameplay mechanics</li>
                            <li>Utilized DOTween for smooth animation transitions</li>
                        </ul>
                    </div>

                    <div className="hero-poster hero-poster--dual">
                        <img src="/RayllProject/CleaningSystem.gif" alt="Cleaning System Prototype" />
                    </div>


                    <div className="experience-text">
                        <h3 style={{ color: "var(--accent)", marginBottom: "10px" }}>Additional Systems</h3>
                        <ul>
                            <li><span className="highlight">Intro/Subtitle System</span> for narrative delivery</li>
                            <li><span className="highlight">Sequence Manager</span> for cinematic gameplay moments</li>
                            <li>Implemented game introduction sequence</li>
                            <li>Enhanced <span className="highlight">Waypoint System</span> for NPC navigation</li>
                        </ul>
                    </div>
                    <div className="hero-poster hero-poster--dual">
                        <img src="/RayllProject/OtherSystems.gif" alt="Additional Systems Prototype" />
                    </div>
                </div>

                <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>Summary</h2>
                <div className="hero-poster__content">
                    <h4>This project provided excellent opportunities for collaborative system architecture design, problem-solving with team members, and working closely with designers to implement gameplay systems.</h4>
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
        <main style={{ paddingBottom: "40px" }}>
            <section className="experience-hero">
                <div className="experience-section">
                    {fearstofathom.map((item, index) => (
                        <ExperienceAccordion key={index} data={item} />
                    ))}
                </div>
            </section>

            <section className="experience-hero">
                <div className="experience-section">
                    {f2fAndroidiOS.map((item, index) => (
                        <ExperienceAccordion key={index} data={item} />
                    ))}
                </div>
            </section>

            <section className="experience-hero">
                <div className="experience-section">
                    {unannounced.map((item, index) => (
                        <ExperienceAccordion key={index} data={item} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default RayllStudio;