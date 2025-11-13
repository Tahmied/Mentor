import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Authentication/AuthContext';

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};


export default PrivateRoutes;