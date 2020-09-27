import React from 'react';

import './style/restaurant-css.scss';
import restaurant from '../assets/images/restaurant.png';
const Restaurant = () => {
  return (
    <div>
      <div className='restaurant-css' id='aboutus'>
        <div className='content'>
          <div className='heading'>
            <h1>The Restaurant</h1>
          </div>
          <div className='para'>
            <p>A taste trip to Nepali cuisine</p>
            <p>
              In the embrace of Old Rauma, you can jump on a taste trip to
              Nepali cuisine and experience the secrets of Asian cuisine as well
              as the best pieces. Warm welcome!
            </p>
            <p>Openning time</p>
            <p>Mon-Fri 10.30-21.00 Sat 12-21 Sun 12-18</p>
          </div>
        </div>
        <div>
          <img src={restaurant} alt='restaurant-img' className='img-fluid' />
        </div>
      </div>
    </div>
  );
};
export default Restaurant;
