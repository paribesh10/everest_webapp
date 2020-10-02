import React from 'react';
import './style/reservation.scss';
const Reservation = () => {
  return (
    <section id='reservation'>
      <div className='content'>
        <div id='form'>
          <h1>Reserve Now</h1>
          <form action='' id='contactForm' method='post'>
            <label for='name'>Name</label>
            <input type='text' name='name' className='name' tabindex='1' />
            <label for='email'>E-mail</label>
            <input type='text' name='email' className='email' tabindex='2' />
            <label for='phone'>Enter your phone number:</label>
            <input type='number' name='phone' className='phone' tabindex='2' />
            <label for='date'>Date</label>
            <input type='date' name='date' className='date' tabindex='2' />
            <label for='time'>Time</label>
            <input type='time' name='time' className='time' tabindex='2' />
            <label for='people'>Number of persons</label>
            <select className='form-control' id='people'>
              <option>1 Person</option>
              <option>2 Persons</option>
              <option>3 Persons</option>
              <option>4 Persons</option>
              <option>5 Persons</option>
              <option>5+ Persons</option>
            </select>
            <button class='btn btn-success button'>Reserve Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Reservation;
