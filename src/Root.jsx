import { useEffect, useState } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Components/Utilis/Footer';
import Header from './Components/Utilis/Header';
import Loader from './Components/Utilis/Loader';
import './Components/Utilis/darkmode.css';

const Root = () => {
    const navigation = useNavigation();
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Initialize dark mode from localStorage on mount
    useEffect(() => {
        const storedMode = localStorage.getItem('darkMode');
        if (storedMode === 'true') {
            setIsDarkMode(true);
        }
    }, []);

    // Toggle dark-mode class on body whenever isDarkMode changes
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        // Save to localStorage
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);

    return (
        <>
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Header>
            <div className="whole-site-container">
                {
                    navigation.state === 'loading' ? <Loader></Loader> : <Outlet></Outlet>
                }
            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;