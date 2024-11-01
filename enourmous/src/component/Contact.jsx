import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div id="contact" className="contact-us">
      <h3>Get in touch</h3>
      <form className="contact-form">
        <input type="email" placeholder="your Email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Contact;
