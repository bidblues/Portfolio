import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import user from '../../assets/user.png'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className= "about-sections">
            <div className="about-left">
                <img src={user} alt="" class="imghover" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Welcome to our website! We are a passionate team dedicated to [describe your field, e.g., web development, design, technology, etc.]. Our mission is to deliver exceptional quality and innovative solutions tailored to meet the unique needs of our clients. With years of experience and a commitment to staying at the forefront of industry trends, we pride ourselves on our ability to transform ideas into reality. Whether you’re looking for [specific services, e.g., bespoke web applications, creative design solutions, or cutting-edge technology development], we are here to help you succeed. Explore our portfolio, learn more about what we do, and let's create something amazing together!</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>React</p><hr style={{width:"65%"}}/></div>
                    <div className="about-skill"><p>C++</p><hr style={{width:"35%"}}/></div>
      
                </div>
            </div>
        </div>

        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            
            <hr />
            
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            
            <hr />
            
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            

        </div>
    </div>
  )
}

export default About