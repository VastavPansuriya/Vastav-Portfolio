import { useEffect, useState } from "react";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("sidebar-open", open);

        return () => {
            document.body.classList.remove("sidebar-open");
        };
    }, [open]);

    const closeMenu = () => setOpen(false);

    return (
        <header className="navbar">
            <div className="navbar-inner">
                <a className="navbar-brand" href="#home" onClick={closeMenu}>
                    <span className="navbar-mark">V</span>
                    <span>Vastav Pansuriya</span>
                </a>

                <nav className="navbar-links" aria-label="Main navigation">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href}>
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a className="navbar-cta" href="mailto:vastavpansuriya4444@gmail.com">
                    Hire Me
                </a>

                <button
                    className="navbar-toggle"
                    type="button"
                    aria-label="Open menu"
                    aria-expanded={open}
                    onClick={() => setOpen((value) => !value)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            <div
                className={`sidebar-overlay ${open ? "show" : ""}`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            <aside className={`sidebar ${open ? "open" : ""}`} aria-label="Mobile navigation">
                <button
                    className="sidebar-close"
                    type="button"
                    aria-label="Close menu"
                    onClick={closeMenu}
                >
                    x
                </button>

                <nav className="sidebar-links">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href} onClick={closeMenu}>
                            {item.label}
                        </a>
                    ))}
                </nav>
            </aside>
        </header>
    );
};

export default Navbar;
