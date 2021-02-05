import React from 'react';
import './NavLinkItem.css';
import PropTypes from 'prop-types';

const NavLinkItem = ({link, onClickEvt}) => {
  return (
      <li className='App-NavLinkItem'>
        <a href={link.url} onClick={onClickEvt}>{link.title}</a>
      </li>
  );
};

NavLinkItem.defaultProps = {
  onClickEvt: () => {
  },
};

NavLinkItem.propTypes = {
  link: PropTypes.object,
  onClickEvt: PropTypes.func,
};

export default NavLinkItem;
