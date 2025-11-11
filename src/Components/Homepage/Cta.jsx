import Ctabtn from '../Utilis/Ctabtn';
import './cta.css';

const Cta = () => {
    return (
        <>
            <section className="cta-section">
                <div className="cta-container">
                    <div className='cta-left'>
                        <img src="/CTA/cta-image.png" alt="" />
                    </div>
                    <div className='cta-right'>
                        <div className="heading-badge">Join Us</div>
                        <h2 className="heading-heading">Join Ambitious Professionals and Unlock Your Dream Career Today</h2>
                        <p className="heading-description">
                            Unlock your true potential and discover a world of opportunities that align with your skills, interests and aspirations. 
                        </p>
                        <Ctabtn text={'Sign Up'} link={'/register'}></Ctabtn>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cta;