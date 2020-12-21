import React from 'react';
import './Main.css'
import About from './About';
import image from '../../resources/omakuva300.jpg';

const Main = () => {
  return (
      <div className="App-Main light">
        <div className='Main-Container'>
          <About id='about' img={aboutInfo.img}/>
        </div>
      </div>
  );
}

const aboutInfo = {
  img: {
    url: image,
    alt: 'Nice picture of me'
  }
}

export default Main;
