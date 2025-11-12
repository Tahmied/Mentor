import axios from 'axios';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Loader from '../../Utilis/Loader';
import { AuthContext } from '../AuthContext';
import './login.css';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false)
    const {login} = useContext(AuthContext)

    function handleGoogleLogin() {

    }

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        const email = e.target.email.value
        const pass = e.target.password.value

        const loginDetails = {
            "email": email,
            "password": pass
        }
        try {
            const loginRes = await axios.post(`${import.meta.env.VITE_BACKEND}/api/v1/users/login`, loginDetails, {
                headers: {
                    'Content-Type': 'application/json'
                }, withCredentials: true
            })
            login(loginRes.data.data.user.email, loginRes.data.data.user.fullName, loginRes.data.data.accessToken, loginRes.data.data.user.dpPath)
        } catch (error) {
            console.log(error.response.data.message)
            setLoading(false)
        }
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const saveEmail = (email) => {
        setEmail(email)
        localStorage.setItem('savedEmail', email)
    }

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <>
            {/* <Helmet>
                <title>Sign In | ToyTopia</title>
            </Helmet> */}
            <section className="login">
                <div className="login-container">
                    <div className="login-left">
                        <h1 className="welcome-text">Unlock Your Learning Adventure!</h1>
                        <p className="subtitle">
                            Log in to access courses, skill-building resources, and a world of knowledge!
                        </p>
                        <ul className="features">
                            <li><i className="fas fa-check-circle"></i> Interactive courses across various subjects</li>
                            <li><i className="fas fa-check-circle"></i> Learn at your own pace, anytime, anywhere</li>
                            <li><i className="fas fa-check-circle"></i> Support from expert instructors whenever you need guidance</li>
                        </ul>
                    </div>


                    <div className="login-right">
                        <div className="login-header">
                            <h2 className="login-title">Sign In</h2>
                            <p className="login-subtitle">Enter your credentials to access your account</p>
                        </div>

                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email Address</label>
                                <div className="input-with-icon">
                                    <i className="fas fa-envelope input-icon"></i>
                                    <input
                                        name='email'
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="name@email.com"
                                        required
                                        value={email}
                                        onChange={(e) => saveEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="password">Password</label>
                                <div className="input-with-icon">
                                    <i className="fas fa-lock input-icon"></i>
                                    <input
                                        name='password'
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        className="form-control"
                                        placeholder="••••••••"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <i
                                        className={showPassword ? 'fas fa-eye-slash password-toggle' : 'fas fa-eye password-toggle'}
                                        onClick={handleTogglePassword}
                                    ></i>
                                </div>
                            </div>

                            <div className="form-options">
                                <Link to={'/forgot-password'} className="forgot-password">Forgot password?</Link>
                            </div>

                            <button type="submit" className="login-button">Sign In</button>

                            <div className="divider"><span>Or continue with</span></div>

                            <div className="social-login">
                                <button onClick={handleGoogleLogin} type="button" className="social-button">
                                    <i className="fab fa-google"></i> Google
                                </button>
                            </div>

                            <div className="signup-link">
                                Don't have an account? <Link to={'/register'}>Sign up here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;