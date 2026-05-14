const Navbar = () => {
    return (
        <header className="vp-navbar">
            <a className="vp-brand" href="#home" aria-label="Go to homepage">
                <span className="vp-brand-mark">V</span>
                <span>Vastav Pansuriya</span>
            </a>

            <nav className="vp-nav-links" aria-label="Main navigation">
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>

            <a className="vp-nav-cta" href="mailto:vastavpansuriya4444@gmail.com">
                Hire Me
            </a>
        </header>
    );
};

export default Navbar;
