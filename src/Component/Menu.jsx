import React from 'react';
import try2 from '../assets/images/try2.jpg';
import './style/menu-css.scss';
import Allmenu from './common/Allmenu';

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
const Menu = () => {
  return (
    <div className='menu-css' id='menu'>
      <div>
        <h1>Menu</h1>
      </div>
      <div className='menu-content'>
        {content.map((item) => {
          if (item.position === 'Appitizer' || item.position === 'Dessert') {
            return (
              <Allmenu
                imgsrc={item.imgsrc}
                details={item.details}
                detailHeading={item.position}
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
              />
            );
          }
        })}
      </div>
    </div>
  );
};
export default Menu;
