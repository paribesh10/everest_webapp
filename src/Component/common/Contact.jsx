import React from 'react';
import '../style/contact.scss';

const Contact = () => {
  return (
    // <section id='contact'>
    //   <div className='content'>
    //     <div id='form'>
    //       <h1>Contact Us</h1>
    //       <p>
    //         Do you have any questions? Please do not hesitate to contact us
    //         directly. Our team will come back to you within a matter of hours to
    //         help you.
    //       </p>
    //       <form action='' id='contactForm' method='post'>
    //         <input
    //           type='text'
    //           name='name'
    //           className='name'
    //           placeholder='Enter your name'
    //           tabindex='1'
    //         />
    //         <input
    //           type='text'
    //           name='email'
    //           className='email'
    //           placeholder='Enter your email'
    //           tabindex='2'
    //         />
    //         <textarea
    //           className='message'
    //           placeholder='Enter your message'
    //           tabindex='4'
    //         ></textarea>
    //         <button class='btn btn-secondary btn1'>Submit</button>
    //       </form>
    //     </div>
    //   </div>
    // </section>
    <section id='contact'>
      <h1>Get In Touch</h1>
      <div className='container'>
        <div className='map'>
          <iframe
            title='449892791'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1808.57133587734!2d21.51027421587654!3d61.12856727251291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46897e094d4aa9cf%3A0x1cdccddff9d9271e!2sEverest%20Himal!5e1!3m2!1sen!2sfi!4v1595523049479!5m2!1sen!2sfi'
            width='100%'
            height='650px'
            frameborder='0'
            // style='border:0'
            allowfullscreen
          ></iframe>
        </div>
        <div className='contact-form'>
          <h1 className='title'>Contact Us</h1>
          <h2 className='subtitle'>We are here assist you.</h2>
          <form name='contact' method='POST' data-netlify='true'>
            <p>
              <label>
                Your Name: <input type='text' name='name' />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type='email' name='email' />
              </label>
            </p>
            <p>
              <label>
                Your Role:{' '}
                <select name='role[]' multiple>
                  <option value='leader'>Leader</option>
                  <option value='follower'>Follower</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name='message'></textarea>
              </label>
            </p>
            <p>
              <button type='submit'>Send</button>
            </p>
          </form>
          {/* <form  method='POST' data-netlify='true'>
            <input type='text' name='name' placeholder='Your Name' />
            <input
              type='email'
              name='e-mail'
              placeholder='Your E-mail Adress'
            />
            <input type='tel' name='phone' placeholder='Your Phone Number' />
            <textarea
              name='text'
              id=''
              rows='8'
              placeholder='Your Message'
            ></textarea>
            <button className='btn-send' type='submit'>
              Get a Call Back
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
};
export default Contact;
