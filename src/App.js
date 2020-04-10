import React from 'react';
import './App.css';
import Index from './Component/Index';
import Aboutus from './Component/Aboutus';
import Lunch from './Component/Lunch';
import Contact from './Component/common/Contact';
import Restaurant from './Component/Restaurant';
import Menu from './Component/Menu';
import Reservation from './Component/Reservation';
import Header from './Component/common/Header';
import Footer from './Component/common/Footer';
import Otherservices from './Component/Otherservices';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Index />
      <Lunch />
      <Restaurant />
      <Aboutus />
      <Menu />
      <Reservation />
      <Otherservices />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
