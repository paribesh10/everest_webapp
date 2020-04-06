import React from 'react';
import './App.css';
import Index from './Component/Index';
import Aboutus from './Component/Aboutus';
import Lunch from './Component/Lunch';
import Contact from './Component/common/Contact';

const App = () => {
  return (
    <div className='App'>
      <h1>This is Header</h1>
      <Index />
      <Lunch />
      <Aboutus />
      <Contact />
    </div>
  );
};

export default App;
