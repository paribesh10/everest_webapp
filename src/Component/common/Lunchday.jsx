import React from 'react';

const Lunchday = ({ foodName, foodPrice, ingredients1, ingredients2 }) => {
  return (
    <div className='lunch-day'>
      <p>
        {foodName} €{foodPrice}
      </p>
      <p>{ingredients1}</p>
      <p>{ingredients1}</p>
    </div>
  );
};
export default Lunchday;
