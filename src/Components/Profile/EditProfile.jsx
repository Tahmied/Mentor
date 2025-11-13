import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Authentication/AuthContext';
import Loader from '../Utilis/Loader';
import './Profile.css';

const EditProfile = () => {
    const navigate = useNavigate();
    const { user, login } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        fullName: '',
        dpPath: ''
    });
    
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setFormData({
                fullName: user.fullName || '',
                dpPath: user.dpPath || ''
            });
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_BACKEND}/api/v1/users/update-profile`,
                {
                    fullName: formData.fullName,
                    dpPath: formData.dpPath
                },
                {
                    withCredentials: true
                }
            );

            const updatedUser = res.data.data;

            login(
                updatedUser.email,
                updatedUser.fullName,
                user.accessToken,
                updatedUser.dpPath
            );

            setIsLoading(false);
            Swal.fire({
                title: 'Profile Updated Successfully',
                icon: 'success'
            });
            navigate('/profile');

        } catch (err) {
            setIsLoading(false);
            Swal.fire({
                title: 'Couldn\'t update your profile',
                icon: 'error',
                text: err.response?.data?.message || err.message
            });
        }
    };

    if (isLoading) {
        return <Loader />;
    }
    
    if (!user) {
        return <Loader />;
    }

    return (
        <>
            <Helmet>
                <title>Edit Profile | Mentor</title>
            </Helmet>
            <div className="profile-container">
                <div className="profile-header">
                    <h1>Edit Profile</h1>
                    <div className="profile-header-actions">
                        <button onClick={() => navigate(-1)} className="cancel-btn">
                            Cancel
                        </button>
                        <button className="save-btn" onClick={handleSubmit}>
                            Save Changes
                        </button>
                    </div>
                </div>

                <form className="edit-form" onSubmit={handleSubmit}>
                    <div className="form-section-myprofile">
                        <div className="photo-edit-section">
                            <div className="photo-container">
                                <img
                                    src={formData.dpPath || '/assets/usericon.svg'}
                                    alt="Profile"
                                    className="profile-photo"
                                />
                            </div>
                            <input
                                type="url"
                                name="dpPath"
                                value={formData.dpPath}
                                onChange={handleChange}
                                placeholder="Enter image URL"
                                className="photo-url-input"
                            />
                        </div>
                    </div>

                    <div className="form-section-myprofile">
                        <div className="form-group">
                            <label htmlFor="fullName">Display Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
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