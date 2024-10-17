import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import logo from '../../assets/logo.png';
import profile from '../../assets/profile_img.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBellConcierge, faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const navigate = useNavigate(); 
    const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

    const handleSignOut = () => {
        localStorage.removeItem('token'); 
        navigate('/login'); 
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle menu visibility
    };

    return (
        <div>
            <div className="Nav-bar">
                <div className="navbar-left">
                    <img src={logo} alt="Logo" />
                    <div className={`menu ${menuOpen ? 'active' : ''}`}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Tv Shows</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">New & Popular</a></li>
                            <li><a href="#">My List</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-right">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='searchicon' />
                    <FontAwesomeIcon icon={faBellConcierge} />
                    <p>Kids</p>
                    <div className="profile-icon">
                        <img src={profile} alt="Profile" className='profile' />
                        <FontAwesomeIcon icon={faCaretDown} className='dropdown' />
                        <p className='dropText' onClick={handleSignOut}>Sign Out</p>
                    </div>
                    <div className="hamburger" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
