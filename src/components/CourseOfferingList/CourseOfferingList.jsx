import React from 'react';
import './CourseOfferingList.scss';
import CourseOffering from '../CourseOffering/CourseOffering';

const CourseOfferingList = () => {
  return (
    <div className='offering-list'>
        <p>Below are four offerings of COMP 2132 for the Fall 2024 term.</p>
        <CourseOffering
          text='seats available' 
          status='available'
        />
        <CourseOffering
          text='full'  
          status='full'
        />
        <CourseOffering 
          text='in progress' 
          status='inProgress'
        />
    </div>
  )
}

export default CourseOfferingList