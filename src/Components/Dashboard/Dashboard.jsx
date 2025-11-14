import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Student <span className="highlight">Dashboard</span></h1>
                <p>Manage your courses and profile</p>
            </div>

            <div className="dashboard-grid">
                <Link to="/my-enrollments">
                    <div className="dashboard-card">
                        <div className="card-icon">📚</div>
                        <h3>My Enrolled Courses</h3>
                        <p>View and manage your enrolled courses</p>
                    </div>
                </Link>

                <Link to="/">
                    <div className="dashboard-card">
                        <div className="card-icon">🏠</div>
                        <h3>Explore Our Platform</h3>
                        <p>Visit the homepage to learn what we offer</p>
                    </div>
                </Link>

                <Link to="/my-courses">
                    <div className="dashboard-card">
                        <div className="card-icon">📝</div>
                        <h3>My Added Courses</h3>
                        <p>Courses you have created</p>
                    </div>
                </Link>

                <Link to="/edit-profile">
                    <div className="dashboard-card">
                        <div className="card-icon">✏️</div>
                        <h3>Edit Profile</h3>
                        <p>Update your account information</p>
                    </div>
                </Link>

                <Link to="/profile">
                    <div className="dashboard-card">
                        <div className="card-icon">👤</div>
                        <h3>My Profile</h3>
                        <p>View your profile details</p>
                    </div>
                </Link>

                <Link to="/courses">
                    <div className="dashboard-card">
                        <div className="card-icon">🔍</div>
                        <h3>Explore More Courses</h3>
                        <p>Discover new learning opportunities</p>
                    </div>
                </Link>
                
            </div>
        </div>
    );
};

export default Dashboard;