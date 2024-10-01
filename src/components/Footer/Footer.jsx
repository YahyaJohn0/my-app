
import React from 'react'
import './Footer.css'
import youtube from '../../assets/youtube_icon.png'
import twitter from '../../assets/twitter_icon.png'
import instagram from '../../assets/instagram_icon.png'
import facebook from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='Footer'> 
      <div className="Footer_icons">
        <img src={youtube} alt="" />
        <img src={twitter} alt="" />
        <img src={instagram} alt="" />
        <img src={facebook} alt="" />
      </div>
      <ul>
      <li>FAQ</li>
      <li>Help Center</li>
      <li>Account</li>
      <li>Investor Relations</li>
      <li>Ways to Watch</li>
      <li>Terms of Use</li>
      <li>contact</li>
      <li>Privacy</li>
      <li>Legal Notices</li>
      <li>English</li>
      <li> Español</li>
      <li> Français</li>
      <li>Deutsch</li>
      <li>Italiano</li>
      <li>Pashto</li>
      <li>Hindi</li>
      </ul>
      <div className="copyrighttext">
      <p id='left'>© 2024 Netflix, Inc</p>
      <p id='right'>Power By Yahya John</p>
      </div>
    </div>
  )
}

export default Footer
