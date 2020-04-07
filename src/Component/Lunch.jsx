import React, { useState } from 'react'; //REACT HOOKS
import Lunchday from '../Component/common/Lunchday'; //IMPORT Lunchday component
import './style/lunch.scss'; //import css

const lunch = {
  // create lunch ArrayofObject
  Monday: [
    {
      name: '1. Chicken korma ',
      price: '9.80',
      ingredients: 'Braised chicken pieces in mild tomato cream sauce (G, VL)',
    },
    {
      name: '2. Lamb Curry ',
      price: '9.80',
      ingredients: 'Pieces of lamb in house curry sauce (G, L)',
    },
    {
      name: '3. Malai Kofta ',
      price: '9.80',
      ingredients:
        'Cashew-Potato-Cream Cheese Dumplings in Tomato-Butter Cream Sauce (G)',
    },
    {
      name: '4. Fish Chilli ',
      price: '9.80',
      ingredients: 'Pangasius fillet in ginger-soy-chilli sauce (Medium, G, L)',
    },
    {
      name: '5. Karai Tarkari (Vegan) ',
      price: '9.80',
      ingredients:
        'Cauliflower, broccoli, mushrooms, peppers and onions in chilli sauce (medium, G)',
    },
    {
      name: '6. Mixed Lunch ',
      price: '11.80',
      ingredients: 'Choose two of your lunch favorites for one serving.',
    },
    {
      name: "7. Today's Special: Piro kukhuro ",
      price: '13.00',
      ingredients:
        'Tandoori marinated chicken breasts, cumin and coriander seeds, chili and garlic in a creamy sauce (Medium, G)',
    },
  ],
  Tuesday: [
    {
      name: '1. Saag Chicken ',
      price: '9.80',
      ingredients:
        'Stewed pieces of chicken in spinach-garlic-cream sauce (G, VL)',
    },
    {
      name: '2. Lamb Chilly ',
      price: '9.80',
      ingredients:
        'Lamb, chilli sauce, green pepper and chili, soy, onion and ginger (medium; G, L)',
    },
    {
      name: '3. Shahi paneer ',
      price: '9.80',
      ingredients: ' Cream cheese in creamy tomato-butter cream sauce (G)',
    },
    {
      name: '4. Fish curry ',
      price: '9.80',
      ingredients: 'Pangasius fillet in mild tomato curry sauce (G, L)',
    },
    {
      name: '5. Vegetable kofta (Vegan) ',
      price: '9.80',
      ingredients:
        'Cauliflower, broccoli, green beans and potato dumplings in chilli sauce (medium; G)',
    },
    {
      name: '6. Mixed Lunch ',
      price: '11.80',
      ingredients: 'Choose two of your lunch favorites for one serving.',
    },
    {
      name: "7. Today's Special: Chicken Darts ",
      price: '13.00',
      ingredients:
        'Tandoori fried chicken breasts marinated in herbal yoghurt (G)',
    },
  ],
  Wenesday: [
    {
      name: '1. Chicken Chilly ',
      price: '9.80',
      ingredients:
        'Tandoori marinated chicken breasts, peppers, onions, ginger and chili in fresh tomato-coriander sauce (medium, G, L)',
    },
    {
      name: '2. Lamb korma ',
      price: '9.80',
      ingredients: 'Lamb in tomato-butter cream sauce (G, VL)',
    },
    {
      name: '3. Palak paneer ',
      price: '9.80',
      ingredients: ' Cream cheese with spinach-tomato in cream sauce (G)',
    },
    {
      name: '4. Fish masala ',
      price: '9.80',
      ingredients: 'Pangasius fillet in masala sauce (medium, G, L)',
    },
    {
      name: '5. Vegetable kofta (Vegan) ',
      price: '9.80',
      ingredients:
        'Cauliflower, broccoli, green beans and potato dumplings in chilli sauce (medium; G)',
    },
    {
      name: '6. Mixed Lunch ',
      price: '11.80',
      ingredients: 'Choose two of your lunch favorites for one serving.',
    },
    {
      name: "7. Today's Special: Sinke kebab masala ",
      price: '13.00',
      ingredients: 'Lamb mince skewer in masala sauce (medium, G, L)',
    },
  ],
  Thursday: [
    {
      name: '1.  Makhani kukhuro ',
      price: '9.80',
      ingredients:
        'Tandoori marinated chicken breasts in tomato-cream sauce (G, VL)',
    },
    {
      name: '2. Lamb kofta ',
      price: '9.80',
      ingredients: 'Minced lamb dumplings in chili-ginger sauce (medium; G, L)',
    },
    {
      name: '3. Taja Tarkari ',
      price: '9.80',
      ingredients: ' Seasonal vegetables and cream cheese in curry sauce (G)',
    },
    {
      name: '4. Piro jhinge machha ',
      price: '9.80',
      ingredients:
        'Shrimp, green pepper, onion, chili, ginger and soy sauce (medium; G, L)',
    },
    {
      name: '5. Taja Tarkari (Vegan) ',
      price: '9.80',
      ingredients: 'Seasonal vegetables in curry sauce (G)',
    },
    {
      name: '6. Mixed Lunch ',
      price: '11.80',
      ingredients: 'Choose two of your lunch favorites for one serving.',
    },
    {
      name: "7. Today's Special: Lamb masala ",
      price: '13.00',
      ingredients: 'Lamb pieces in masala sauce (medium, G, L)',
    },
  ],
  Friday: [
    {
      name: '1. Chicken tikka masala ',
      price: '9.80',
      ingredients:
        'Chicken breast pieces marinated in herbal yoghurt in masala sauce (medium, G)',
    },
    {
      name: '2. Jeera bhendo ',
      price: '9.80',
      ingredients:
        'Lamb pieces in cream sauce flavored with cumin, ginger, coriander and garlic (medium, G, VL)',
    },
    {
      name: '3. Karai accurate ',
      price: '9.80',
      ingredients:
        ' Cauliflower, broccoli, mushrooms, peppers, onions and cream cheese in chilli sauce (medium, G)',
    },
    {
      name: '4. Fish korma ',
      price: '9.80',
      ingredients:
        'Pangasius fillet in mild tomato-butter-coconut cream sauce (G, L)',
    },
    {
      name: '5. Karai Tarkari (Vegan) ',
      price: '9.80',
      ingredients:
        'Cauliflower, broccoli, mushrooms, peppers and onions in a hot sauce (medium, G)',
    },
    {
      name: '6. Mixed Lunch ',
      price: '11.80',
      ingredients: 'Choose two of your lunch favorites for one serving.',
    },
    {
      name: "7. Today's Special: Chicken curry ",
      price: '13.00',
      ingredients: 'Braised chicken pieces in curry sauce (G, L)',
    },
  ],
};

const days = ['Home', 'Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday'];

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
            ingredients={item.ingredients}
          />
        ))}
    </div>
  );
};
export default Lunch;
