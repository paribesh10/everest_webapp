import React, { useState } from 'react';
import try2 from '../assets/images/try2.jpg';
import './style/menu-css.scss';
import Allmenu from './common/Allmenu';
import Contentmenu from './common/Contentmenu';

const content = [
  {
    position: 'Appitizer',
    imgsrc: try2,
    details: 'ahsfbljasfdbdshfgbawksjdvn',
  },
  {
    position: 'Main Course',
    imgsrc: try2,
    details: 'askjhösdbvasdkvai<xbvj',
  },
  {
    position: 'Dessert',
    imgsrc: try2,
    details: 'askjhösdbvasdkvai<xbvj',
  },
  {
    position: 'For Kids',
    imgsrc: try2,
    details: 'askjhösdbvasdkvai<xbvj',
  },
];

const ala = {
  Appitizer: [
    { name: 'Appitizer', price: 10, ingredients2: 'just a Appitizer' },
  ],
  'Main Course': [
    { name: 'Main Course', price: 10, ingredients2: 'just a Main Course' },
  ],
  Dessert: [{ name: 'Dessert', price: 10, ingredients2: 'just a Dessert' }],
  'For Kids': [
    { name: 'For Kidsbc', price: 10, ingredients2: 'just For Kids' },
  ],
};

const Menu = () => {
  const [menu, setMenu] = useState();
  const menuHandaler = (data) => {
    setMenu(ala[data]);
  };
  const goBackhandaler = () => {
    setMenu();
  };
  return (
    <React.Fragment>
      {!menu ? (
        <div className='menu-css' id='menu'>
          <div>
            <h1>Menu</h1>
          </div>
          <div className='menu-content'>
            {content.map((item) => {
              if (
                item.position === 'Appitizer' ||
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
        </div>
      ) : (
        menu.map((item) => (
          <Contentmenu
            foodName2={item.name}
            foodPrice2={item.price}
            ingredients2={item.ingredients2}
            goBack={menuHandaler}
          />
        ))
      )}
    </React.Fragment>
  );
};
export default Menu;
