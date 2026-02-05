import { useEffect } from "react";
import ExperienceAccordion from "../components/experience/ExperienceAccordion";
import type { ExperienceItem } from "../components/experience/experience.types";

const i3simulation: ExperienceItem[] = [
    {
        type: "work",
        summary: (
            <div>
                <h1 style={{ color: "var(--accent)", marginBottom: "10px" }}>MARQUEE SOLUTION</h1>
                <h4>As a <span className="highlight">Full Stack Game Programmer</span>, I was responsible for <span className="highlight">end-to-end game development</span> including building from scratch, integrating monetization SDKs, and deploying to both Android and iOS platforms.</h4>
                
                <div className="hero-poster-media">
                    <div className="hero-poster hero-poster--dual">
                        <img src="/Gifs/KeyboardClicker.gif" alt="Keyboard Clicker Gameplay" />
                        <img src="/Gifs/StackBuild.gif" alt="Stack Build Gameplay" />
                    </div>
                    <div className="hero-poster hero-poster--dual">
                        <img src="/Gifs/BallSorting3d.gif" alt="Ball Sorting 3D Gameplay" />
                        <img src="/Gifs/CannonGardian.gif" alt="Cannon Guardian Gameplay" />
                    </div>
                </div>

                <div>
                    <p>
                        <ul>
                            <li>Successfully <span className="highlight">developed and published 5 mobile games</span> from concept to release on major platforms</li>
                            <li>Managed the <span className="highlight">complete development lifecycle</span> including research, development, quality assurance, Google Ads integration, analytics, and publishing for both <span className="highlight">Android and iOS</span></li>
                            <li>Key titles: <span className="highlight">Keyboard Clicker</span>, <span className="highlight">Cannon Guardian</span>, <span className="highlight">Ball Sort 3D</span>, <span className="highlight">Stack Build</span>, <span className="highlight">Crowd Clash</span></li>
                            <li><span className="highlight">Ball Sort 3D</span>: Created <span className="highlight">100+ levels</span> using <span className="highlight">modular level generation</span> with ScriptableObjects for efficient content management</li>
                            <li><span className="highlight">Keyboard Clicker</span>: Implemented a <span className="highlight">data-driven modular UI system</span> for dynamic interface generation</li>
                            <li><span className="highlight">Stack Build</span>: Enhanced <span className="highlight">visual polish</span> and implemented <span className="highlight">core game feel mechanics</span> for improved player experience</li>
                            <li><span className="highlight">Cannon Guardian</span>: Applied <span className="highlight">performance optimization techniques</span> including <span className="highlight">object pooling</span>, <span className="highlight">lighting optimization</span>, <span className="highlight">particle system optimization</span>, and <span className="highlight">ScriptableObject-based upgrade systems</span></li>
                        </ul>
                    </p>
                </div>
                
                <h2 style={{ color: "var(--accent)", marginBottom: "10px" }}>Summary</h2>
                <div className="hero-poster__content">
                    <h4>This early job experience gave a strong base in game development, allowing me to learn about different areas of game programming and building important skills for my career growth.</h4>
                </div>
            </div>
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
            <section className="experience-hero">
                <div className="experience-section">
                    {i3simulation.map((item, index) => (
                        <ExperienceAccordion key={index} data={item} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Marquee;