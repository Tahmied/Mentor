import './Headings.css';
const Headings = ({ sectionName, Title, Desc }) => {
    return (
        <section className="heading-section">
            <div className="heading-container">
                <div className="heading-badge">{sectionName}</div>
                <h2 className="heading-heading">{Title}</h2>
                <p className="heading-description">
                    {Desc}
                </p>
            </div>
        </section>
    );
};

export default Headings;