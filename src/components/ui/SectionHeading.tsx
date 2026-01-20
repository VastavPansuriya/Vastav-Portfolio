type SectionHeadingProps = {
    title: string;
    lineColor?: string;
};

const SectionHeading = ({
    title,
    lineColor = "var(--accent)",
}: SectionHeadingProps) => {
    return (
        <div className="section-heading">
            <span
                className="section-line"
                style={{ background: lineColor }}
            />
            <h2 className="section-title">{title}</h2>
            <span
                className="section-line"
                style={{ background: lineColor }}
            />
        </div>
    );
};

export default SectionHeading;