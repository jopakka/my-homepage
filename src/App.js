import React from 'react';
import './App.css';
import Header from './components/navbar/Header';
import Main from './components/main/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header pageInfo={headerInfo.pageInfo} links={headerInfo.links} />
      <Main />
      <Footer copyText={footerInfo.crText}/>
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
