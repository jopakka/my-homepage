import React from 'react';
import './NavLinkItem.css';

const NavLinkItem = ({link, onClick}) => {
  return (
      <li className='App-NavLinkItem'><a href={link.url} onClick={onClick}>{link.title}</a></li>
  );
}

export default NavLinkItem;
