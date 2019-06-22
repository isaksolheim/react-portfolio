import React from 'react';

function Projects() {
  return(
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <span />
      <br />
      <div>
        <div className="project-card">
          <h2>Programming Blog</h2>
          <img src={'./images/wickdeeb.png'} alt="wickdeeb" />
          <div className="tech">React</div>
          <div className="tech">React-Router</div>
          <div className="tech">Sass</div>
          <div className="buttons">
            <a href="https://wickdeeb.com"><div className="project-button">View Site</div></a>
            <a href="https://github.com/wickdeeb/wickdeeb"><div className="project-button">Github</div></a>
          </div>
        </div>
        <div className="project-card">
          <h2>Burger Resturant</h2>
          <img src={'./images/burgr.png'} alt="burgr" />
          <div className="tech">React</div>
          <div className="tech">NES.css</div>
          <div className="tech">Sass</div>
          <div className="buttons">
            <a href="https://wickdeeb.github.io/burgr/"><div className="project-button">View Site</div></a>
            <a href="https://github.com/wickdeeb/burgr"><div className="project-button">Github</div></a>
          </div>
        </div>
      </div>
      <div>
        <div className="project-card">
          <h2>Ecommerce Website</h2>
          <img src={'./images/100briller.png'} alt="100briller" />
          <div className="tech">React</div>
          <div className="tech">React-Router</div>
          <div className="tech">Redux</div>
          <div className="tech">Sass</div>
          <div className="buttons">
            <div className="project-button">View Site</div>
            <div className="project-button">Github</div>
          </div>
        </div>
        <div className="project-card">
          <h2>Realestate Website</h2>
          <img src={'./images/realestate.png'} alt="realestate" />
          <div className="tech">React</div>
          <div className="tech">React-Router</div>
          <div className="tech">Sass</div>
          <div className="buttons">
            <div className="project-button">View Site</div>
            <div className="project-button">Github</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;