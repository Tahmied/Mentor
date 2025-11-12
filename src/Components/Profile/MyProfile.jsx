import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';
import { AuthContext } from '../Authentication/AuthContext';
import Loader from '../Utilis/Loader';
import './Profile.css';

const MyProfile = () => {
    const { user } = useContext(AuthContext)
    console.log(user)

    if (!user) {
        return <div className="profile-container">
            <Loader></Loader>
        </div>
    }

    return (
        <>
            <Helmet>
                <title>My Profile | Mentor</title>
            </Helmet>
            <div className="profile-container">
                <div className="profile-header">
                    <h1>My Profile</h1>
                    <Link to={'/edit-profile'}>
                        <button className="edit-btn" >
                            Edit Profile
                        </button>
                    </Link>
                </div>

                <div className="profile-content">
                    <div className="profile-photo-section">
                        <div className="photo-container">
                            <img
                                src={user.dpPath || '/assets/usericon.svg'}
                                alt="Profile"
                                className="profile-photo"
                            />
                        </div>
                    </div>

                    <div className="profile-details">
                        <div className="detail-group">
                            <label>Photo Url</label>
                            <div className="detail-value">{user.dpPath}</div>
                        </div>


                        <div className="detail-group">
                            <label>Display Name</label>
                            <div className="detail-value">{user.fullName}</div>
                        </div>

                        <div className="detail-group">
                            <label>Email Address</label>
                            <div className="detail-value">{user.email}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default MyProfile;