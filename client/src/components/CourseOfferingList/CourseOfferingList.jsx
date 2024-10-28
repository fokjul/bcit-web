import React from 'react';
import './CourseOfferingList.scss';
import CourseOffering from '../CourseOffering/CourseOffering';
import TabBar from '../Molecules/TabBar/TabBar';
import { useState } from 'react';

const CourseOfferingList = () => {
  const [tabClicked, setTabClicked] = useState({
    id: 'fall 2024',
    isClicked: true
  })
  return (
    <div className='offerings'>
      <h2 className='offerings__title'>Course Offerings</h2>
      <TabBar 
        tabOne='fall 2024'
        tabTwo='winter 2025'
        tabClicked={tabClicked}
        setTabClicked={setTabClicked}
      />
      {tabClicked.id === 'fall 2024' 
      ? <div className='offerings__list'>
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
      : <div className='offerings__list'>
          <p>Below are four offerings of COMP 2132 for the Winter 2025 term.</p>
        </div>}
    </div>
    
  )
}

export default CourseOfferingList