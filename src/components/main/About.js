import React from 'react';
import './About.css';

const About = ({id, title, img}) => {
  return (
      <div id={id} className='App-About scrollMargin'>
        <h1>{title}</h1>
        <img className='about-image' src={img.url} alt={img.alt} width={300} height={300}/>
        <div className='about-text'>
          <p>I am second year student from Metropolia University of Applied Sciences studying with mobile solutions major. My interest of coding started few years ago, while my friend was studying game development and we made few games to game jams together. Then after a while I decided that I want to apply study programming and in our first year I liked mobile development most, so I chose that major.</p>
          <p>In first year in Smart IoT-devices we had C-programming and our project was to program Arduino-bot to follow line track, battle on sumo-arena and solve simple maze. On Mobile health application we made Android app with Java. Our project there was food diary. On web techniques and digital media, we had html, CSS, and JavaScript. Our project there was poker and blackjack site, where you could play against simple “ai”. On game development we made game with Unity and C#. We made third person shooter, where player fight against mafia.</p>
          <p>In this second year we had Object-Oriented Programming and Data communication where we did Android app using Kotlin. There our project was word quiz app, where user guesses words from one language to another. Then we study basic concepts of web technology, which includes responsive design with html and CSS, and back-end REST api with Node.js.</p>
        </div>
      </div>
  );
}

About.defaultProps = {
  title: 'About me',
  img: {
    url: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
    alt: 'Picture from randomuser.me'
  }
}

export default About;
