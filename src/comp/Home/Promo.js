import './Promo.css';
import React from 'react';

function Promo(props) {

  return (
    <>
        <h4 className='PromoText'>{props.text}</h4>
    </>
  )
}

export default Promo;
