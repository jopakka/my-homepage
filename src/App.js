import React, {createContext, useState} from 'react';
import './App.css';
import Header from './components/navbar/Header';
import Main from './components/main/Main';
import Footer from './components/Footer';
import {MainProvider} from './components/contexts/MainContext';

const App = () => {
  return (
    <div className="App">
      <MainProvider>
        <Header pageInfo={headerInfo.pageInfo} links={headerInfo.links} />
        <Main />
        <Footer copyText={footerInfo.crText}/>
      </MainProvider>
    </div>
  );
}

const headerInfo = {
  pageInfo: {
    title: 'Joonas Niemi',
    url: '#',
  },
  links: [
    {url: '#about', title: 'About me'},
    {url: '#projects', title: 'Projects'},
    {url: '#contact', title: 'Contact'},
  ]
}

const footerInfo = {
  crText: 'Joonas Niemi 2020'
}

export default App;
