import Aos from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

const Hero = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 data-aos-delay="0" data-aos-duration='1200' data-aos="fade-up" className="hero-big-text">
                        Up Your <span className="highlight">Skills</span> To<br />
                        Advance Your Career Path
                    </h1>
                    <p data-aos-delay="400" data-aos-duration='1200' data-aos="fade-up" className="hero-big-text">
                        Join <span className="learner-count">200,000+</span> learners and gain practical, career-boosting knowledge.
                    </p>
                    
                    <Link className="hero-big-text" to={'/courses'}>
                        <button data-aos-delay="700" data-aos-duration='1200' data-aos="fade-up" className="cta-button">Browse Courses</button>
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