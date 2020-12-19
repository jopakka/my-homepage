import React from 'react';
import NavLinkItem from './NavLinkItem';
import './NavLinks.css';

const NavLinks = ({links, className}) => {

  return (
      <div className='App-NavLinks'>
        <ul className={className}>
          {links.map(link => <NavLinkItem key={link.id} link={link}/>)}
        </ul>
      </div>
  );
};

export default NavLinks;
