import React from 'react';
import './App.css';
import Index from './Component/Index';
import Aboutus from './Component/Aboutus';
import Lunch from './Component/Lunch';
import Contact from './Component/common/Contact';
import Restaurant from './Component/Restaurant';
import Menu from './Component/Menu';
import Reservation from './Component/Reservation';

const App = () => {
  return (
    <div className='App'>
      <h1>This is Header</h1>
      <Index />
      <Lunch />
      <Restaurant />
      <Aboutus />
      <Menu />
      <Contact />
      <Reservation />
    </div>
  );
};

export default App;
