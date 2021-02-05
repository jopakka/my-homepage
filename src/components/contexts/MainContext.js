import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';

const MainContext = createContext({});
const MainProvider = ({children}) => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
      <MainContext.Provider value={{darkTheme, setDarkTheme}}>
        {children}
      </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.node,
};

export {MainContext, MainProvider};
