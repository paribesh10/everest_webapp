import React from 'react';
import './style/home.scss';
import pot from '../assets/images/pot.mp4';

const Index = () => {
  return (
    <div className='index-css' id='index'>
      <div className='video'>
        <video loop autoPlay>
          <source src={pot} type='video/mp4' />
        </video>
      </div>
      <span className='contentback'></span>
      <div className='content'>
        <h3>Welcome to Everest Himal</h3>
        <button type='button' herf='#lunch' className='btn btn-outline-light'>
          <a class='navbar-brand' href='#reservation'>
            RESERVE A TABLE
          </a>
        </button>
      </div>
    </div>
  );
};

export default Index;
