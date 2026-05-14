const Footer = () => {
    return (
        <footer className="vp-footer">
            <p>© {new Date().getFullYear()} Vastav Pansuriya. Built with a Unity mindset.</p>
            <div>
                <a href="https://vastavpansuriya.com" target="_blank" rel="noreferrer">Portfolio</a>
                <a href="https://github.com/VastavPansuriya" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/vastav-pansuriya-54234a24a/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://vastav.itch.io/" target="_blank" rel="noreferrer">Itch.io</a>
            </div>
        </footer>
    );
};

export default Footer;
