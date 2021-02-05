import React from 'react';
import './About.css';
import PropTypes from 'prop-types';

const About = ({id, img, imgInfo, texts}) => {
  return (
      <div id={id} className='App-About'>
        <h1>About me</h1>
        <img className='about-image' src={img} alt={imgInfo.alt} width={300}
             height={300}/>
        <div className='about-text'>
          {texts.map(text => <p key={texts.indexOf(text)}>{text}</p>)}
        </div>
      </div>
  );
};

About.defaultProps = {
  img: {
    url: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
    alt: 'Picture from randomuser.me',
  },
};

About.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  imgInfo: PropTypes.object,
  texts: PropTypes.array,
};

export default About;
