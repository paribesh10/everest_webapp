import React from 'react';
import '../style/about_us.scss';
const About = ({ imgsrc, imgname, details, detailHeading }) => {
  return (
    <div className='content-css'>
      <div>
        <img className='img1' src={imgsrc} alt={imgname} />
      </div>
      <div className='content-body'>
        <h3>{detailHeading}</h3>
        <p className='details'>{details}</p>
      </div>
    </div>
  );
};
export default About;
