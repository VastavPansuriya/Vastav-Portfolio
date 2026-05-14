import type { FormEvent } from "react";

const featuredProjects = [
    {
        title: "Fears to Fathom",
        subtitle: "Previous work at Rayll Studio",
        description:
            "Built and supported gameplay-facing systems for narrative horror experiences, including multiplayer interaction flow, dialogue integration, NPC behavior, traffic movement, and mobile porting support.",
        image: "/Gifs/RayllStudioGif.gif",
        skills: [
            "Unity",
            "C#",
            "Netcode for GameObjects",
            "RPC Sync",
            "PixelCrushers Dialogue System",
            "UI Interaction System",
            "Observer Pattern",
            "NPC Systems",
            "Traffic System",
            "Spline Movement"
        ]
    },
    {
        title: "Pawn Gambit",
        subtitle: "BYOG 2024 winner",
        description:
            "A chess-inspired puzzle game built for a game jam, focused on pawn evolution, movement rules, blockers, level progression, and a custom workflow for quickly building levels.",
        image: "/Personal/PawnGambit.gif",
        skills: [
            "Unity",
            "C#",
            "Puzzle Systems",
            "OOP",
            "Design Patterns",
            "Custom Level Editor",
            "Editor Scripting",
            "Level Design Tools",
            "ScriptableObjects"
        ]
    },
    {
        title: "Unity Tools & Systems",
        subtitle: "Personal tooling work",
        description:
            "Custom Unity workflows and editor tools made to speed up production, organize project data, improve scene work, and reduce repeated manual setup.",
        image: "/Gifs/UnrealLikeDatatable.gif",
        skills: [
            "Unity Editor Scripting",
            "C#",
            "Custom Editor Windows",
            "ScriptableObject Workflows",
            "Scene View Tools",
            "Workflow UX",
            "Data-Driven Tools"
        ]
    }
];

const coreSkills = [
    "Unity",
    "C#",
    "Gameplay Systems",
    "System Architecture",
    "OOP",
    "Design Patterns",
    "Netcode for GameObjects",
    "RPC Synchronization",
    "Editor Scripting",
    "ScriptableObjects",
    "Performance Optimization",
    "Debugging"
];

const productionSkills = [
    "Mobile Porting",
    "Unity Profiler",
    "New Input System",
    "UI Systems",
    "PixelCrushers Dialogue System",
    "DOTween",
    "Cinemachine",
    "JSON Workflows",
    "Git / GitHub",
    "Notion",
    "Firebase",
    "Ad SDK Integration"
];

const experienceItems = [
    {
        company: "Rayll Studio",
        role: "Unity Gameplay Programmer",
        period: "Previous experience",
        description:
            "Worked on Fears to Fathom related systems, multiplayer gameplay interactions, dialogue implementation, NPC systems, mobile porting, and gameplay polish."
    },
    {
        company: "Marquee Solution",
        role: "Full Stack Game Programmer",
        period: "Previous experience",
        description:
            "Built hyper-casual mobile games from scratch, integrated ads and analytics, worked on gameplay, UI, optimization, and Android/iOS publishing tasks."
    },
    {
        company: "Personal Projects",
        role: "Solo / Team Developer",
        period: "Ongoing learning and portfolio work",
        description:
            "Created game jam projects, puzzle mechanics, custom tools, gameplay prototypes, and Unity systems focused on clean architecture and polish."
    }
];

const Home = () => {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const data = new FormData(form);

        const res = await fetch("https://formspree.io/f/mykdgnlg", {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json"
            }
        });

        if (res.ok) {
            alert("Thanks! I will get back to you soon.");
            form.reset();
            return;
        }

        alert("Something went wrong. Please try again.");
    };

    return (
        <main className="vp-page-shell">
            <section id="home" className="vp-hero-section">
                <div className="vp-hero-copy">
                    <div className="vp-eyebrow">
                        <span className="vp-status-dot" />
                        Available for Unity gameplay work
                    </div>

                    <h1>
                        Unity Gameplay Programmer building clean, playable systems.
                    </h1>

                    <p className="vp-hero-text">
                        I am Vastav Pansuriya, a Unity programmer focused on gameplay systems, multiplayer interactions, tools, optimization, and production-ready game features.
                    </p>

                    <div className="vp-hero-actions">
                        <a className="vp-button vp-button-primary" href="#projects">
                            View Projects
                        </a>
                        <a className="vp-button" href="mailto:vastavpansuriya4444@gmail.com">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="vp-hero-board" aria-label="Portfolio summary board">
                    <div className="vp-board-card vp-board-card-large">
                        <span className="vp-card-kicker">Focus</span>
                        <h2>Gameplay systems that feel simple to play and clean to maintain.</h2>
                        <p>
                            Player interactions, dialogue flow, networked systems, mobile performance, editor tools, and polished Unity workflows.
                        </p>
                    </div>

                    <div className="vp-board-card vp-board-card-small">
                        <span className="vp-card-kicker">Core Stack</span>
                        <p>Unity, C#, Netcode, Editor Scripting, ScriptableObjects, UI Systems, Optimization.</p>
                    </div>

                    <div className="vp-sticky-note">
                        <strong>Simple goal</strong>
                        <span>Make the game feel better and the code easier to work with.</span>
                    </div>
                </div>
            </section>

            <section id="projects" className="vp-section">
                <div className="vp-section-heading">
                    <span>Selected work</span>
                    <h2>Projects and systems</h2>
                    <p>
                        A focused look at the kind of gameplay, tooling, multiplayer, and production work I have done.
                    </p>
                </div>

                <div className="vp-project-grid">
                    {featuredProjects.map((project) => (
                        <article className="vp-project-card" key={project.title}>
                            <div className="vp-project-media">
                                <img src={project.image} alt={project.title} />
                            </div>

                            <div className="vp-project-content">
                                <p className="vp-project-subtitle">{project.subtitle}</p>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="vp-tag-list">
                                    {project.skills.map((skill) => (
                                        <span className="vp-tag" key={`${project.title}-${skill}`}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section id="skills" className="vp-section">
                <div className="vp-section-heading">
                    <span>Skills</span>
                    <h2>What I work with</h2>
                    <p>
                        Focused on practical Unity programming skills that matter in production, not random keywords.
                    </p>
                </div>

                <div className="vp-skills-layout">
                    <article className="vp-skill-panel">
                        <h3>Core skills</h3>
                        <div className="vp-skill-list">
                            {coreSkills.map((skill) => (
                                <span className="vp-skill-pill" key={skill}>{skill}</span>
                            ))}
                        </div>
                    </article>

                    <article className="vp-skill-panel">
                        <h3>Production skills</h3>
                        <div className="vp-skill-list">
                            {productionSkills.map((skill) => (
                                <span className="vp-skill-pill" key={skill}>{skill}</span>
                            ))}
                        </div>
                    </article>
                </div>
            </section>

            <section id="experience" className="vp-section">
                <div className="vp-section-heading">
                    <span>Experience</span>
                    <h2>Previous roles and project work</h2>
                    <p>
                        My experience covers shipped horror games, mobile ports, hyper-casual projects, game jam work, and custom Unity tooling.
                    </p>
                </div>

                <div className="vp-experience-list">
                    {experienceItems.map((item) => (
                        <article className="vp-experience-card" key={item.company}>
                            <div>
                                <span>{item.period}</span>
                                <h3>{item.company}</h3>
                                <p className="vp-experience-role">{item.role}</p>
                            </div>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="about" className="vp-section">
                <div className="vp-about-card">
                    <div className="vp-about-image">
                        <img src="/avatar.png" alt="Vastav Pansuriya avatar" />
                    </div>

                    <div className="vp-about-content">
                        <span>About me</span>
                        <h2>I like building systems players do not notice, but always feel.</h2>
                        <p>
                            I started by learning Unity and C# and kept growing into gameplay programming, tools, mobile optimization, multiplayer systems, and game architecture. I care about writing clean code, understanding the system deeply, and making gameplay feel polished.
                        </p>
                        <p>
                            Outside work, I enjoy story-driven games, platformers, natural places, drawing, music, and learning advanced mathematics.
                        </p>
                    </div>
                </div>
            </section>

            <section id="contact" className="vp-section">
                <div className="vp-contact-card">
                    <div className="vp-contact-copy">
                        <span>Contact</span>
                        <h2>Let us build something clean and playable.</h2>
                        <p>
                            Have a Unity project, gameplay system, prototype, or tool idea? Send me a message.
                        </p>

                        <div className="vp-contact-links">
                            <a href="mailto:vastavpansuriya4444@gmail.com">Email</a>
                            <a href="https://www.linkedin.com/in/vastav-pansuriya-54234a24a/" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a href="https://github.com/VastavPansuriya" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="https://vastav.itch.io/" target="_blank" rel="noreferrer">Itch.io</a>
                        </div>
                    </div>

                    <form className="vp-contact-form" onSubmit={handleSubmit}>
                        <input type="hidden" name="_subject" value="New contact message from portfolio" />
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <textarea name="message" placeholder="Message" rows={5} required />
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Home;
