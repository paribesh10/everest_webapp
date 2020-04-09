import React from 'react';

function Footer() {
  return (
    <div>
      <footer className='page-footer font-small special-color-dark pt-4'>
        <div className='container'>
          <ul className='list-unstyled list-inline text-center'>
            <li className='list-inline-item'>
              <a className='btn-floating btn-fb mx-1'>
                <i className='fab fa-facebook-f'> </i>
              </a>
            </li>

            <li className='list-inline-item'>
              <a className='btn-floating btn-gplus mx-1'>
                <i className='fab fa-google-plus-g'> </i>
              </a>
            </li>

            <li className='list-inline-item'>
              <a className='btn-floating btn-lg mx-1'>
                <i className='fab fa-instagram'></i>
              </a>
            </li>
          </ul>
        </div>

        <div className='footer-copyright text-center py-3'>
          © 2020 Copyright:
          <a href='https://mdbootstrap.com/'> MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
