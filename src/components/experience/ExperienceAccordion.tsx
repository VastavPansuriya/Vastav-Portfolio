import { useState } from "react";
import type { ExperienceItem } from "./experience.types";
import ExperienceProjectCard from "./ExperienceProjectCard";

type Props = {
    data: ExperienceItem;
};

const ExperienceAccordion = ({ data }: Props) => {
    const isPersonal = data.type === "personal";
    const [open, setOpen] = useState(isPersonal);

    const toggleAccordion = () => setOpen((prev) => !prev);

    const hasExpandableContent =
        (data.projects && data.projects.length > 0) || !!data.details;

    return (
        <div className={`experience-card ${open ? "open" : ""} ${isPersonal ? "personal" : ""}`}>
            {/* HEADER */}
            <div
                className={`experience-header ${hasExpandableContent ? "clickable" : ""}`}
                onClick={hasExpandableContent && !isPersonal ? toggleAccordion : undefined}
                role={!isPersonal && hasExpandableContent ? "button" : undefined}
                aria-expanded={open}
            >
                {!isPersonal && (
                    <>
                        <div className="header-left">
                            {data.logo && (
                                <div className="company-logo">
                                    <img src={data.logo} alt={`${data.company} logo`} />
                                </div>
                            )}

                            <div className="company-info">
                                <h3>{data.company}</h3>
                                {data.role && <p className="role">{data.role}</p>}
                            </div>
                        </div>

                        {!isPersonal && data.start && data.end && (
                            <div className="header-right">
                                <div className="experience-dates">
                                    <span className="date-start">Started: {data.start},</span>
                                    <span className="date-end">Ended: {data.end}</span>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* SUMMARY (ALWAYS VISIBLE) */}
            {!isPersonal && data.summary && (
                <p className="experience-summary">
                    {data.summary}

                    {hasExpandableContent && (
                        <span
                            className="toggle"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleAccordion();
                            }}
                            aria-label={open ? "Collapse" : "Expand"}
                        >
                            {" "}
                            {open ? "see less.." : "see more..."}
                        </span>
                    )}
                </p>
            )}

            {/* EXPANDED CONTENT (ONLY WHEN OPEN) */}
            {(isPersonal || open) && (
                <div className={`experience-content ${isPersonal ? "no-border" : ""}`}>
                    <div className="experience-content-inner">
                        {data.projects && data.projects.length > 0 && (
                            <div className="project-grid">
                                {data.projects.map((project) => (
                                    <ExperienceProjectCard key={project.id} {...project} />
                                ))}
                            </div>
                        )}

                        {!isPersonal && data.details && (
                            <div className="experience-details">
                                {data.details}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExperienceAccordion;