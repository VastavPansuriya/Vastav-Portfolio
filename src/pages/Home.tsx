import ContactSection from "../components/contact/ContactSection";

const Home = () => {
    return (

        <main>
            <section className="hero hero-grid">
                <div className="hero-left">
                    <h1 style={{ color: "var(--accent)" }}>
                        I’m Vastav
                    </h1>

                    <span style={{ color: "var(--text-muted)", marginBottom: "20px" }}>
                        Systems • Performance • Gameplay
                    </span>
                    {/* <h3>Performance Highlight</h3> */}
                    <p style={{ marginTop: "8px" }}>
                        A game programmer with nearly <span className="highlight">four years </span> of experience in the industry. I started my journey with <span className="highlight">Unity and C #</span>, without prioritising college, and that to build only the required knowledge. Over time, I improved a lot by learning a variety of coding and game development skills, Such as Code architecture and principles, Unity engine relevant stuff, third-party tools and API implementations, system design and more.
                    </p>
                </div>

                <div className="hero-right">
                    <div
                        style={{
                            background: "var(--surface)",
                            border: "1px solid var(--border)",
                            padding: "20px",
                            marginTop: "24px",
                            borderRadius: "8px",
                        }}
                    >
                        <img
                            src="/avatar.png"
                            alt="Vastav avatar"
                            className="hero-avatar"
                        />
                    </div>
                </div>
            </section>

            <ContactSection />
        </main >
    );
};

export default Home;
