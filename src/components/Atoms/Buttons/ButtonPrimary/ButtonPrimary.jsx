import React from 'react';
import './ButtonPrimary.scss';
import arrowForward from '../../../../assets/icons/arrow-forward.svg'

const ButtonPrimary = ({handleClick}) => {
  return (
    <button className='btn-primary' onClick={handleClick}>
      <span className='btn-primary__text'>Add to cart</span>
      <img src={arrowForward} alt='icon add to card' className='btn-primary__img'/>
    </button>
  )
}

export default ButtonPrimary