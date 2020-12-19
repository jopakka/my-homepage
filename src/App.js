import React from 'react';
import './App.css';
import Header from './components/navbar/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header title={headerInfo.title} links={headerInfo.links}/>
      <Main />
      <Footer copyText={footerInfo.crText}/>
    </div>
  );
}

const headerInfo = {
  title: 'Joonas Niemi',
  links: [
    {id: 0, url: '#', title: 'Home'},
    {id: 1, url: '#projects', title: 'Projects'},
    {id: 2, url: '#contact', title: 'Contact me'},
  ]
}

const footerInfo = {
  crText: 'Joonas Niemi 2020'
}

export default App;
