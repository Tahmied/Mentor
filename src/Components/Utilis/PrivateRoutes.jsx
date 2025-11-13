import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Authentication/AuthContext';
import Loader from './Loader';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log('in private route', user)
    const location = useLocation();

    if (loading) return <Loader />;

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};


export default PrivateRoutes;