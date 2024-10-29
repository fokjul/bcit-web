import React from 'react';
import './StatusTag.scss'

const StatusTag = ({status}) => {
  console.log(status)
  return (
    <div className={`statusTag statusTag--${status.value}`}>
        <p className={`statusTag-text statusTag-text--${status.value}`}>{status.name}</p>
    </div>
  )
}

export default StatusTag