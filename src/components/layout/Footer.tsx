const FooterStrip = () => {
    return (
        <footer className="footer-strip">
            <p>Built with focus on performance and clean systems - © {new Date().getFullYear()} Vastav Pansuriya</p>

            <div className="footer-links">
                <a href="https://vastavpansuriya.com" target="_blank" rel="noreferrer">
                    Portfolio
                </a>
                <a href="https://github.com/VastavPansuriya" target="_blank" rel="noreferrer">
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/vastav-pansuriya-54234a24a/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
                <a href="https://vastav.itch.io/" target="_blank" rel="noreferrer">
                    Itch.io
                </a>
            </div>
        </footer>
    );
};

export default FooterStrip;
