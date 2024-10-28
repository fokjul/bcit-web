import React from 'react';
import './UtilMenuBar.scss';
import UtilMenuItem from '../../Atoms/UtilMenuItem/UtilMenuItem';

const UtilMenuBar = () => {
  return (
    <div className='navbar-util'>
      <div className='navbar-util__container'>
        <ul className='navbar-util__menu'>
          <UtilMenuItem menuItem='learning hub'/>
          <UtilMenuItem menuItem='mybcit'/>
          <UtilMenuItem menuItem='students'/>
          <UtilMenuItem menuItem='staff'/>
          <UtilMenuItem menuItem='events'/>
        </ul>
      </div>
    </div> 
  )
}

export default UtilMenuBar