import React from 'react';
import './ButtonTetriary.scss'
import link from '../../../../assets/icons/link.svg';

const ButtonTetriary = ({handleClick}) => {
  return (
    <div className='btn-tetriary' onClick={handleClick}>
        <img src={link} alt='copy link' className='btn-tetriary__img'/>
        <span className='btn-tetriary__text'>copy link</span>
    </div>
  )
}

export default ButtonTetriary