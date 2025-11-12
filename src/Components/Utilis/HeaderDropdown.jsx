import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Authentication/AuthContext";

const HeaderDropdown = ({ user, setIsDropdownActive }) => {
  const { logOut } = useContext(AuthContext);

  function menuClicked() {
    setIsDropdownActive(false);
  }

  function handleLogout() {
    logOut();
  }

  return (
    <div className="dropdown-menu">
      <div className="dropdown-header">
        <img 
          src={user.photoURL || '/assets/usericon.svg'} 
          alt="User" 
          className="dropdown-avatar" 
        />
        <div className="user-info">
          <span className="user-name">{user.name}</span>
        </div>
      </div>
      <div className="dropdown-divider"></div>
      <Link onClick={menuClicked} to={'/profile'} className="dropdown-item">
        <span>My Profile</span>
      </Link>
      <Link onClick={menuClicked} to={'/edit-profile'} className="dropdown-item">
        <span>Edit Profile</span>
      </Link>
      <div className="dropdown-divider"></div>
      <button onClick={handleLogout} className="dropdown-item logout-btn">
        <span>Logout</span>
      </button>
    </div>
  );
};

export default HeaderDropdown;