import React from 'react';
import '../style/header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='navbar-content'>
        <nav className='navbar navbar-expand-lg navbar-light background'>
          <a className='navbar-brand' href='#index'>
            Everest Himal
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav abc'>
              <a className='nav-item nav-link ' href='#index'>
                Home <span className='sr-only'>(current)</span>
              </a>
              <a className='nav-item nav-link' href='#lunch'>
                Lunch
              </a>
              <a className='nav-item nav-link' href='#aboutus'>
                About Us
              </a>
              <a className='nav-item nav-link' href='#menu'>
                Menu
              </a>
              <a className='nav-item nav-link' href='#reservation'>
                Reserve
              </a>
              <a className='nav-item nav-link' href='#contact'>
                Contact Us
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;
