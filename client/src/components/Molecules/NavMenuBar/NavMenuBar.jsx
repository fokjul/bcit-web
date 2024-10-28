import React from 'react';
import './NavMenuBar.scss'
import SearchBarLarge from '../../Atoms/SearchBarLarge/SearchBarLarge'
import NavMenu from '../../Atoms/NavMenu/NavMenu';
import Logo from '../../Atoms/Logo/Logo';


const NavMenuMain = () => {
  return (
    <div className='navMenuBar'>
        <div className='navMenuBar__container'>
          <Logo />
          <div className='navMenuBar__menu-container'>
            <NavMenu />
            <SearchBarLarge />
          </div>
          
        </div>
    </div>
  )
}

export default NavMenuMain