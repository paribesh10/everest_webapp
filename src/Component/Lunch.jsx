import React, { useState } from 'react'; //REACT HOOKS
import Lunchday from '../Component/common/Lunchday'; //IMPORT Lunchday component
import './style/lunch.scss'; //import css

const lunch = {
  // create lunch ArrayofObject
  Monday: [
    {
      name: 'Chicken korma',
      price: '9.80',
      ingredients1:
        'Stewed pieces of chicken in mild and creamy tomato sauce (G, LL)',
      ingredients2:
        'Cauliflower, broccoli, mushrooms, peppers and onions in chilli sauce (medium, G)',
    },
    {
      name: 'Chicken korma',
      price: '9.80',
      ingredients1:
        'Stewed pieces of chicken in mild and creamy tomato sauce (G, LL)',
      ingredients2:
        'Cauliflower, broccoli, mushrooms, peppers and onions in chilli sauce (medium, G)',
    },
  ],
  Tuesday: [
    {
      name: 'veg korma',
      price: '9.80',
      ingredients1:
        'Stewed pieces of chicken in mild and creamy tomato sauce (G, LL)',
      ingredients2:
        'Cauliflower, broccoli, mushrooms, peppers and onions in chilli sauce (medium, G)',
    },
    {
      name: 'veg korma',
      price: '9.80',
      ingredients1:
        'Stewed pieces of chicken in mild and creamy tomato sauce (G, LL)',
      ingredients2:
        'Cauliflower, broccoli, mushrooms, peppers and onions in chilli sauce (medium, G)',
    },
  ],
};

const days = ['Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday'];

const Lunch = () => {
  const [menu, setMenu] = useState();

  const menuHandaler = (e) => {
    setMenu(lunch[e.target.name]);
  };

  return (
    <div className='lunch'>
      <h1>Lunch offers</h1>
      {days.map((item) => (
        <button name={item} onClick={(e) => menuHandaler(e)}>
          {item}
        </button>
      ))}
      {menu &&
        menu.map((item) => (
          <Lunchday
            foodName={item.name}
            foodPrice={item.price}
            ingredients1={item.ingredients1}
            ingredients2={item.ingredients2}
          />
        ))}
    </div>
  );
};
export default Lunch;
