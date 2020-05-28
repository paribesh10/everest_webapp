import React from 'react';
import './style/otherservice.scss';

const Otherservices = () => {
  return (
    <div className='container'>
      <h2 className='heading mb-3'>Other services</h2>
      <div className='row'>
        <div className='media feature-icon d-block text-center'>
          <div className='media-body'>
            <h3>Quality Cusine</h3>
            <p>
              We pride ourselves on listening to our customers, to create hand
              crafted products that deliver on taste and satisfaction using only
              the best ingredients.
            </p>
          </div>
        </div>
        <div className='media feature-icon d-block text-center'>
          <div className='media-body'>
            <h3>Naan & bread</h3>
            <p>
              The Naan dough is composed of flour, water, yogurt, and yeast,
              then traditionally cooked in the tandoor oven.
            </p>
          </div>
        </div>
        <div className='media feature-icon d-block text-center'>
          <div className='media-body'>
            <h3>Fresh food</h3>
            <p>
              Enjoy fresh food from an independent company that knows a thing or
              two about what to deliver – and the best ways to deliver it.
            </p>
          </div>
        </div>
        <div className='media feature-icon d-block text-center'>
          <div className='media-body'>
            <h3>Reserve Now</h3>
            <p>
              We will keep it exactly as is, never assuming that anything will
              change.
            </p>
          </div>
        </div>
        <div className='media feature-icon d-block text-center'>
          <div className='media-body'>
            <h3>Fresh Vegies Salad</h3>
            <p>
              With the multiple health benefits, consuming a serving of leafy
              greens each day can be one of the best habits to get into, summer
              or winter.
            </p>
          </div>
        </div>
        <div className='media feature-icon d-block text-center'>
          <div className='media-body'>
            <h3>Chicken Tandoor</h3>
            <p>
              Originated from the Indian subcontinent and is popular in many
              other parts of the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Otherservices;
