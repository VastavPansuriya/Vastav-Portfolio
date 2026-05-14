import type { FormEvent } from "react";

const selectedProjects = [
    {
        number: "01",
        title: "Fears to Fathom",
        description:
            "Gameplay, interaction systems, multiplayer-facing features, and mobile porting work for narrative horror experiences.",
        tags: ["Unity", "Gameplay", "Mobile"],
        image: "/Gifs/RayllStudioGif.gif",
        link: "/experience/RayllStudio#f2f-pc",
    },
    {
        number: "02",
        title: "Pawn Gambit",
        description:
            "A chess-inspired puzzle project with custom mechanics, level logic, and editor-focused workflow.",
        tags: ["Puzzle", "Tools", "Systems"],
        image: "/Personal/PawnGambit.gif",
        link: "https://vastav.itch.io/pawn-gambit",
    },
    {
        number: "03",
        title: "Unity Tools",
        description:
            "Custom editor tools, workflow helpers, UI systems, and gameplay architecture experiments built in Unity.",
        tags: ["Editor", "C#", "UX"],
        image: "/Gifs/UnrealLikeDatatable.gif",
        link: "/experience/personal",
    },
];

const workItems = [
    {
        company: "Rayll Studio",
        role: "Unity Gameplay Programmer",
        time: "Current / Recent",
        summary:
            "Worked on Fears to Fathom systems, multiplayer interactions, mobile ports, gameplay features, and production support.",
    },
    {
        company: "Marquee Solution",
        role: "Full Stack Game Programmer",
        time: "Earlier role",
        summary:
            "Built and shipped mobile games with ads, analytics, performance optimization, gameplay loops, and platform publishing.",
    },
    {
        company: "i3 Simulations",
        role: "Programmer",
        time: "Earlier role",
        summary:
            "Worked on VR and simulation systems, data playback, FFmpeg recording, training workflows, and technical problem solving.",
    },
];

const skills = [
    "Unity",
    "C#",
    "Gameplay Systems",
    "Multiplayer",
    "Mobile Optimization",
    "UI Systems",
    "Editor Tools",
    "Debugging",
    "System Architecture",
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
            alert("Thanks! I will get back to you soon.");
            form.reset();
            return;
        }

        alert("Something went wrong. Please try again.");
    };

    return (
        <main className="vp-site-shell" id="top">
            <section className="vp-hero-section">
                <div className="vp-hero-copy">
                    <div className="vp-status-pill">
                        <span className="vp-status-dot" />
                        Available for Unity gameplay work
                    </div>

                    <h1>
                        Unity <span>Gameplay</span> Programmer
                    </h1>

                    <p className="vp-hero-text">
                        I build polished gameplay systems, multiplayer features, editor tools,
                        and production-ready Unity experiences.
                    </p>

                    <div className="vp-hero-actions">
                        <a className="vp-button vp-button-dark" href="#projects">
                            View Projects
                        </a>
                        <a className="vp-button" href="#contact">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="vp-board" aria-label="Portfolio preview board">
                    <article className="vp-board-card vp-board-card-main">
                        <div className="vp-mini-label">Featured focus</div>
                        <div className="vp-feature-row">
                            <div className="vp-preview-image" />
                            <div>
                                <h2>Systems that feel simple to play and clean to maintain.</h2>
                                <p>
                                    Player interaction, UI flow, multiplayer sync, mobile optimization,
                                    and tools that help production move faster.
                                </p>
                            </div>
                        </div>
                    </article>

                    <article className="vp-board-card vp-board-card-list">
                        <div className="vp-mini-label">How I work</div>
                        <ul>
                            <li>Readable C# architecture</li>
                            <li>Designer-friendly tools</li>
                            <li>Performance-aware systems</li>
                        </ul>
                    </article>

                    <article className="vp-note-card">
                        <strong>Simple goal</strong>
                        <p>Turn ideas into playable, polished game moments.</p>
                    </article>
                </div>
            </section>

            <section className="vp-section" id="projects">
                <div className="vp-section-heading">
                    <h2>Selected projects</h2>
                    <p>
                        A compact look at the kind of gameplay systems, production work,
                        and Unity tooling I like building.
                    </p>
                </div>

                <div className="vp-project-grid">
                    {selectedProjects.map((project) => (
                        <a
                            key={project.title}
                            className="vp-project-card"
                            href={project.link}
                            target={project.link.startsWith("http") ? "_blank" : undefined}
                            rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                        >
                            <div className="vp-project-thumb">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="vp-project-content">
                                <span>{project.number}</span>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="vp-tags">
                                    {project.tags.map((tag) => (
                                        <small key={tag}>{tag}</small>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <section className="vp-section" id="skills">
                <div className="vp-split-panel">
                    <div className="vp-soft-card">
                        <h2>Skills</h2>
                        <p>
                            Focused on practical gameplay implementation, clean systems,
                            and production problem solving.
                        </p>
                    </div>

                    <div className="vp-skill-cloud">
                        {skills.map((skill) => (
                            <span key={skill}>
                                <i />
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="vp-section" id="experience">
                <div className="vp-section-heading">
                    <h2>Experience</h2>
                    <p>
                        Real project work across horror games, mobile games, simulation,
                        tools, optimization, and gameplay systems.
                    </p>
                </div>

                <div className="vp-experience-list">
                    {workItems.map((item) => (
                        <article className="vp-experience-item" key={item.company}>
                            <div>
                                <h3>{item.company}</h3>
                                <p>{item.role}</p>
                            </div>
                            <span>{item.time}</span>
                            <p>{item.summary}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="vp-section" id="about">
                <div className="vp-about-card">
                    <div className="vp-avatar-card">
                        <img src="/avatar.png" alt="Vastav Pansuriya" />
                    </div>

                    <div className="vp-about-copy">
                        <h2>I like building systems that players never notice, but always feel.</h2>
                        <p>
                            I am Vastav Pansuriya, a Unity gameplay programmer focused on
                            clean gameplay architecture, interaction systems, multiplayer features,
                            UI flow, editor tools, and optimization.
                        </p>
                        <p>
                            My goal is simple: make the game feel better, make the code easier
                            to work with, and help teams ship polished experiences.
                        </p>

                        <div className="vp-stats">
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

            <section className="vp-section" id="contact">
                <div className="vp-contact-card">
                    <div className="vp-contact-copy">
                        <h2>Let us build something great.</h2>
                        <p>
                            Open to Unity gameplay programming work, freelance projects,
                            and strong game ideas.
                        </p>

                        <div className="vp-contact-links">
                            <a href="mailto:vastavpansuriya4444@gmail.com">Email</a>
                            <a href="https://github.com/VastavPansuriya" target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/vastav-pansuriya-54234a24a/" target="_blank" rel="noreferrer">
                                LinkedIn
                            </a>
                            <a href="https://vastav.itch.io/" target="_blank" rel="noreferrer">
                                Itch.io
                            </a>
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
