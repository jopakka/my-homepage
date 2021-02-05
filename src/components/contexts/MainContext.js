import React, {createContext, useState} from 'react';

const MainContext = createContext({});
const MainProvider = ({children}) => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
      <MainContext.Provider value={{darkTheme, setDarkTheme}}>
        {children}
      </MainContext.Provider>
  );
};

export {MainContext, MainProvider};
