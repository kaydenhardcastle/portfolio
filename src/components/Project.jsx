import React from 'react'

import './Project.scss';

const Project = ({ imageSrc, title, link, description, date }) => {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="project" onClick={handleClick}>
      <p className='title'>{title}</p>
      {date && <p className='date'>{date}</p>}
      {imageSrc && <img src={imageSrc} alt={title} />}
      <p className='description'>{description}</p>
      <p className='link'>
        Click to view
      </p>
    </div>
  );
};

export default Project;