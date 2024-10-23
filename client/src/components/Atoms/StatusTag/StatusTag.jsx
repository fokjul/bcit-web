import React from 'react';
import './StatusTag.scss'

const StatusTag = ({text, status}) => {
  return (
    <div className={`statusTag statusTag--${status}`}>
        <p className={`statusTag-text statusTag-text--${status}`}>{text}</p>
    </div>
  )
}

export default StatusTag