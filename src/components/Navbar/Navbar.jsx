import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import logo from "../../assets/logo.png";
import profile from "../../assets/profile_img.png";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faMagnifyingGlass,
  faBellConcierge,
  faCaretDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenuOpen] = useState(false);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menu);
  };

  return (
    <div>
      <div className="Nav-bar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" />
          <div className={`menu ${menu ? "active" : ""}`}>
            <ul className={menu ? "active" : ""}>
            <li>
                <Link to={'/'}>Home</Link> 
              </li>
              <li>
                <a href="#MoviesSection">Tv Shows</a>
              </li>
              <li>
                <a href="#MoviesSection">Movies</a>
              </li>
              <li>
                <a href="#MoviesSection">New & Popular</a>
              </li>
              <li>
               <Link to={'/ProfileSettings'}>My List</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-right">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchicon" />
          <FontAwesomeIcon icon={faBellConcierge} className="bellicon" />
          <p>Kids</p>
          <div className="profile-icon">
            <img src={profile} alt="Profile" className="profile" />
            <FontAwesomeIcon icon={faCaretDown} className="dropdown" />
            <p className="dropText" onClick={handleSignOut}>
              SignOut
            </p>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
