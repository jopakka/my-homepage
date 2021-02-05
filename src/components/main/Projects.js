import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';
import WindowDimensions from '../hooks/WindowDimensions';

const Projects = ({id, title, projects}) => {
  const {width} = WindowDimensions();

  return (
      <div id={id} className='App-Projects'>
        <h1>{title}</h1>
        {width < 780 && <p style={{textAlign: 'center'}}>(Click image to show more info)</p>}

        <div className='project-container'>
          {projects.map(proj => <ProjectItem
              key={projects.indexOf(proj)}
              title={proj.title}
              desc={proj.desc}
              img={proj.img ? proj.img : 'https://picsum.photos/300'}/>)}
        </div>
      </div>
  );
}

Projects.defaultProps = {
  title: 'Projects',
}

export default Projects;
