import React from 'react';
import try2 from '../assets/images/try2.jpg';
import './style/restaurant-css.scss';
import restaurant from '../assets/images/restaurant.png';
const Restaurant = () => {
  return (
    <div>
      <div className='restaurant-css'>
        <h1>The Restaurant</h1>
        <p className='para'>A taste trip to Nepali cuisine</p>
        <p>
          In the embrace of Old Rauma, you can jump on a taste trip to Nepali
          cuisine and experience the secrets of Asian cuisine as well as the
          best pieces. Warm welcome!
        </p>
        <p>Openning time</p>
        <p>Mon-Fri 10.30-21.00 Sat 12-21 Sun 12-18</p>
      </div>
      <div
        className='section bg-silver pt-2 pb-2 text-center aos-init aos-animate'
        data-aos='fade'
      >
        <img src={restaurant} alt='Image' className='img-fluid' />
      </div>
    </div>
  );
};
export default Restaurant;
