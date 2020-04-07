import React from 'react';
import '../style/lunch.scss';

const Lunchday = ({ foodName, foodPrice, ingredients }) => {
  return (
    <div className='lunch-day'>
      <p>
        {foodName} €{foodPrice}
      </p>
      <p className='ingredients'>{ingredients}</p>
    </div>
  );
};
export default Lunchday;
