import React from 'react'
import logo from '../../assets/logo.png'
import profile from '../../assets/profile_img.png'
import search_icon from '../../assets/search_icon.svg'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div>
      <div className="Nav-bar">
        <div className="navbar-left">
            <img src={logo} alt="" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Tv Shows</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">New & Popular</a></li>
                <li><a href="#">My List</a></li>
            </ul>
        </div>
        <div className="navbar-right">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
          <p>Kids</p>
        <img src={profile} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
