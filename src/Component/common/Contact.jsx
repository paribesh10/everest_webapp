import React from 'react';
import '../style/contact.scss';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='content'>
        <div id='form'>
          <h1>Contact Us</h1>
          <form action='' id='contactForm' method='post'>
            <input
              type='text'
              name='name'
              className='name'
              placeholder='Enter your name'
              tabindex='1'
            />
            <input
              type='text'
              name='email'
              className='email'
              placeholder='Enter your email'
              tabindex='2'
            />
            <textarea
              className='message'
              placeholder='Enter your message'
              tabindex='4'
            ></textarea>
            <button class='btn1 btn-secondary'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
