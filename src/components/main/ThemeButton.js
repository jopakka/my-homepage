import React, {useContext} from 'react';
import './ThemeButton.css';
import {MainContext} from '../contexts/MainContext';
import {FaMoon, FaSun} from 'react-icons/all';

const ThemeButton = () => {
  const {darkTheme, setDarkTheme} = useContext(MainContext);
  const toggleTheme = () => setDarkTheme(!darkTheme)

  return (
      <div className="theme-button">
        <a onClick={toggleTheme}>
          {
            darkTheme ? <FaSun /> : <FaMoon />
          }
        </a>
      </div>
  );
};

export default ThemeButton;
