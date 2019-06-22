import React from 'react';
import { Link } from 'react-scroll';

class Navbar extends React.Component {
  dropdown = () => {
    var navbar = document.getElementById('navbar');
    if (navbar.className === 'navbar') {
      navbar.className += ' responsive';
    } else {
      navbar.className = 'navbar';
    }
    var button = document.getElementById('nav-button');
    if (button.innerHTML === '<i class="fa fa-bars fa-2x"></i>') {
      button.innerHTML = '<i class="fa fa-times fa-2x"></i>';
    } else {
      button.innerHTML = '<i class="fa fa-bars fa-2x"></i>';
    }
  }

  render() {
    return(
      <div className="navbar-container" id="home">
        <div className="navbar" id="navbar">
          <button onClick={this.dropdown} className="nav-button" id="nav-button">
            <i className="fa fa-bars fa-2x"/>
          </button>
          <div className="nav-items">
          <Link 
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-10}
            duration={400}>
              <div className="nav-item" onClick={this.dropdown}>About Me</div>
          </Link>
          <Link 
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-10}
            duration={400}>
              <div className="nav-item" onClick={this.dropdown}>Skills</div>
          </Link>
          <Link 
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-10}
            duration={400}>
              <div className="nav-item" onClick={this.dropdown}>Projects</div>
          </Link>
          <Link 
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={400}>
              <div className="nav-item" onClick={this.dropdown}>Contact</div>
          </Link>
          <a href="https://github.com/wickdeeb" target="_blank" rel="noopener noreferrer">
            <div className="nav-item"><i className="fab fa-github"></i></div>
          </a>
          </div>
          <div className="nav-button"></div>
        </div>
      </div>
    );
  }
}

export default Navbar;