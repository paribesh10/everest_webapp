import React from 'react';
import '../style/lunch.scss';

const Lunchday = ({ foodName, foodPrice, ingredients }) => {
  return (
    <div className='lunch-days'>
      <h5>
        {foodName} {foodPrice && `€${foodPrice}`}
      </h5>
      <p className='ingredients'>{ingredients}</p>
    </div>
  );
};
export default Lunchday;
