import axios from 'axios';
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKEND}/api/v1/users/me`, {
                    withCredentials: true
                });
                const userData = {
                    email: res.data.data.email,
                    fullName: res.data.data.fullName,
                    accessToken: res.data.data.accessToken,
                    dpPath: res.data.data.dpPath
                };
                setUser(userData);
            } catch (err) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);



    const login = (email, fullName, accessToken, dpPath) => {
        const userData = {
            'email': email,
            'fullName': fullName,
            'accessToken': accessToken,
            'dpPath': dpPath
        }
        setUser(userData)
    }

    const googleLogin = async (email, fullName, accessToken, dpPath, password) => {
        // check if user exists, if exists just login
        // if user doesn't exists register user
        try {
            // check user exists
            const res = await axios.post(
                `${import.meta.env.VITE_BACKEND}/api/v1/users/checkExistingUser`,
                { email },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer mMURu2QtsK82hQVpB68aru30p1rfFVW5aUqIk3PaTW4jPmK4H7IG32ikMX9AcDbB`,
                    }, withCredentials: true
                }
            )
            console.log('checking user', res)
            // jodi thake login kor
            if (res?.data?.data) {
                try {
                    const loginRes = await axios.post(`${import.meta.env.VITE_BACKEND}/api/v1/users/login`, { "email": email, "password": password }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }, withCredentials: true
                    })
                    login(loginRes.data.data.user.email, loginRes.data.data.user.fullName, loginRes.data.data.accessToken, loginRes.data.data.user.dpPath)
                } catch (error) {
                    console.log(error.response.data.message)
                }
            }

        } catch (error) {
            console.log('Error checking user:', error)
            // jodi user na thake register kor
            try {
                const res = await axios.post(`${import.meta.env.VITE_BACKEND}/api/v1/users/register`,
                    { 'email': email, 'fullName': fullName, 'password': password, dpPath: dpPath },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }, withCredentials: true
                    }
                )
                console.log(res?.data?.data)
                console.log(res)
                try {
                    const loginRes = await axios.post(`${import.meta.env.VITE_BACKEND}/api/v1/users/login`, { "email": email, "password": password }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }, withCredentials: true
                    })
                    login(loginRes.data.data.user.email, loginRes.data.data.user.fullName, loginRes.data.data.accessToken, loginRes.data.data.user.dpPath)
                } catch (error) {
                    console.log(error.response.data.message)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    const logOut = async () => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND}/api/v1/users/logout`, {}, {
                headers: {
                    'Content-Type': 'application/json'
                }, withCredentials: true
            })
            setUser(null)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <AuthContext.Provider value={{ user, login, googleLogin, logOut, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;