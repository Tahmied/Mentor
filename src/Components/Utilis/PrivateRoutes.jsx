import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../Authentication/AuthContext';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    if(user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoutes;