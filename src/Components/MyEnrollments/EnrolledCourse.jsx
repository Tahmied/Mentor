import { useNavigate } from "react-router-dom";
import '../Homepage/courses.css';
import Ctabtn from "../Utilis/Ctabtn";

const EnrolledCourse = ({ thumbnail, category, title, lessons, instructorName, instructorImg, instructorBio, ratings, price, link }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/watch/${link}`)} className="course-item">
            <div className="course-thumbnail">
                <img src={thumbnail} alt="WordPress Development" />
            </div>
            <div className="course-content">
                <span className="course-category">{category}</span>
                <h3 className="course-title">{title}</h3>
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
            <div className="course-lecture">
                <Ctabtn text={'Watch Lectures'} link={`/watch/${link}`}></Ctabtn>
            </div>
        </div>
    );
};

export default EnrolledCourse;