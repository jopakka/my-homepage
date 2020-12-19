import React from 'react';
import './Main.css'

const About = ({title, img}) => {
  return (
      <div className="App-About">
        <h1>{title}</h1>
        <img src={img.url} alt={img.alt}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis culpa delectus ducimus ea earum, expedita iure magni molestiae nam nemo neque non numquam porro praesentium quia suscipit voluptatem voluptatum?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis culpa delectus ducimus ea earum, expedita iure magni molestiae nam nemo neque non numquam porro praesentium quia suscipit voluptatem voluptatum?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis culpa delectus ducimus ea earum, expedita iure magni molestiae nam nemo neque non numquam porro praesentium quia suscipit voluptatem voluptatum?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis culpa delectus ducimus ea earum, expedita iure magni molestiae nam nemo neque non numquam porro praesentium quia suscipit voluptatem voluptatum?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis culpa delectus ducimus ea earum, expedita iure magni molestiae nam nemo neque non numquam porro praesentium quia suscipit voluptatem voluptatum?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis culpa delectus ducimus ea earum, expedita iure magni molestiae nam nemo neque non numquam porro praesentium quia suscipit voluptatem voluptatum?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis culpa delectus ducimus ea earum, expedita iure magni molestiae nam nemo neque non numquam porro praesentium quia suscipit voluptatem voluptatum?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis culpa delectus ducimus ea earum, expedita iure magni molestiae nam nemo neque non numquam porro praesentium quia suscipit voluptatem voluptatum?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis culpa delectus ducimus ea earum, expedita iure magni molestiae nam nemo neque non numquam porro praesentium quia suscipit voluptatem voluptatum?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis culpa delectus ducimus ea earum, expedita iure magni molestiae nam nemo neque non numquam porro praesentium quia suscipit voluptatem voluptatum?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis culpa delectus ducimus ea earum, expedita iure magni molestiae nam nemo neque non numquam porro praesentium quia suscipit voluptatem voluptatum?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis culpa delectus ducimus ea earum, expedita iure magni molestiae nam nemo neque non numquam porro praesentium quia suscipit voluptatem voluptatum?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis culpa delectus ducimus ea earum, expedita iure magni molestiae nam nemo neque non numquam porro praesentium quia suscipit voluptatem voluptatum?</p>
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
