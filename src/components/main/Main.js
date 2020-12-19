import React from 'react';
import './Main.css'
import About from './About';

const Main = () => {
  return (
      <div className="App-Main">
        <About img={aboutInfo.img} />
      </div>
  );
}

const aboutInfo = {
  img: {
    url: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
    alt: 'Nice picture of me'
  }
}

export default Main;
