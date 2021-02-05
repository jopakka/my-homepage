import React, {useContext} from 'react';
import './Main.css';
import About from './About';
import Projects from './Projects';
import image from '../../resources/omakuva300.jpg';
import Contact from './Contact';
import {projects, about, contacts} from '../../resources/details.json';
import {MainContext} from '../contexts/MainContext';

const Main = () => {
  const {darkTheme} = useContext(MainContext)
  return (
      <div className={'App-Main ' + (darkTheme ? "dark" : "light")}>
        <div className='Main-Container'>
          <About id='about' imgInfo={about.img} img={image} texts={about.texts}/>
          <Projects id='projects' projects={projects} />
          <Contact id='contact' contacts={contacts} />
        </div>
      </div>
  );
}

export default Main;
