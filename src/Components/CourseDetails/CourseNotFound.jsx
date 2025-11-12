import { Link } from "react-router";

const CourseNotFound = () => {
    return (
        <div className='app-not-found'>
            <div className="app-not-found-container">
                <img src="/assets/App-Error.png" alt="" className="app-not-found-img" />
                <p className="not-found-text">OPPS!! APP NOT FOUND</p>
                <p className="not-found-desc">The App you are requesting is not found on our system.  please try another apps</p>
                <Link to={-1}>
                <button className="back-btn-not-found">Go Back!</button>
                </Link>
            </div>
        </div>
    );
};

export default CourseNotFound;