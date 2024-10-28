import React from 'react';
import './TabBar.scss';

const TabBar = ({tabOne, tabTwo, tabClicked, setTabClicked}) => {

    const handleTabClick = (e) => {
        setTabClicked({
            id: e.target.id,
            isClicked: true
        })
    }
  return (
    <ul className='tabBar'>
        <li id={tabOne} className={`tabBar__btn ${tabClicked.id === tabOne ? 'selected' : ''}`} onClick={handleTabClick}>{tabOne} </li>
        <li id={tabTwo} className={`tabBar__btn ${tabClicked.id === tabTwo ? 'selected' : ''}`} onClick={handleTabClick}>{tabTwo}</li>
    </ul>
  )
}

export default TabBar