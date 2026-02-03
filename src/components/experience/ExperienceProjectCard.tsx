import { Link } from "react-router-dom";

type Props = {
    title: string;
    image: string;
    link: string;
};

const ExperienceProjectCard = ({ title, image, link }: Props) => {
    const isSquareProject = [
        "Fears to Fathom - Scratch Creek",
        "F2F Android/iOS", 
        "Unannounced",
        "Kitchen Chaos",
        "Pawn Gambit",  
        "Zero Effort",
        "Smile Snake",
        "Photon Phobia",
        "Hurrr"
    ].includes(title);
    
    return (
        <Link
            to={link}
            className={`exp-project-card ${isSquareProject ? 'square' : ''}`}
        >
            <img src={image} alt={title} />
            <span>{title}</span>
        </Link>
    );
};

export default ExperienceProjectCard;