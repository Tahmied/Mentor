import { Link, useNavigate } from "react-router-dom";
import '../Homepage/courses.css';

const Course = ({ thumbnail, category, title, lessons, instructorName, instructorImg, instructorBio, ratings, price, link }) => {
    const navigate = useNavigate()
    return (
        <div data-aos-offset="100" data-aos-duration='1000' data-aos="fade-up" onClick={()=> navigate(link)} className="course-item">
            <div className="course-thumbnail">
                <img src={ thumbnail } alt="WordPress Development" />
            </div>
            <div className="course-content">
                <span className="course-category">{category}</span>
                <h3 className="course-title">{title}</h3>
                <div className="course-meta">
                    <div className="meta-item">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span>Lessons {lessons}</span>
                    </div>
                </div>
                <div className="instructor-info">
                    <div className="instructor-avatar">
                        <img src={instructorImg} alt={instructorName} />
                    </div>
                    <div className="instructor-details">
                        <div className="instructor-name">{instructorName}</div>
                        <div className="instructor-title">{instructorBio}</div>
                    </div>
                </div>
                <div className="rating">
                    <div className="stars">
                        {Array.from({ length: 5 }, (_, i) => {
                            const starValue = i + 1; 
                            return (
                                <span key={i}>
                                    {ratings >= starValue ? "★" : ratings >= starValue - 0.5 ? "☆" : "✩"}
                                </span>
                            );
                        })}
                    </div>
                    <span className="rating-text">({ratings})</span>
                </div>
            </div>
            <div className="course-footer">
                <div className="course-price">${price}</div>
                <Link to={link}><button className="view-details">View Details</button></Link>

            </div>
        </div>
    );
};

export default Course;