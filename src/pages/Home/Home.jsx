import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero_banner from '../../assets/hero_banner.jpg'
import Hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero-banner">
        <img src={Hero_banner} alt="" className='bannerimg'/>
        <div className="hero-title">
          <img src={Hero_title} alt="" className='titleimage'/>
          <p>When a person want to make their own netflix intro,<br />
          they find a web-based video editor to change their life forever</p>
          <button className='playbtn'><img src={play_icon} alt="" />Play</button>
          <button className='infobtn'><img src={info_icon} alt="" />MoreInfo</button>
        </div>
      </div>

    </div>
  )
}

export default Home
