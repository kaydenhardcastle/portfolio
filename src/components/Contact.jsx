import React, { useState } from 'react';
import { IoClipboardOutline } from 'react-icons/io5';
import './Contact.scss';

const Contact = () => {
  const [emailText, setEmailText] = useState('kayden.hardcastle@gmail.com');
  const [isCopied, setIsCopied] = useState(false);

  const handleEmailClick = async () => {
    if (!navigator.clipboard) {
      // Fallback for browsers without clipboard API
      console.error('Clipboard functionality not available.');
      return;
    }

    try {
      await navigator.clipboard.writeText(emailText);
      setEmailText('Email copied!');
      setIsCopied(true);

      setTimeout(() => {
        setEmailText('kayden.hardcastle@gmail.com');
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <h6>Click below to copy my email to your clipboard!</h6>
      <div className="contact-details-row">
        <span className="label">Email</span>
        <div className="value" onClick={handleEmailClick}>
          <p>{emailText}</p>
          <IoClipboardOutline color={isCopied ? "#ff0000" : "#4caf50"} size={20} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
