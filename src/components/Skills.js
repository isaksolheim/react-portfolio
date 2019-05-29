import React from 'react';

function Skills() {
  return(
    <div className="skills-container" id="skills">
      <div id="bg" />
      <h1>Skills</h1>
      <h2>Front-end</h2>
      <div className="skills-category">
        <div className="skills-card">
          <i className="fab fa-js fa-4x" />
          <p className="skills-card-text">JavaScript</p>
        </div>
        <div className="skills-card">
          <i className="fab fa-react fa-4x" />
          <p className="skills-card-text">React</p>
        </div>
        <div className="skills-card">
          <i className="fab fa-html5 fa-4x" />
          <p className="skills-card-text">HTML5</p>
        </div>
        <div className="skills-card">
          <i className="fab fa-css3-alt fa-4x" />
          <p className="skills-card-text">CSS3</p>
        </div>
        <div className="skills-card">
          <i className="fab fa-sass fa-4x" />
          <p className="skills-card-text">Sass</p>
        </div>
      </div>
      <h2>Back-end</h2>
      <div className="skills-category">
        <div className="skills-card">
          <i className="fab fa-python fa-4x" />
          <p className="skills-card-text">Python</p>
        </div>
        <div className="skills-card">
          <i className="fas fa-fire fa-4x" />
          <p className="skills-card-text">Firebase</p>
        </div>
      </div>
      <h2>Version control</h2>
      <div className="skills-category">
        <div className="skills-card">
          <i className="fab fa-git fa-4x" />
          <p className="skills-card-text">Git</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;