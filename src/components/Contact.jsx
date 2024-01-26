import React from 'react';
import { IoClipboardOutline } from 'react-icons/io5';

import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <h6>Click below to copy my email to your clipboard!</h6>
      <div className="contact-details-row">
        <span className="label">Email</span>
        <div className="value">
          <p>kayden.hardcastle@gmail.com</p>
          <IoClipboardOutline color="#4caf50" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
