import React from 'react';
import {FaEnvelope, FaFacebookSquare, FaGithubSquare} from 'react-icons/fa';
import './Contact.css';

const Contact = ({id, contacts}) => {
  return (
      <div id={id} className='App-Contact'>
        <h1>Contact</h1>
        <div className='Contact-Container'>
          <a className='Contact-Icon light' href={contacts.facebook} target='_blank' rel='noopener noreferrer'><FaFacebookSquare /></a>
          <a className='Contact-Icon light' href={contacts.github} target='_blank' rel='noopener noreferrer'><FaGithubSquare /></a>
          <a className='Contact-Icon light' href={contacts.email} target='_blank' rel='noopener noreferrer'><FaEnvelope /></a>
        </div>
      </div>
  );
}

export default Contact;
