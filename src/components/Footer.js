import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';

const Footer = ({copyText}) => {
  return (
      <div className="App-Footer">
        <p>&copy; {copyText}</p>
      </div>
  );
};

Footer.propTypes = {
  copyText: PropTypes.string,
};

export default Footer;
