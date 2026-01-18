import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("sidebar-open", open);
    }, [open]);

    return (
        <header className="navbar">
            <div className="navbar-inner">
                <div className="navbar-logo">VASTAV</div>

                {/* Desktop links */}
                <nav className="navbar-links">
                    <a href="#features">Features</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </nav>

                <a className="navbar-cta" href="#contact">
                    Contact Me
                </a>

                {/* Mobile menu toggle */}
                <button
                    className="navbar-toggle"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Overlay */}
            <div
                className={`sidebar-overlay ${open ? "show" : ""}`}
                onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <aside className={`sidebar ${open ? "open" : ""}`}>
                <button
                    className="sidebar-close"
                    onClick={() => setOpen(false)}
                >
                    ✕
                </button>

                <nav className="sidebar-links">
                    <a onClick={() => setOpen(false)} href="#features">Features</a>
                    <a onClick={() => setOpen(false)} href="#projects">Projects</a>
                    <a onClick={() => setOpen(false)} href="#experience">Experience</a>
                    <a onClick={() => setOpen(false)} href="#contact">Contact</a>
                </nav>
            </aside>
        </header>
    );
};

export default Navbar;
