import React from 'react';
import '../style/content.scss';
const Content = ({ imgsrc, imgname, details, detailHeading }) => {
  return (
    <div className='content-css'>
      <div>
        <img src={imgsrc} alt={imgname} />
      </div>
      <div className='content-body'>
        <h3>{detailHeading}</h3>
        <p>{details}</p>
      </div>
    </div>
  );
};
export default Content;
