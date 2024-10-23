import React from 'react';
import './ScheduleInfo.scss'

const ScheduleInfo = ({src, alt, copy}) => {
  return (
    <div className='schedule-info'>
        <img src={src} alt={alt} className='schedule-info__icon'/>
        <p className='schedule-info__text'>{copy}</p>
    </div>
  )
}

export default ScheduleInfo