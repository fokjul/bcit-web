import React from 'react';
import './AccordionList.scss';
import AccordionRow from '../../Atoms/AccordionRow/AccordionRow';

const AccordionList = ({courseDetails=''}) => {
  return (
    <div className='accordion'>
      <AccordionRow 
        title='Course Overview'
        courseDetails={courseDetails}
      />
      <AccordionRow 
        title='Learning Outcomes'
        courseDetails={courseDetails}
      />
      <AccordionRow 
        title='Related Programs'
        courseDetails={courseDetails}
      />
    </div>
  )
}

export default AccordionList