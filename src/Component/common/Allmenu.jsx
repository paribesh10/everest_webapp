import React, { useState } from 'react';
import '../style/allMenu.scss';

const data = [
  { name: 'abc', price: 10, ingredients2: 'just a example' },
  { name: 'abc', price: 10, ingredients2: 'just a example' },
  { name: 'abc', price: 10, ingredients2: 'just a example' },
];

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
            <h3>{detailHeading}</h3>
            <p>{details}</p>
          </div>
        </div>
      )}
      {detailHeading1 && (
        <div
          className='second-menu-css'
          onClick={() => onClick(detailHeading1)}
        >
          <div className='menu-body'>
            <h3 onClick={onClick}>{detailHeading1}</h3>
            <p onClick={onClick}>{details1}</p>
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
