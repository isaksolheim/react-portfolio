import React from 'react';

function Contact() {
  return(
    <div className="contact-container" id="contact">
      <h1>Contact</h1>
      <form action="https://formspree.io/spamisak@gmail.com" method="POST">
        <input type="text" name="name" />
        <input type="email" name="_replyto" />
        <input type="submit" value="Send" />
      </form> 
    </div>
  );
}

export default Contact;