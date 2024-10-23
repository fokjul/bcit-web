import React from 'react';
import './NavMenuUtil.scss';
import NavMenuUtilItem from '../../Atoms/NavMenuUtilItem/NavMenuUtilItem';

const NavMenuUtil = () => {
  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <ul className='navbar__menu'>
          <NavMenuUtilItem menuItem='learning hub'/>
          <NavMenuUtilItem menuItem='mybcit'/>
          <NavMenuUtilItem menuItem='students'/>
          <NavMenuUtilItem menuItem='staff'/>
          <NavMenuUtilItem menuItem='events'/>
        </ul>
      </div>
    </div> 
  )
}

export default NavMenuUtil