import { Link } from 'react-router-dom';
import './hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <h1>
                        Up Your <span className="highlight">Skills</span> To<br />
                        Advance Your Career Path
                    </h1>
                    <p>
                        Join <span className="learner-count">200,000+</span> learners and gain practical, career-boosting knowledge.
                    </p>
                    
                    <Link to={'/courses'}>
                        <button className="cta-button">Browse Courses</button>
                    </Link>

                    <div className="hero-image-container">
                        <img
                            src="/Hero/hero-main-img.png"
                            alt="Student learning"
                            className="hero-main-image"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;