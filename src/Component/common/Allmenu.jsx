import React, { useState } from 'react';
import '../style/allMenu.scss';

const Allmenu = ({
  onClick,
  imgsrc,
  imgsrc1,
  imgname,
  imgname1,
  details,
  details1,
  detailHeading,
  detailHeading1,
}) => {
  return (
    <React.Fragment>
      {detailHeading && (
        <div className='menu-css' onClick={() => onClick(detailHeading)}>
          <div className='img'>
            <img src={imgsrc} alt={imgname} />
          </div>
          <div className='menu-body'>
            <h3 className='detail-heading'>{detailHeading}</h3>
            <p className='details'>{details}</p>
          </div>
        </div>
      )}
      {detailHeading1 && (
        <div
          className='second-menu-css'
          onClick={() => onClick(detailHeading1)}
        >
          <div className='menu-body'>
            <h3 className='detail-heading' onClick={onClick}>
              {detailHeading1}
            </h3>
            <p className='details' onClick={onClick}>
              {details1}
            </p>
          </div>
          <div className='img'>
            <img src={imgsrc1} alt={imgname1} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Allmenu;
