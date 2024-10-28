import React from 'react'
import './NoticePanel.scss'

const NoticePanel = ({heading, descr, type}) => {
  return (
    <div className ={`noticePanel ${type}`}>
        <span className='noticePanel__heading'>{heading}</span>
        <p className='noticePanel__descr'>{descr}</p>
    </div>
  )
}

export default NoticePanel