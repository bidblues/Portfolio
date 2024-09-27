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
                    <p>Results-driven Network Administrator with over 3 years of experience in managing and securing IT environments.
                        Proficient in systems configuration, network administration, and troubleshooting across both Windows and Linux
                        Systems. Skilled in maintaining network infrastructures, including routing, switching, and firewall configurations.
                        Committed to optimizing system performance and implementing robust security protocols. Strong communicator
                        with a collaborative approach to resolving technical issues and supporting cross-functional teams.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>Networking</p><hr style={{width:"65%"}}/></div>
                    <div className="about-skill"><p>C++</p><hr style={{width:"35%"}}/></div>
                    <div className="about-skill"><p>Linux/Windows</p><hr style={{width:"75%"}}/></div>

      
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