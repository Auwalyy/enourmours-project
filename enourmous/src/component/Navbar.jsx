import React from 'react';
import './Navbar.css'
import logo from '../../public/images/logo.png'

const Navbar = () => {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <div className="container">
             <nav className="navbar" aria-label="Main Navigation">
             <h1 className="navbar__title">Enourmous</h1>
             <img src={logo} className='.navbar__logo' alt="" />
            <div className="navbar__links">
                {navLinks.map((item) => (
                    <a key={item.name} href={item.path} className="navbar__link">
                        {item.name}
                    </a>
                ))}
            </div>
        </nav>
        </div>
    );
};

export default Navbar;
