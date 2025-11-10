import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Components/Utilis/Header';
import Loader from './Components/Utilis/Loader';

const Root = () => {
    const navigation = useNavigation()
    return (
        <>
        <Header></Header>
        <div className="whole-site-container">
            {
                navigation.state === 'loading' ? <Loader></Loader> : <Outlet></Outlet>
            }
        </div>
        </>
    );
};

export default Root;