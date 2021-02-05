import React, {useState} from 'react';
import './Header.css';
import NavLinks from './NavLinks';
import {FaBars} from 'react-icons/fa';
import windowDimensions from '../hooks/WindowDimensions';
import ThemeButton from '../main/ThemeButton';

const Header = ({pageInfo, links, navId}) => {
  const {width} = windowDimensions();
  const [isActive, setActive] = useState(false);
  const toggleVisibility = () => setActive(!isActive);

  if(width >= 780 && isActive) {
    setActive(false);
  }

  return (
      <div id={navId} className="App-Header">
        <a href={pageInfo.url} onClick={() => setActive(false)}>{pageInfo.title}</a>
        <ThemeButton />
        <FaBars className='App-Bars' onClick={toggleVisibility}/>
        <NavLinks links={links} onClick={() => setActive(false)} className={isActive ? 'visible' : null}/>
      </div>
  );
}

export default Header;
