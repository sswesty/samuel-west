import React from 'react';
import Logo from '../../assets/img/logo.svg';
import LogoLight from '../../assets/img/logo-light.svg';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => (
    <header className="main-header">
        <a className="brand" href="/">
            <img className="logo-desktop" src={Logo} alt="Logo" />
            <img className="logo-mobile" src={LogoLight} alt="Logo light" />
        </a>

        <nav className="main-nav">
            <ul className="nav-items">
                <li className="nav-trigger">Menu</li>
                <li><HashLink className="nav-item" to="/#work">Work</HashLink></li>
                <li><HashLink className="nav-item" to="/#about">About</HashLink></li>
                <li><HashLink className="nav-item" to="/#contact">Hire me</HashLink></li>
            </ul>
        </nav>
    </header> 
);
 
export default Navbar;