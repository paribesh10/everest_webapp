import React from 'react';

const Contentmenu = ({ foodName2, foodPrice2, ingredients2, goBack }) => {
  return (
    <div className='content-menu'>
      <h5>
        {foodName2} {foodPrice2 && `€${foodPrice2}`}
      </h5>

      <p className='ingredients2'>{ingredients2}</p>
    </div>
  );
};
export default Contentmenu;
