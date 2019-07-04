import React from 'react';
//import { Link } from 'react-scroll';

function Landing() {
  return(
    <div className="landing-container" id="landing">
      {/*
      <div id="parallax">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      */}
        <div className="landing-items">
          <div className="landing-name">
            Isak Solheim
          </div>
          <div className="landing-undertitle">
            Web Developer
          </div>
        </div>
      {/*</div>*/}
    </div>
  );
}

export default Landing;