import Aos from 'aos';
import { useEffect } from 'react';
import './Headings.css';
const Headings = ({ sectionName, Title, Desc }) => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <section className="heading-section">
            <div className="heading-container">
                <div data-aos-offset="200"  data-aos-delay="0" data-aos-duration='1200' data-aos="fade-up" className="heading-badge">{sectionName}</div>
                <h2 data-aos-offset="200"  data-aos-delay="400" data-aos-duration='1200' data-aos="fade-up" className="heading-heading">{Title}</h2>
                <p  data-aos-offset="200" data-aos-delay="700" data-aos-duration='1200' data-aos="fade-up" className="heading-description">
                    {Desc}
                </p>
            </div>
        </section>
    );
};

export default Headings;