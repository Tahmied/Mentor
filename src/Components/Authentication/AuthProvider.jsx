import axios from 'axios';
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKEND}/api/v1/users/me`, {
                    withCredentials: true
                })
                const userData = {
                    'email': res.data.data.email,
                    'fullName': res.data.data.fullName,
                    'accessToken': res.data.data.accessToken,
                    'dpPath': res.data.data.dpPath
                }
                setUser(userData)
            } catch (error) {
                console.log(error)
                setUser(null)
            }
        }
        checkAuth()
    }, [])


    const login = (email, fullName, accessToken, dpPath) => {
        const userData = {
            'email': email,
            'fullName': fullName,
            'accessToken': accessToken,
            'dpPath': dpPath
        }
        setUser(userData)
    }

    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;