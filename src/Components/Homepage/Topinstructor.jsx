import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Ctabtn from "../Utilis/Ctabtn.jsx";
import Headings from '../Utilis/Headings';
import VideoSection from "./Video.jsx";
import './topinstructor.css';

const Topinstructor = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 1500
    };
    return (
        <section className="slider-section">
            <Headings sectionName={'Top Instructor'} Title={'Meet Our Top Instructors'} Desc={'Expert mentors guiding you to reach your full potential.'}></Headings>
            <div style={{ marginTop: '-3rem' }} className="slider-container">
                <Slider {...settings}>
                    <div>
                        <VideoSection thumbnail={'/Top-Instructors/thumbnail3.jpg'} id={'geQX1bL2oLI'}></VideoSection>
                    </div>
                    <div>
                        <VideoSection thumbnail={'/Top-Instructors/thumbnail2.jpg'} id={'xONmFjXCX0M'}></VideoSection>
                    </div>
                    <div>
                        <VideoSection thumbnail={'/Top-Instructors/thumbnail1.jpg'} id={'cq6Iz4-LSkc'}></VideoSection>
                    </div>
                </Slider>
            </div>
            <Ctabtn text={'Check Our Courses'} link={'/courses'}></Ctabtn>
        </section>
    );
};

export default Topinstructor;