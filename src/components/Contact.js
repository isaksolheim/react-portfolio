import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    }
  }
  
  handleSubmit = (e) => {
    var email = document.getElementById('email').value;
    var text = document.getElementById('text').value;

    if (email.length === 0 || text.length === 0) {
      e.preventDefault();
      document.getElementById('error').innerHTML = "Make sure to enter an email and a message.";
    }
  }

  render() {
    return(
      <div className="contact-container" id="contact">
        <h1 id="title">Contact</h1>
        <form onClick={this.handleSubmit} action="https://formspree.io/isak.m.h.s@gmail.com" method="POST">
          <label>Email</label>
          <input id="email" type="email" name="_replyto" placeholder="your@email.com" />

          <label>Message</label>
          <textarea id="text" type="text" name="message" placeholder="Hi..."></textarea>
          
          <input type="submit" value="Send" />
        </form> 
        <p id="error"></p>
        <br />
        <br />
        <div className="email">
          <p>My Email Adress:</p>
          <a href="mailto:isak.m.h.s@gmail.com"><p><strong>isak.m.h.s@gmail.com</strong></p></a>
          <p><a href={'Isak-Solheim-Front-End-CV.pdf'} download>My Resume</a></p>
        </div>
      </div>
    );
  }
}

export default Contact;