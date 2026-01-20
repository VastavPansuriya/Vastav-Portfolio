import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("sidebar-open", open);
    }, [open]);

    return (
        <header className="navbar ">
            <div className="navbar-inner">
                <div className="navbar-logo"></div>

                {/* Desktop links */}
                <nav className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                {/* <a className="navbar-cta" href="/contact">
                    Contact Me
                </a> */}

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
                    <Link onClick={() => setOpen(false)} to="/">Home</Link>
                    <Link onClick={() => setOpen(false)} to="/about">About</Link>
                    <Link onClick={() => setOpen(false)} to="/experience">Experience</Link>
                    <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
                </nav>
            </aside>
        </header>
    );
};

export default Navbar;
