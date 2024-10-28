import React from 'react';
import './Accordion.scss';
import AccordionRow from '../../Atoms/AccordionRow/AccordionRow';

const Accordion = () => {
  return (
    <div className='accordion'>
      <AccordionRow 
        title='Course Overview'
        descr='hello'
      />
      <AccordionRow 
        title='Learning Outcomes'
        descr='hello'
      />
      <AccordionRow 
        title='Related Programs'
        descr='hello'
      />
    </div>
  )
}

export default Accordion