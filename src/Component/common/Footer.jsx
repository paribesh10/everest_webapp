import React from 'react';

function Footer() {
  return (
    <div>
      <footer className='page-footer font-small special-color-dark pt-4'>
        <div className='containers'>
          <ul className='list-unstyled list-inline text-center'>
            <li className='list-inline-item'>
              <p className='btn-floating btn-fb mx-1'>
                <i className='fab fa-facebook-f'> </i>
              </p>
            </li>

            <li className='list-inline-item'>
              <p className='btn-floating btn-gplus mx-1'>
                <i className='fab fa-google-plus-g'> </i>
              </p>
            </li>

            <li className='list-inline-item'>
              <p className='btn-floating btn-lg mx-1'>
                <i className='fab fa-instagram'></i>
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
