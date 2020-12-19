import React, {useState} from 'react';
import './Header.css'
import NavLinks from './NavLinks';
import {FaBars} from 'react-icons/fa';

const Header = ({title, links}) => {
  const [isActive, setActive] = useState(false);
  const toggleVisibility = () => setActive(!isActive);

  const navbarResize = (evt) => {
    evt.preventDefault()
    if(window.innerWidth >= 780) {
      setActive(false);
    }
  }

  window.addEventListener('resize', navbarResize);

  return (
      <div className="App-Header">
        <h1>{title}</h1>
        <FaBars className='App-Bars' onClick={toggleVisibility}/>
        <NavLinks links={links} className={isActive ? 'responsive-nav' : null}/>
      </div>
  );
}

export default Header;
