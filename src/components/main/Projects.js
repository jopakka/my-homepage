import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';
import windowDimensions from '../hooks/windowDimensions';

const Projects = ({id, title, projects}) => {
  const {width} = windowDimensions();

  return (
      <div id={id} className='App-Projects'>
        <h1>{title}</h1>
        <p style={{textAlign: 'center', display: width < 780 ? 'block' : 'none'}}>(Click image to show more info)</p>
        <div className='project-container'>
          {projects.map(proj => <ProjectItem
              key={projects.indexOf(proj)}
              title={proj.title}
              desc={proj.desc}
              img={proj.img}/>)}
        </div>
      </div>
  );
}

Projects.defaultProps = {
  title: 'Projects',
}

export default Projects;
