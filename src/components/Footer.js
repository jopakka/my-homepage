import React from 'react';
import './Footer.css';

const Footer = ({copyText}) => {
  return (
      <div className="App-Footer">
        <p>&copy; {copyText}</p>
      </div>
  );
}

export default Footer;
