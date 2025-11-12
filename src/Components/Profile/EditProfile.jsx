import { updateProfile } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Authentication/AuthContext';

import Loader from '../Utilis/Loader';
import './Profile.css';

const EditProfile = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [formData, setFormData] = useState({
        displayName: user.displayName,
        photo: user.photoURL
    });
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        updateProfile(user, {
            displayName: formData.displayName,
            photoURL: formData.photo,
        })
            .then(() => {
                setIsLoading(false)
                Swal.fire({
                    title: 'Profile Updated Successfully',
                    icon: 'success'
                })
            }).catch((err) => {
                Swal.fire({
                    title: 'Couldn\'t update your profile',
                    icon: 'error',
                    text: err
                })
            })
    };

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <>
            <Helmet>
                <title>Edit Profile | ToyTopia</title>
            </Helmet>
            <div className="profile-container">
                <div className="profile-header">
                    <h1>Edit Profile</h1>
                    <div className="header-actions">
                        <button onClick={() => window.history.length > 1 ? navigate(-1) : navigate('/')} className="cancel-btn">
                            Cancel
                        </button>
                        <button className="save-btn" onClick={handleSubmit}>
                            Save Changes
                        </button>
                    </div>
                </div>

                <form className="edit-form" onSubmit={handleSubmit}>
                    <div className="form-section">
                        <div className="photo-edit-section">
                            <div className="photo-container">
                                <img
                                    src={formData.photo || '/default-avatar.png'}
                                    alt="Profile"
                                    className="profile-photo"
                                />
                            </div>
                            <input
                                type="url"
                                name="photo"
                                value={formData.photo}
                                onChange={handleChange}
                                placeholder="Enter image URL"
                                className="photo-url-input"
                            />
                        </div>
                    </div>

                    <div className="form-section">
                        <div className="form-group">
                            <label htmlFor="displayName">Display Name</label>
                            <input
                                type="text"
                                id="displayName"
                                name="displayName"
                                value={formData.displayName}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>
                    </div>

                </form>
            </div>
        </>

    );
};

export default EditProfile;