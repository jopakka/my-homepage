import React, {useContext} from 'react';
import {
  FaEnvelopeSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from 'react-icons/fa';
import './Contact.css';
import {MainContext} from '../contexts/MainContext';
import PropTypes from "prop-types"

const Contact = ({id, contacts}) => {
  const {darkTheme} = useContext(MainContext)

  const theme = "Contact-Icon " + (darkTheme ? "dark" : "light")

  return (
      <div id={id} className='App-Contact'>
        <h1>Contact</h1>
        <div className='Contact-Container'>
          <a className={theme} href={contacts.linkedin}
             target='_blank' rel='noopener noreferrer'><FaLinkedin/></a>
          <a className={theme} href={contacts.github}
             target='_blank' rel='noopener noreferrer'><FaGithubSquare/></a>
          <a className={theme} href={contacts.facebook}
             target='_blank' rel='noopener noreferrer'><FaFacebookSquare/></a>
          <a className={theme} href={contacts.email}
             target='_blank' rel='noopener noreferrer'><FaEnvelopeSquare/></a>
        </div>
      </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  contacts: PropTypes.object
}

export default Contact;
