import React from 'react'
import logo from '../../assets/logo.png'
import profile from '../../assets/profile_img.png'
import bell_icon from '../../assets/bell_icon.svg'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {faBellConcierge} from '@fortawesome/free-solid-svg-icons'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'

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
        <FontAwesomeIcon icon={faMagnifyingGlass} className='searchicon'/>
        <FontAwesomeIcon icon={faBellConcierge} />
          <p>Kids</p>
          <div className="profile-icon">
          <img src={profile} alt="" className='profile' />
          <FontAwesomeIcon icon={faCaretDown} className='dropdown' />
           <p className='dropText'><a href="#">SignOut</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
