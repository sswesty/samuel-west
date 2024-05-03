import React from 'react';
import Logo from '../../assets/img/logo.svg';
import LogoLight from '../../assets/img/logo-light.svg';

const Navbar = () => (
    <header className="main-header">
        <a className="brand" href="/">
            <img className="logo-desktop" src={Logo} alt="Logo" />
            <img className="logo-mobile" src={LogoLight} alt="Logo light" />
        </a>

        <nav className="main-nav">
            <ul className="nav-items">
                <li className="nav-trigger">Menu</li>
                <li><a className="nav-item" href="#work">Work</a></li>
                <li><a className="nav-item" href="#about">About</a></li>
                <li><a className="nav-item" href="#contact">Hire me</a></li>
            </ul>
        </nav>
    </header> 
);
 
export default Navbar;