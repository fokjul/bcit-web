import React from 'react'
import './TextLink.scss'
import ButtonPrimary from '../Buttons/ButtonPrimary/ButtonPrimary'

const TextLink = ({text, handleClick}) => {
  return (
    <button className='text-link' onClick={handleClick}>{text}</button>
  )
}

export default TextLink