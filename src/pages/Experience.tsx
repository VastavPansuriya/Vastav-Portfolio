import SectionHeading from "../components/ui/SectionHeading";
import { Link } from "react-router-dom";

// Project card component for the grid
const ProjectCard = ({
    image,
    title,
    role,
    skills,
    link,
    company
}: {
    image: string;
    title: string;
    role: string;
    skills: string[];
    link: string;
    company?: string;
}) => {
    const handleClick = (e: React.MouseEvent) => {
        // For RayllStudio projects, navigate to the RayllStudio page with the specific section
        if (company === "RayllStudio") {
            e.preventDefault();
            // Store the section ID to scroll to after navigation
            const sectionId = link.split('#')[1];
            if (sectionId) {
                localStorage.setItem('scrollToSection', sectionId);
            }
            // Navigate to the RayllStudio page
            window.location.href = link;
        }
    };

    return (
        <Link
            to={link}
            onClick={handleClick}
        >
            <div className="experience-grid-card">
                <div className="card-image-container">
                    <img src={image} alt={title} className="card-image" />
                </div>
                <div className="card-content">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-role">{role}</p>
                    <div className="card-skills">
                        {skills.map((skill, index) => (
                            <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>

    );
};

// Company section component
const CompanySection = ({
    name,
    logo,
    projects
}: {
    name: string;
    logo?: string;
    projects: Array<{
        id: string;
        title: string;
        image: string;
        link: string;
        role: string;
        skills: string[];
    }>;
}) => {
    return (
        <div id={name.toLowerCase().replace(/\s+/g, '-')} className="company-section">
            <div className="company-header">
                {logo && <img src={logo} alt={`${name} logo`} className="company-logo" />}
                <h3 className="company-name">{name}</h3>
            </div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        {...project}
                        company={name}
                    />
                ))}
            </div>
        </div>
    );
};

// Work Experience Data
const workCompanies = [
    {
        name: "Rayll Studio",
        logo: "/rayll_studios_logo.jpg",
        projects: [
            {
                id: "1",
                title: "Fears to Fathom - Scratch Creek",
                image: "/Gifs/RayllStudioGif.gif",
                link: "/experience/RayllStudio#f2f-pc",
                role: "Game Developer",
                skills: ["Unity", "C#", "Multiplayer", "Design Patterns", "Ststem Architecture", "Editor Scripting"]
            },
            {
                id: "2",
                title: "F2F Android/iOS",
                image: "/Gifs/EP2Gif.gif",
                link: "/experience/RayllStudio#f2f-mobile",
                role: "Mobile Developer",
                skills: ["Unity", "C#", "Mobile Optimization", "Performance", "UI/UX"]
            },
            {
                id: "3",
                title: "Unannounced Project",
                image: "/Gifs/Unannounced.gif",
                link: "/experience/RayllStudio#f2f-unannounced",
                role: "Gameplay Programmer",
                skills: ["Unity", "C#", "Scriptable Objects", "System Design", "Animation"]
            }
        ]
    },
    {
        name: "Other Experiences",
        logo: "",
        projects: [
            {
                id: "4",
                title: "i3 Simulations",
                image: "/Gifs/i3SimGif.gif",
                link: "/experience/i3simulation",
                role: "Game Developer",
                skills: ["Unreal Engine", "C++", "VR", "JSON", "FFmpeg", "Replay Systems"]
            },
            {
                id: "5",
                title: "Marquee Solution",
                image: "/Gifs/KeyboardClicker.gif",
                link: "/experience/marquee",
                role: "Full Stack Developer",
                skills: ["Unity", "C#", "Mobile", "Google Ads", "Analytics", "UI/UX"]
            }
            // {
            //     id: "6",
            //     title: "Cannon Guardian",
            //     image: "/Gifs/CannonGardian.gif",
            //     link: "/experience/marquee",
            //     role: "Game Developer",
            //     skills: ["Unity", "C#", "Mobile", "Gameplay", "Level Design"]
            // },
            // {
            //     id: "7",
            //     title: "Ball Sort 3D",
            //     image: "/Gifs/BallSorting3d.gif",
            //     link: "/experience/marquee",
            //     role: "Game Developer",
            //     skills: ["Unity", "C#", "Scriptable Objects", "Level Design", "Puzzle Mechanics"]
            // },
            // {
            //     id: "8",
            //     title: "Stack Build",
            //     image: "/Gifs/StackBuild.gif",
            //     link: "/experience/marquee",
            //     role: "Game Developer",
            //     skills: ["Unity", "C#", "3D Physics", "Environment", "Game Feel"]
            // },
            // {
            //     id: "9",
            //     title: "Crowd Clash",
            //     image: "/Gifs/CrowdClash.gif",
            //     link: "/experience/marquee",
            //     role: "Game Developer",
            //     skills: ["Unity", "C#", "Crowd Simulation", "Mobile", "Multiplayer"]
            // }
        ]
    }
];

// Personal Projects Data
const personalProjects = [
    {
        id: "10",
        title: "Pawn Gambit",
        image: "Gifs/PawnGambit.gif",
        link: "/experience/personal",
        role: "Solo Developer",
        skills: ["Unity", "C#", "Strategy", "AI", "Board Games"]
    },
    {
        id: "11",
        title: "Zero Effort",
        image: "Gifs/ZeroEffort.gif",
        link: "/experience/personal",
        role: "Solo Developer",
        skills: ["Unity", "C#", "Minimalist", "Mobile", "Casual"]
    },
    {
        id: "12",
        title: "Hurrr",
        image: "Gifs/Hurr.gif",
        link: "/experience/personal",
        role: "Solo Developer",
        skills: ["Unity", "C#", "Experimental", "Sound", "Interaction"]
    },
    {
        id: "13",
        title: "Unreal Like DataTable",
        image: "/Gifs/UnrealLikeDatatable.gif",
        link: "/experience/personal",
        role: "",
        skills: ["Unity", "C#", "EditorScripting", "ASMDF", "ScriptableObjects"]
    },

];

// // Unreal Projects Data
// const learningProjects = [
//     {
//         id: "13",
//         title: "UnrealEngine",
//         image: "/project-kix.jpg",
//         link: "https://youtu.be/dwh7H3VNuIw",
//         role: "Learner",
//         skills: ["Unreal Engine", "Blueprints", "CPP", "Enhanced Input", "UI", "AI", "Paper 2D"]
//     },
// ];

const Experience = () => {
    return (
        <main className="experience-page">
            {/* Work Experience Section */}
            <section className="experience-section">
                <SectionHeading title="Work Experience" />
                {workCompanies.map((company) => (
                    <CompanySection
                        key={company.name}
                        name={company.name}
                        logo={company.logo}
                        projects={company.projects}
                    />
                ))}
            </section>

            {/* Personal Projects Section */}
            <section className="experience-section">
                <SectionHeading title="Personal Projects" />

                <div className="projects-grid">
                    {personalProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                        />
                    ))}
                </div>
            </section>

            {/* Unreal Projects Section
            <section className="experience-section">
                <SectionHeading title="Learning and Skills" />

                <div className="projects-grid">
                    {learningProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                        />
                    ))}
                </div>
            </section> */}
        </main>
    );
};

export default Experience;