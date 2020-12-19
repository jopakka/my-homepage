import React from 'react';
import './NavLinkItem.css';

const NavLinkItem = ({link, clickEvt}) => {
  return (
      <li className='App-NavLinkItem'><a href={link.url} onClick={clickEvt}>{link.title}</a></li>
  );
}

export default NavLinkItem;
