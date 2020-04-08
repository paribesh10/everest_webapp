import React from 'react';
import About from './common/About';
import owner from '../assets/images/owner.jpg';
import chefs from '../assets/images/chefs.jpg';

import './style/about_us.scss';

const content = [
  {
    position: 'Owners',
    imgsrc: owner,
    details:
      'Hey! We are Ramesh and Binod, and we always warmly welcome you to our Everest Himal restaurant. We have a long experience in the restaurant industry and enjoy customer service. We always want to guarantee a pleasant restaurant experience. We warmly welcome you to the Everest Himalayas! You can always ask us whatever comes to mind.',
  },
  {
    position: 'Chefs',
    imgsrc: chefs,
    details:
      'We, Narayan and Naba Raj are behind your dose. In the preparation of food, authentic Nepali flavors and fresh and tasty ingredients are important to us. We always cook with love and never compromise on quality. In our dishes we use fresh herbs and good Nepali spices. It is important for us to create a great taste experience for the customer.',
  },
];

const Aboutus = () => {
  return (
    <div className='about_us'>
      <div className='about-heading'>
        <h1>Our Team</h1>
      </div>
      <div className='about-content'>
        {content.map((item) => (
          <About
            imgsrc={item.imgsrc}
            detailHeading={item.position}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};
export default Aboutus;
