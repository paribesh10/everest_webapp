import React from 'react';

const Contentmenu = ({ foodName2, foodPrice2, ingredients2, goBack }) => {
  return (
    <div>
      <div>
        <h1 className='btn btn-info' onClick={() => goBack('Appitizer')}>
          A
        </h1>
        <h1 className='btn btn-info' onClick={() => goBack('Main Course')}>
          MC
        </h1>
        <h1 className='btn btn-info' onClick={() => goBack('Dessert')}>
          D
        </h1>
        <h1 className='btn btn-info' onClick={() => goBack('For Kids')}>
          FK
        </h1>
      </div>
      <div>
        <p>
          {foodName2} {foodPrice2 && `€${foodPrice2}`}
        </p>
        <p className='ingredients2'>{ingredients2}</p>
        <button className='btn btn-warning ' onClick={goBack}>
          Goback
        </button>
      </div>
    </div>
  );
};
export default Contentmenu;
