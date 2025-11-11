import Headings from "../Utilis/Headings";
import './why.css';

const Choose = () => {
    return (
        <div className="features-container">
            <Headings sectionName={'Why Choose Us?'} Title={'Why Learners Trust Us'} Desc={'Empowering thousands of students with flexible, expert-led online learning that delivers real results.'}></Headings>
            <div className="features-grid">
                <div className="feature-card">
                    <div className="icon-circle pink">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                        </svg>
                    </div>
                    <h3 className="feature-title">Certificate on Completion</h3>
                    <p className="feature-description">Showcase your skills with a verified certificate to career.</p>
                </div>

                <div className="feature-card">
                    <div className="icon-circle green">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
                        </svg>
                    </div>
                    <h3 className="feature-title">Real world Projects</h3>
                    <p className="feature-description">Work on practical tasks that mirror industry challenges.</p>
                </div>

                <div className="feature-card">
                    <div className="icon-circle purple">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" />
                        </svg>
                    </div>
                    <h3 className="feature-title">Expert Feedback</h3>
                    <p className="feature-description">Get personalized insights from professionals to refine learning.</p>
                </div>
            </div>
        </div>
    );
};

export default Choose;