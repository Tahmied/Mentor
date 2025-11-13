import axios from 'axios';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { auth } from '../../Utilis/firebase.init';
import Loader from '../../Utilis/Loader';
import { AuthContext } from '../AuthContext';
import './login.css';

const googleAuthProvider = new GoogleAuthProvider()

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false)
    const { login, googleLogin } = useContext(AuthContext)

    function handleGoogleLogin() {
        setLoading(true)
        signInWithPopup(auth, googleAuthProvider)
            .then(async (res) => {
                const email = res.user.email
                const uid = res.user.uid
                const name = res.user.displayName
                const dpPath = res.user.photoURL
                const accessToken = res.user.accessToken
                await googleLogin(email, name, accessToken, dpPath, uid)
                setLoading(false)
                Swal.fire({
                    title: 'Login Successfull',
                    text: 'You have been logged in properly',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1000
                }).then(() => {
                    navigate(from, { replace: true });
                })
            })
            .catch(() => {
                Swal.fire({
                    title: 'Login Faild',
                    text: 'Account is not registered or wrong email/pass',
                    icon: 'error',
                    showConfirmButton: 'false'
                });
                setLoading(false)
            })
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
            setLoading(false)
            Swal.fire({
                title: 'Login Successfull',
                text: 'You have been logged in properly',
                icon: 'success',
                showConfirmButton: false,
                timer: 1000
            }).then(() => {
                navigate(from, { replace: true });
            })
        } catch (error) {
            console.log(error.response.data.message)
            setLoading(false)
            Swal.fire({
                title: 'Login Faild',
                text: 'Account is not registered or wrong email/pass',
                icon: 'error',
                showConfirmButton: 'false'
            });
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
            <Helmet>
                <title>Sign In | Mentor</title>
            </Helmet>
            
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
                                Don't have an account? <Link to={'/register'} state={{ from: location.state?.from }}>Sign up here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;