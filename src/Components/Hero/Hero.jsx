import React from 'react'
import './Hero.css'
import user from '../../assets/user.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={user} alt="" />
      <h1><span>Hey , This is a profile</span> </h1>
      <p>Life's all about making memories, and I’m glad I can share mine with you. Let's make this one count!</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero