

export type ExperienceProject = {
    id: string;
    title: string;
    image: string;
    link: string;
};

export type ExperienceItem = {
    type: "work" | "personal";
    company?: string;
    role?: string;
    start?: string;
    end?: string;
    summary?: React.ReactNode;
    details?: React.ReactNode;
    projects?: ExperienceProject[];
    logo?: string;
};
