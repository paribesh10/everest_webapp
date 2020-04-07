import React from 'react';
import '../style/contact.scss';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='content'>
        <div id='form'>
          <form action='' id='contactForm' method='post'>
            <span>Name</span>
            <input
              type='text'
              name='name'
              className='name'
              placeholder='Enter your name'
              tabindex='1'
            />
            <span>Email</span>
            <input
              type='text'
              name='email'
              className='email'
              placeholder='Enter your email'
              tabindex='2'
            />
            <span id='captcha'></span>
            <input
              type='text'
              name='captcha'
              className='captcha'
              maxlength='4'
              size='4'
              placeholder='Enter captcha code'
              tabindex='3'
            />
            <span>Message</span>
            <textarea
              className='message'
              placeholder='Enter your message'
              tabindex='4'
            ></textarea>
            <input
              type='submit'
              name='submit'
              value='Submit'
              class='submit'
              tabindex='5'
            />
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
