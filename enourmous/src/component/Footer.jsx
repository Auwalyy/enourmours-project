import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
  

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul className="ul">
            <li className="li"><a className="a" href="#">Home</a></li>
            <li className="li"><a className="a" href="#about">About</a></li>
            <li className="li"><a className="a" href="#about">Services</a></li>
            <li className="li"><a className="a" href="#about">Contact Us</a></li>
            <li className="li"><a className="a" href="#about">Blog</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@enourmous.com</p>
          <p>Phone: +234 000 0000</p>
          <p>Address: 123 Digitaly only</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Enourmous. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
