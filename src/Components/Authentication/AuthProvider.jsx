import axios from 'axios';
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const checkAuth = async () => {
            const accessToken = localStorage.getItem('accessToken');
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKEND}/api/v1/users/me`, {
                    withCredentials: true,
                    'Authorization': `Bearer ${accessToken}`
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
                    
                }
            }

        } catch (error) {
           
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
                
                try {
                    const loginRes = await axios.post(`${import.meta.env.VITE_BACKEND}/api/v1/users/login`, { "email": email, "password": password }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }, withCredentials: true
                    })
                    login(loginRes.data.data.user.email, loginRes.data.data.user.fullName, loginRes.data.data.accessToken, loginRes.data.data.user.dpPath)
                } catch (error) {
                    
                }
            } catch (error) {
                
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
           
        } catch (error) {
            
        }
    }


    return (
        <AuthContext.Provider value={{ user, login, googleLogin, logOut, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;