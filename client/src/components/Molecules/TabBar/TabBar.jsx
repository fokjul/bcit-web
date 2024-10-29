import React from 'react';
import './TabBar.scss';

const TabBar = ({tabClicked, setTabClicked, terms}) => {

const handleTabClick = (e) => {
    setTabClicked({
        id: e.target.id,
        isClicked: true
    })
}
  return (
    <ul className='tabBar'>
        {terms?.map((term, index) => {
            return <li id={term} key={index} className={`tabBar__btn ${tabClicked.id === term ? 'selected' : ''}`} onClick={handleTabClick}>{term} </li>
        })}
    </ul>
  )
}

export default TabBar