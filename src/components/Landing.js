import React from 'react';
//import { Link } from 'react-scroll';

function Landing() {
  return(
    <div className="landing-container" id="landing">
      {/*<div id="parallax">*/}
        <div className="landing-items">
          <div className="landing-name">
            Isak Solheim
          </div>
          <div className="landing-undertitle">
            Web Developer
          </div>
          
          {/*
          <Link 
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-10}
            duration={400}>
              <div className="landing-button">View Projects</div>
          </Link>
          */}
        </div>
      {/*</div>*/}
    </div>
  );
}

export default Landing;