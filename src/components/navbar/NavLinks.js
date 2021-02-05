import React from 'react';
import NavLinkItem from './NavLinkItem';
import './NavLinks.css';
import PropTypes from 'prop-types';

const NavLinks = ({links, onClickEvt, className}) => {

  return (
      <div className='App-NavLinks'>
        <ul className={className}>
          {links.map(link => <NavLinkItem key={links.indexOf(link)}
                                          onClick={onClickEvt} link={link}/>)}
        </ul>
      </div>
  );
};

NavLinks.defaultProps = {
  onClickEvt: () => {
  },
};

NavLinks.propTypes = {
  links: PropTypes.array,
  onClickEvt: PropTypes.func,
  className: PropTypes.string,
};

export default NavLinks;
