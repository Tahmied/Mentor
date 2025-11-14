import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Authentication/AuthContext';
import './dropdown.css';
import HeaderDropdown from './HeaderDropdown';
import ThemeToggle from './ThemeToggle';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const { user } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedinUser, setUser] = useState(null);

  useEffect(() => {
    if (user) {
      const userData = {
        name: user.fullName,
        photoURL: user.dpPath
      }
      setUser(userData);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.classList.add('no-scroll');
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.classList.remove('no-scroll');
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownActive && !event.target.closest('.profile-nav') && !event.target.closest('.dropdown-menu')) {
        setIsDropdownActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownActive]);

  let navItems;

  if (isLoggedIn) {
    navItems = [
      { name: 'Home', path: '/' },
      { name: 'All Courses', path: '/courses' },
      { name: 'Dashboard', path: '/Dashboard' },
      { name: 'My Courses', path: '/my-courses' },
      { name: 'My Enrollments', path: '/my-enrollments' }
    ];
  } else {
    navItems = [
      { name: 'Home', path: '/' },
      { name: 'All Courses', path: '/courses' }
    ];
  }



  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handleStartFreeClick = () => {

  };

  const toggleDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  return (
    <>
      <header className={`learnova-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <NavLink to={'/'}>
              {
                isDarkMode ? (<img src="/Header/logo-dark.png" alt="mentor" className="logo-image" />) : (<img src="/Header/logo.png" alt="mentor" className="logo-image" />)
            }

            </NavLink>
          </div>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></ThemeToggle>
            {isLoggedIn ? (
              <div className="profile-wrapper">
                <div onClick={toggleDropdown} className="profile-nav desktop-profile">
                  <img src={loggedinUser.photoURL} alt={loggedinUser.name} className="profile-pic" />
                </div>
                {isDropdownActive && (
                  <HeaderDropdown
                    user={loggedinUser}
                    setIsDropdownActive={setIsDropdownActive}
                  />
                )}
              </div>
            ) : (
              <NavLink to={'/login'}>
                <button className="start-free-btn desktop-btn" onClick={handleStartFreeClick}>
                  Start Free
                  <svg className="arrow-icon" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3 L13 8 L8 13 M13 8 L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </NavLink>
            )}

            <label className="hamburger">
              <input
                type="checkbox"
                checked={isMenuOpen}
                onChange={(e) => setIsMenuOpen(e.target.checked)}
              />
              <svg viewBox="0 0 32 32">
                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)} />

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              style={{ transitionDelay: isMenuOpen ? `${index * 50 + 100}ms` : '0ms' }}
              onClick={handleNavClick}
            >
              {item.name}
            </NavLink>
          ))}

          {isLoggedIn ? (
            <div>

            </div>
          ) : (
            <NavLink to={'/login'}>
              <button
                className="start-free-btn"
                style={{ transitionDelay: isMenuOpen ? `${navItems.length * 50 + 100}ms` : '0ms' }}
                onClick={handleStartFreeClick}
              >
                Start Free
                <svg className="arrow-icon" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3 L13 8 L8 13 M13 8 L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </NavLink>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;