import React from 'react'
import './TextLink.scss'

const TextLink = ({text, handleClick = ''}) => {
  return (
    <button className='text-link' onClick={handleClick}>{text}</button>
  )
}

export default TextLink