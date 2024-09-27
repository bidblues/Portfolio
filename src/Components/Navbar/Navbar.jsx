import React, { useRef, useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logow1.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    };

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    };

    const handleScroll = () => {
        setScrolled(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <img src={logo} alt="" className='imgcontrol' />
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li><AnchorLink className='anchor-link' offset={50}href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={120} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={120} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={120} href='#work'><p onClick={() => setMenu("work")}>Work</p></AnchorLink>{menu === "work" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={120} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt='' /> : <></>}</li>
            </ul>

            <div className="nav-connect">
              <AnchorLink className='anchor-link' offset={120} href='#contact'><p onClick={() => setMenu("contact")}>Connect With Me</p></AnchorLink>
              </div>
        </div>
    );
};

export default Navbar;
