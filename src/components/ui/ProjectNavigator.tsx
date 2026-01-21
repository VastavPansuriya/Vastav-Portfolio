type NavItem = {
    id: string;
    image: string;
    label: string;
};

const items: NavItem[] = [
    {
        id: "f2f-pc",
        image: "/fears-to-fathom.jpg",
        label: "PC",
    },
    {
        id: "f2f-mobile",
        image: "/f2f.png",
        label: "Mobile",
    },
    {
        id: "f2f-unannounced",
        image: "/ununounced.webp",
        label: "Secret",
    },
];

const ProjectNavigator = () => {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <nav className="project-nav">
            {items.map((item) => (
                <button
                    key={item.id}
                    className="project-nav-item"
                    onClick={() => scrollTo(item.id)}
                    aria-label={item.label}
                >
                    <img src={item.image} alt={item.label} />
                </button>
            ))}
        </nav>
    );
};

export default ProjectNavigator;
