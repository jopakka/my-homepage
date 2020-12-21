import React from 'react';
import './Main.css'
import About from './About';
import Projects from './Projects';
import image from '../../resources/omakuva300.jpg';
import Contact from './Contact';

const Main = () => {
  return (
      <div className="App-Main light">
        <div className='Main-Container'>
          <About id='about' img={aboutInfo.img}/>
          <Projects id='projects' projects={projects} />
          <Contact id='contact' contacts={contacts} />
        </div>
      </div>
  );
}

const aboutInfo = {
  img: {
    url: image,
    alt: 'Nice picture of me'
  },
}

const projects = [
  {title: 'Game long title not long enough', desc: 'This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. This is a game project. ', img: 'https://picsum.photos/200/200'},
  {title: 'Software', desc: 'This is a software project. This is a software project. This is a software project. This is a software project. ', img: 'https://picsum.photos/200/300'},
  {title: 'Mobile', desc: 'This is a mobile project', img: 'https://picsum.photos/300/200'},
  {title: 'Game', desc: 'This is an another game project', img: 'https://picsum.photos/300/300'},
];

const contacts = {
  facebook: 'https://www.facebook.com/joonasn',
  github: 'https://github.com/jopakka',
  email: 'mailto:joonas.niemi9@gmail.com'
}

export default Main;
