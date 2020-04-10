import React from 'react';
import '../style/header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='navbar-content'>
        <nav class='navbar navbar-expand-lg navbar-light background'>
          <a class='navbar-brand' href='#index'>
            Himal
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div class='navbar-nav'>
              <a class='nav-item nav-link ' href='#index'>
                Home <span class='sr-only'>(current)</span>
              </a>
              <a class='nav-item nav-link' href='#lunch'>
                Lunch
              </a>
              <a class='nav-item nav-link' href='#aboutus'>
                About Us
              </a>
              <a class='nav-item nav-link ' href='#menu'>
                Menu
              </a>
              <a class='nav-item nav-link ' href='#reservation'>
                Reserve
              </a>
              <a class='nav-item nav-link ' href='#contact'>
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
