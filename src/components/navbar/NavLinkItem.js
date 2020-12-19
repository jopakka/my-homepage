import React from 'react';
import './NavLinkItem.css';

const NavLinkItem = ({link}) => {
  return (
      <li className='App-NavLinkItem'><a href={link.url}>{link.title}</a></li>
  );
}

export default NavLinkItem;
