import { useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)


    const login = (email, fullName, accessToken, dpPath) => {
        const userData = {
            'email' : email,
            'fullName' : fullName,
            'accessToken' : accessToken,
            'dpPath' : dpPath
        }
        setUser(userData)
    }

    return (
       <AuthContext.Provider value={{user, login}}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;