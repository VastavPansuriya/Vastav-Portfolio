import type { FormEvent } from "react";

const featuredProjects = [
    {
        number: "01",
        title: "Fears to Fathom",
        description:
            "Narrative horror gameplay work with interaction systems, multiplayer features, mobile porting, and production support.",
        image: "/Gifs/RayllStudioGif.gif",
        tags: ["Unity", "C#", "Gameplay"],
        href: "#work",
    },
    {
        number: "02",
        title: "Pawn Gambit",
        description:
            "A chess-inspired puzzle project with custom mechanics, level logic, and editor-focused workflow.",
        image: "/Gifs/PawnGambit.gif",
        tags: ["Puzzle", "Tools", "Systems"],
        href: "https://vastav.itch.io/pawn-gambit",
    },
    {
        number: "03",
        title: "Mobile Game Projects",
        description:
            "Cross-platform mobile game work focused on responsive UI, optimization, publishing, and gameplay loops.",
        image: "/Gifs/KeyboardClicker.gif",
        tags: ["Mobile", "Optimization", "UI"],
        href: "#work",
    },
];

const workItems = [
    {
        company: "Rayll Studio",
        role: "Unity Gameplay Programmer",
        period: "2024 - 2026",
        summary:
            "Worked on Fears to Fathom projects, multiplayer gameplay systems, dialogue/UI interaction systems, networked traffic, mobile ports, and production gameplay features.",
        points: [
            "Built Road96-inspired dialogue UI and custom interaction systems.",
            "Worked with Netcode, RPCs, PixelCrushers Dialogue System, DOTween, FinalIK, and Odin.",
            "Helped port Fears to Fathom episodes to Android and iOS with strong performance improvements.",
        ],
    },
    {
        company: "Marquee Solution",
        role: "Full Stack Game Programmer",
        period: "2022 - 2023",
        summary:
            "Built hyper-casual mobile games from scratch, handled SDK integrations, analytics, ads, UI, performance, and publishing workflows.",
        points: [
            "Developed titles like Keyboard Clicker, Cannon Guardian, Stack Build, Ball Sort 3D, and Crowd Clash.",
            "Integrated ads, analytics, Firebase, mobile UI, and platform-specific builds.",
            "Used object pooling, ScriptableObjects, and modular systems for faster production.",
        ],
    },
    {
        company: "I3 Simulation",
        role: "Programmer",
        period: "2023",
        summary:
            "Worked on VR and simulation projects with playback systems, JSON-driven data, FFmpeg recording, medical simulation flows, and Unreal/Unity support.",
        points: [
            "Created JSON-based playback and replay logic for simulation review.",
            "Improved VR medical training interactions and training feedback systems.",
            "Worked across Unity, C#, Unreal Engine, Blueprints, and C++ learning workflows.",
        ],
    },
];

const skills = [
    "Unity",
    "C#",
    "Gameplay Systems",
    "Multiplayer",
    "Netcode",
    "Mobile Optimization",
    "UI Systems",
    "Editor Tools",
    "OOP",
    "Design Patterns",
    "Debugging",
    "Performance",
];

const Home = () => {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const data = new FormData(form);

        const response = await fetch("https://formspree.io/f/mykdgnlg", {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            alert("Thanks. I will get back to you soon.");
            form.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <main className="one-page">
            <section id="home" className="hero-section">
                <div className="hero-copy">
                    <div className="eyebrow">
                        <span className="status-dot" />
                        Available for Unity work
                    </div>

                    <h1>
                        Unity <span>Gameplay</span> Programmer
                    </h1>

                    <p className="hero-text">
                        I build polished gameplay systems, multiplayer features, editor tools,
                        and production-ready Unity experiences.
                    </p>

                    <div className="hero-actions">
                        <a className="button primary" href="#projects">
                            View Projects
                        </a>
                        <a className="button" href="#contact">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="hero-board" aria-label="Portfolio preview board">
                    <article className="board-card board-card-large">
                        <span className="mini-label">Featured focus</span>
                        <div className="preview-row">
                            <div className="preview-media">
                                <img src="/Gifs/RayllStudioGif.gif" alt="Gameplay project preview" />
                            </div>
                            <div>
                                <h2>Clean systems. Better game feel.</h2>
                                <p>
                                    Player interactions, UI flow, gameplay loops, multiplayer logic,
                                    optimization, and designer-friendly tools.
                                </p>
                            </div>
                        </div>
                    </article>

                    <article className="board-card board-card-list">
                        <span className="mini-label">What I focus on</span>
                        <ul>
                            <li>Readable C# architecture</li>
                            <li>Practical production problem solving</li>
                            <li>Systems that are easy to expand</li>
                        </ul>
                    </article>

                    <article className="board-note">
                        <strong>Simple goal</strong>
                        <p>Turn ideas into playable, polished game moments.</p>
                    </article>
                </div>
            </section>

            <section id="projects" className="page-section">
                <div className="section-intro">
                    <span className="section-kicker">Selected work</span>
                    <h2>Projects that show how I think and build.</h2>
                    <p>
                        A small, focused overview of gameplay systems, shipped work, mobile
                        optimization, and personal projects.
                    </p>
                </div>

                <div className="project-grid">
                    {featuredProjects.map((project) => (
                        <a
                            key={project.title}
                            className="project-card"
                            href={project.href}
                            target={project.href.startsWith("http") ? "_blank" : undefined}
                            rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                        >
                            <div className="project-media">
                                <img src={project.image} alt={`${project.title} preview`} />
                            </div>

                            <div className="project-content">
                                <span className="project-number">{project.number}</span>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="tag-row">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <section id="skills" className="page-section compact-section">
                <div className="skills-card">
                    <div>
                        <span className="section-kicker">Skills</span>
                        <h2>Focused on Unity systems that survive real production.</h2>
                    </div>

                    <div className="skills-list">
                        {skills.map((skill) => (
                            <span key={skill} className="skill-pill">
                                <span />
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section id="work" className="page-section">
                <div className="section-intro">
                    <span className="section-kicker">Experience</span>
                    <h2>Real project work, summarized clearly.</h2>
                    <p>
                        The full details can still live on separate project pages later, but this
                        one-pager gives visitors the important story quickly.
                    </p>
                </div>

                <div className="timeline">
                    {workItems.map((item) => (
                        <article key={item.company} className="timeline-item">
                            <div className="timeline-meta">
                                <span>{item.period}</span>
                            </div>

                            <div className="timeline-content">
                                <div className="timeline-title-row">
                                    <div>
                                        <h3>{item.company}</h3>
                                        <p>{item.role}</p>
                                    </div>
                                </div>

                                <p className="timeline-summary">{item.summary}</p>

                                <ul>
                                    {item.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section id="about" className="page-section">
                <div className="about-card">
                    <div className="about-visual">
                        <img src="/avatar.png" alt="Vastav Pansuriya" />
                    </div>

                    <div className="about-copy">
                        <span className="section-kicker">About</span>
                        <h2>I build systems players may never notice, but they always feel.</h2>

                        <p>
                            I am Vastav Pansuriya, a Unity gameplay programmer focused on clean
                            gameplay architecture, interaction systems, multiplayer features, UI
                            flow, tools, and optimization.
                        </p>

                        <p>
                            My goal is simple: make the game feel better, make the code easier to
                            work with, and help teams ship polished experiences.
                        </p>

                        <div className="stats-grid">
                            <div>
                                <strong>4+</strong>
                                <span>Years experience</span>
                            </div>
                            <div>
                                <strong>5+</strong>
                                <span>Shipped titles</span>
                            </div>
                            <div>
                                <strong>100%</strong>
                                <span>Unity focused</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="page-section contact-section">
                <div className="contact-card">
                    <div className="contact-copy">
                        <span className="section-kicker">Contact</span>
                        <h2>Let us build something great.</h2>
                        <p>
                            Open to Unity gameplay programming work, freelance projects, and strong
                            game ideas.
                        </p>

                        <div className="contact-links">
                            <a href="mailto:vastavpansuriya4444@gmail.com">
                                vastavpansuriya4444@gmail.com
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vastav-pansuriya-54234a24a/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/VastavPansuriya"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                            <a href="https://vastav.itch.io/" target="_blank" rel="noreferrer">
                                Itch.io
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" name="contact" onSubmit={handleSubmit}>
                        <input
                            type="hidden"
                            name="_subject"
                            value="New contact message from Vastav portfolio"
                        />
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
