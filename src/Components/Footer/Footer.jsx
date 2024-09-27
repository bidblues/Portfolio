import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logow1.png'
import user_icon from '../../assets/user_icon.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" className='foot-img'/>
            </div>

           
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">2024 Bidyut Gogoi. All rights reserved</p>
            <div className="footer-bottom-right">
            </div>
        </div>
    </div>
  )
}

export default Footer