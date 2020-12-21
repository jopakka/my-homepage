import React from 'react';
import NavLinkItem from './NavLinkItem';
import './NavLinks.css';

const NavLinks = ({links, clickEvt, className}) => {

  return (
      <div className='App-NavLinks'>
        <ul className={className}>
          {links.map(link => <NavLinkItem key={links.indexOf(link)} clickEvt={clickEvt} link={link}/>)}
        </ul>
      </div>
  );
};

export default NavLinks;
