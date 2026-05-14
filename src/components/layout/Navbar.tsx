import { useEffect, useState } from "react";

const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("vp-menu-open", open);

        return () => {
            document.body.classList.remove("vp-menu-open");
        };
    }, [open]);

    const closeMenu = () => setOpen(false);

    return (
        <header className="vp-navbar">
            <div className="vp-navbar-inner">
                <a className="vp-brand" href="/#top" onClick={closeMenu}>
                    <span>V</span>
                    <strong>Vastav Pansuriya</strong>
                </a>

                <nav className="vp-nav-links" aria-label="Main navigation">
                    {navItems.map((item) => (
                        <a key={item.href} href={`/${item.href}`}>
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a className="vp-nav-cta" href="mailto:vastavpansuriya4444@gmail.com">
                    Hire Me
                </a>

                <button
                    className="vp-menu-button"
                    type="button"
                    aria-label="Open menu"
                    onClick={() => setOpen((value) => !value)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            <div className={`vp-mobile-menu ${open ? "open" : ""}`}>
                {navItems.map((item) => (
                    <a key={item.href} href={`/${item.href}`} onClick={closeMenu}>
                        {item.label}
                    </a>
                ))}
                <a href="mailto:vastavpansuriya4444@gmail.com" onClick={closeMenu}>
                    Hire Me
                </a>
            </div>
        </header>
    );
};

export default Navbar;
