import React, { useState } from 'react';
import appetizer from '../assets/images/appetizer.jpg';
import momo from '../assets/images/momo.jpg';
import dessert from '../assets/images/dessert.jpg';
import kids from '../assets/images/kids.jpg';
import './style/menu-css.scss';
import Allmenu from './common/Allmenu';
import Contentmenu from './Contentmenu';

const content = [
  {
    position: 'Appetizer',
    imgsrc: appetizer,
    details: 'Make it smart. Make it beautiful. Have fun.',
  },
  {
    position: 'Main Course',
    imgsrc: momo,
    details: 'Fun can be dessert of our lives but never its main course.',
  },
  {
    position: 'Dessert',
    imgsrc: dessert,
    details: 'Life is short, eat dessert first.',
  },
  {
    position: 'For Kids',
    imgsrc: kids,
    details: 'Do not forget about your kids',
  },
];

const ala = {
  Appetizer: [
    { name: '1. Vegetable soup / Chicken soup (G, L) ', price: 5.5 },
    {
      name: '2. Vegetable pakauda',
      price: 5.5,
      ingredients2: 'Deep-fried vegetables (G, L)',
    },
    {
      name: '3. Paneer dart ',
      price: 6.9,
      ingredients2:
        'Tandoori marinated cottage cheese, onion, paprika and tomato (G)',
    },
    {
      name: '4. Samosa ',
      price: 6.9,
      ingredients2: 'Deep-fried vegetable pie',
    },
    {
      name: '5. Sinke kabab ',
      price: 7.0,
      ingredients2:
        'Lamb shish kabab spiced with sweet pepper, onion and Ginger, served with tandoori sauce (medium hot, G)',
    },
    {
      name: '6. Fried momo ',
      price: 7.0,
      ingredients2:
        'Deep-fried dumplings filled with minced lamb, served with spicy chutney sauce (L)',
    },
    {
      name: '7. Jhinge machha pakauda ',
      price: 7.5,
      ingredients2: 'Deep-fried shrimp (G, L)',
    },
    {
      name: '8. Green salad ',
      price: 7.0,
      ingredients2:
        'Green salad of the house with tomatoes and cucumber (G, L)',
    },
    {
      name: '9. Vegetable salad ',
      price: 8.5,
      ingredients2:
        'French fries, cauliflower, broccoli, carrot, tomatoes and green jack beans (G, L)',
    },
    {
      name: '10. Papad salad ',
      price: 9.9,
      ingredients2:
        'Papad, cucumber, carrot, potatoes, onion, ginger, garlic, fried peanuts and olives. (G, L)',
    },
  ],
  'Main Course': [
    {
      name: '1. Shahi king prawn',
      price: 19.9,
      ingredients2:
        'King prawns in creamy tomato, cashew nut, almond sauce (G)',
    },
    {
      name: '2. Piro jhinge machha',
      price: 17.5,
      ingredients2:
        'Shrimps with sweet peppers and chili, onion, Ginger and soy sauce (medium hot, G, L)',
    },
    {
      name: '3. Lasune jhinge machha (Shrimps)',
      price: 19.9,
      ingredients2: 'King prawns in onion and curry-garlic sauce (G, L)',
    },
    {
      name: '4. Tandoori salmon',
      price: 19.9,
      ingredients2:
        'Herb marinated salmon with almonds, cashew nuts and cottage cheese in Coconut cream sauce (G)',
    },
    {
      name: '5. Fish curry',
      price: 16.9,
      ingredients2: 'Pangasius in mild tomato-curry sauce (G, L)',
    },
    {
      name: '6. Chicken curry',
      price: 15.0,
      ingredients2: 'Chicken pieces in curry sauce',
    },
    {
      name: '7. Chicken korma',
      price: 15.9,
      ingredients2: 'Pieces of chicken in mild and creamy tomato sauce (G, LL)',
    },
    {
      name: '8. Chicken Chilly',
      price: 17.9,
      ingredients2:
        'Pieces of chicken, sweet pepper, onion, Ginger and chili in fresh tomato-coriander sauce (hot, G, L)',
    },
    {
      name: '9. Makhani kukhuro',
      price: 17.9,
      ingredients2:
        'Tandoori marinated pieces of chicken breast in creamy fresh tomato and butter sauce (G, LL)',
    },
    {
      name: '10. Lasune kukhuro',
      price: 16.9,
      ingredients2:
        'Pieces of chicken breast, garlic and ginger in coriander curry sauce (G, L)',
    },
    {
      name: '11. Chicken dart masala',
      price: 16.9,
      ingredients2:
        'Herb yoghurt marinated chicken dart in masala sauce (medium hot, G)',
    },
    {
      name: '12. Piro kukhuro',
      price: 17.9,
      ingredients2:
        'Tandoori marinated pieces of chicken breast with cumin and coriander seeds, green chili and garlic in creamy sauce (G)',
    },
    {
      name: '13. Alu Gobi (Vegan)',
      price: 13.9,
      ingredients2:
        'Fried potatoes and cauliflower in Ginger and cumin spiced sauce (medium hot, G, L)',
    },
    {
      name: '14.Karai tarkari',
      price: 15.9,
      ingredients2:
        'Cauliflower, broccoli, mushroom, sweet pepper, onion and cream cheese in spicy sauce (G)',
    },
    {
      name: '15. Shahi paneer',
      price: 15.9,
      ingredients2:
        'Cottage cheese in creamy tomato-cashew nut-almond sauce (G)',
    },
    {
      name: '16. Malai kofta',
      price: 16.5,
      ingredients2:
        'Cashew nut, potato and cream cheese dumplings in creamy tomato sauce (G)',
    },
    {
      name: '17. Hariyali kofta',
      price: 15.5,
      ingredients2: 'Spinach balls in cream cheese sauce (G)',
    },
    {
      name: '18. Palak paneer',
      price: 15.9,
      ingredients2: 'Cottage cheese in creamy spinach sauce (G)',
    },
    {
      name: '19. Dal makhani',
      price: 14.9,
      ingredients2:
        'Lentil beans and fried ginger, tomato-butter-cream sauce (G, L L)',
    },
    {
      name: '20. Paneer chilli',
      price: 10,
      ingredients2: 'Cottage cheese in Ginger, soy and tomato sauce (G)',
    },
    {
      name: '21. Motar paneer',
      price: 16.9,
      ingredients2:
        'Fried cottage cheese and Peas in garlic & Ginger flavored butter-cream sauce (medium hot, G)',
    },
    {
      name: '22. Sabji korma',
      price: 15.9,
      ingredients2:
        'Curry vegetables with cottage cheese, cream, Coconut and coriander (G)',
    },
    {
      name: '23. Lamb curry',
      price: 17.5,
      ingredients2: 'Lamb curry of the house (G, L)',
    },
    {
      name: '24. Lamb pieces',
      price: 17.9,
      ingredients2: 'Lamb pieces in mild and creamy tomato sauce (G, LL)',
    },
    {
      name: '25. Jeera bhendo',
      price: 17.9,
      ingredients2:
        'Pieces of lamb in Ginger, coriander, cumin and garlic spiced cream sauce (medium hot, G, LL)',
    },
    {
      name: '26. Bhendo masala',
      price: 16.9,
      ingredients2: 'Pieces of lamb with spicy masala sauce (hot, G, L)',
    },
    {
      name: '27. Dahi bhendo ',
      price: 17.0,
      ingredients2:
        'Lamb, house made yogurt and fresh coriander and garlic sauce (G)',
    },
    {
      name: '28. Piro bhendo ',
      price: 16.9,
      ingredients2:
        'Pieces of lamb with sweet pepper, green chili, soy, onion, Ginger and tomato sauce (hot, G , L)',
    },
    {
      name: '29. Sekuwa bhendo masala',
      price: 19.9,
      ingredients2:
        'Tandoori marinated lamb tenderloin and Ginger with masala sauce (G, LL)',
    },
    {
      name: '30. Mutton momo',
      price: 17.0,
      ingredients2:
        'Dumplings filled with minced lamb, served with chutney sauce (L)',
    },
    {
      name: '31. Vegetable paneer biryani',
      price: 15.9,
      ingredients2: 'Vegetable and cream cheese biryani (G)',
    },
    {
      name: '32. Everest biryani',
      price: 16.9,
      ingredients2:
        'House Specialty biryani with chicken, shrimps, cream cheese and vegetables (G)',
    },
    {
      name: '33. Chicken dart',
      price: 16.9,
      ingredients2:
        'Herb yoghurt marinated and tandoori baked chicken dart (G)',
    },
    {
      name: '34. Paneer dart',
      price: 16.0,
      ingredients2:
        'Tandoori marinated cottage cheese with onion, sweet pepper and tomato (G)',
    },
    {
      name: '35. Prawn darts ',
      price: 20.9,
      ingredients2:
        'Tandoori marinated king prawns with tomato, onion, sweet pepper, Ginger and chili (hot, G)',
    },
    {
      name: '36. Everest mixed Sizzler ',
      price: 19.9,
      ingredients2:
        'Lamb shish kabab, tandoori chicken, sweet pepper, onion, Ginger, garlic, tomato served on a hot sizzling pan (G)',
    },
    {
      name: '37. Chicken Sizzler ',
      price: 17.9,
      ingredients2:
        'Tandoori oven baked, marinated chicken kabab with onion, sweet pepper, Ginger and garlic with cream sauce (medium hot , G, LL)',
    },
    {
      name: '38. Bhendako sekuwa ',
      price: 20.5,
      ingredients2:
        'Tandoori marinated lamb tenderloin, onion, pepper and Ginger (G, LL)',
    },
    {
      name: '39. Everest Himal Special ',
      price: 26.9,
      ingredients2:
        'Lamb tenderloin, lamb shish kabab, chicken dart, king prawns, cottage cheese, sweet pepper, onion and Ginger G)',
    },
  ],
  Dessert: [
    {
      name: '1. Sikharni ',
      price: 4.7,
      ingredients2: 'House made yoghurt, dried fruit and nuts (G) ',
    },
    {
      name: '2. Gulab jamun ',
      price: 5.0,
      ingredients2: 'sweet bun in syrup (L) ',
    },
    {
      name: '3. Ice-cream trio ',
      price: 5.5,
      ingredients2:
        'vanilla, chocolate and ice cream mango served with chocolate or caramel sauce (G) ',
    },
    {
      name: '4. Kurauni ',
      price: 5.5,
      ingredients2:
        'Nepalese parfait made of cashew and pistage nuts, flavored with Saffron (G) ',
    },
    {
      name: '5. Banana fry ',
      price: 7.0,
      ingredients2: 'Deep fried banana, ice cream and rhum sauce ',
    },
  ],
  'For Kids': [
    {
      name: '1. Shahi paneer ',
      price: 8.5,
      ingredients2:
        'Cottage cheese in tomato, butter and Coconut cream sauce (G)',
    },
    {
      name: '2. Chicken cream ',
      price: 8.5,
      ingredients2:
        'Stewed pieces of chicken with tomato and Coconut cream sauce (G, LL)',
    },
    {
      name: '3. Shahi shrimps ',
      price: 8.5,
      ingredients2:
        'cream sauce (G, LL) Prawns in tomato, butter, Coconut, cream sauce (G, LL)',
    },
    {
      name: '4. Lamb cream ',
      price: 8.5,
      ingredients2: 'Lamb pieces in mild and creamy tomato sauce (G, LL)',
    },
  ],
};

const Menu = () => {
  const [menu, setMenu] = useState();
  const menuHandaler = (data) => {
    setMenu(ala[data]);
  };

  return (
    <React.Fragment>
      <div className='menu-css' id='menu'>
        <div>
          <h1>Menu</h1>
        </div>
        {!menu ? (
          <div className='menu-content'>
            {content.map((item) => {
              if (
                item.position === 'Appetizer' ||
                item.position === 'Dessert'
              ) {
                return (
                  <Allmenu
                    imgsrc={item.imgsrc}
                    details={item.details}
                    detailHeading={item.position}
                    onClick={menuHandaler}
                  />
                );
              } else if (
                item.position === 'Main Course' ||
                item.position === 'For Kids'
              ) {
                return (
                  <Allmenu
                    imgsrc1={item.imgsrc}
                    details1={item.details}
                    detailHeading1={item.position}
                    onClick={menuHandaler}
                  />
                );
              }
            })}
          </div>
        ) : (
          <div className='menuus'>
            <div>
              <h1
                className='btn btn-lg menu-button'
                onClick={() => menuHandaler('Appetizer')}
              >
                Appetizer
              </h1>
              <h1
                className='btn btn-lg menu-button'
                onClick={() => menuHandaler('Main Course')}
              >
                Main Course
              </h1>
              <h1
                className='btn btn-lg menu-button'
                onClick={() => menuHandaler('Dessert')}
              >
                Dessert
              </h1>
              <h1
                className='btn btn-lg menu-button'
                onClick={() => menuHandaler('For Kids')}
              >
                For Kids
              </h1>
            </div>
            {menu.map((item) => (
              <Contentmenu
                foodName2={item.name}
                foodPrice2={item.price}
                ingredients2={item.ingredients2}
                goBack={menuHandaler}
              />
            ))}
            <button className='menu-button btn-warning ' onClick={menuHandaler}>
              Go Back
            </button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
export default Menu;
