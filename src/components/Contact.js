import React from 'react';

function Contact() {
  return(
    <div className="contact-container" id="contact">
      <h1 id="title">Contact</h1>
      <form action="https://formspree.io/spamisak@gmail.com" method="POST">
        <label>Email</label>
        <input type="email" name="_replyto" placeholder="your@email.com" />

        <label>Message</label>
        <textarea type="text" name="message" placeholder="Hi..."></textarea>
        
        <input type="submit" value="Send" />
      </form> 
    </div>
  );
}

export default Contact;