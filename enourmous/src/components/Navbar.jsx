import React from 'react';
import './Navbar.css'

const Navbar = () => {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <nav className="navbar container" aria-label="Main Navigation">
            <h1 className="navbar__title">Enourmous</h1>
            <div className="navbar__links">
                {navLinks.map((item) => (
                    <a key={item.name} href={item.path} className="navbar__link">
                        {item.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
