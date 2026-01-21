import { Link } from "react-router-dom";

type Props = {
    title: string;
    image: string;
    link: string;
};

const ExperienceProjectCard = ({ title, image, link }: Props) => {
    return (
        <Link
            to={link}
            className="exp-project-card"
        >
            <img src={image} alt={title} />
            <span>{title}</span>
        </Link>
    );
};

export default ExperienceProjectCard;
