import React from 'react';

function Footer() {
  return (
    <div>
      <footer className='page-footer font-small special-color-dark pt-4'>
        <div className='containers'>
          <ul className='list-unstyled list-inline text-center'>
            <li className='list-inline-item'>
              <p className='btn-floating btn-fb mx-1'>
                <a href='https://www.facebook.com/EverestHimal' target='_blank'>
                  <i className='fab fa-facebook-f'> </i>
                </a>
              </p>
            </li>

            <li className='list-inline-item'>
              <p className='btn-floating btn-gplus mx-1'>
                <a href='ravintola.everesthimal@gmail.com' target='_blank'>
                  <i className='fab fa-google-plus-g'> </i>
                </a>
              </p>
            </li>

            <li className='list-inline-item'>
              <p className='btn-floating btn-lg mx-1'>
                <a
                  href='https://www.instagram.com/everesthimal/'
                  target='_blank'
                >
                  <i className='fab fa-instagram'></i>
                </a>
              </p>
            </li>
          </ul>
        </div>

        <div className='footer-copyright text-center py-3'>
          © 2020 Copyright:
          <p> Everest Himal Oy</p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
