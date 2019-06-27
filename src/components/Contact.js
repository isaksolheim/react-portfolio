import React from 'react';

function Contact() {
  return(
    <div className="contact-container" id="contact">
      <h1 id="title">Contact</h1>
      <form action="https://formspree.io/isak.m.h.s@gmail.com" method="POST">
        <label>Email</label>
        <input type="email" name="_replyto" placeholder="your@email.com" />

        <label>Message</label>
        <textarea type="text" name="message" placeholder="Hi..."></textarea>
        
        <input type="submit" value="Send" />
      </form> 
      <br />
      <br />
      <div className="email">
        <p>My Email Adress:</p>
        <a href="mailto:isak.m.h.s@gmail.com"><p><strong>isak.m.h.s@gmail.com</strong></p></a>
      </div>
    </div>
  );
}

export default Contact;