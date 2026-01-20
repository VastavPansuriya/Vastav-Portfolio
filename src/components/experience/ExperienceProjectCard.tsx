type Props = {
    title: string;
    image: string;
    link: string;
};

const ExperienceProjectCard = ({ title, image, link }: Props) => {
    return (
        <a
            href={link}
            className="exp-project-card"
            rel="noopener noreferrer"
        >
            <img src={image} alt={title} />
            <span>{title}</span>
        </a>
    );
};

export default ExperienceProjectCard;
