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
    {id: 0, url: '#about', title: 'About me'},
    {id: 1, url: '#projects', title: 'Projects'},
    {id: 2, url: '#contact', title: 'Contact'},
  ]
}

const footerInfo = {
  crText: 'Joonas Niemi 2020'
}

export default App;
