import React, {useState} from 'react';
import './Project.css';

const ProjectItem = ({title, desc, img}) => {
  const [isActive, setActive] = useState(true);
  const toggleVisible = () => setActive(!isActive);
  const visibleOn = () => setActive(false)
  const visibleOff = () => setActive(true)

  return(
      <div className='Project' onClick={toggleVisible} onMouseEnter={visibleOn}
           onMouseLeave={visibleOff}>
        <img src={img} alt="Project background" width={280} height={280}/>
        <div className='Project-Content'>
          <h3>{title}</h3>
          <p className={isActive ? 'Project-Content-Hidden' : null}>{desc}</p>
        </div>
      </div>
  )
}

export default ProjectItem;
