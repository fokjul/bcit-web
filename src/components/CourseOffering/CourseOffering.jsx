import React from 'react';
import './CourseOffering.scss';
import { location, calendar} from '../../assets/icons';
import ScheduleInfo from '../Atoms/ScheduleInfo/ScheduleInfo';

const CourseOffering = () => {
  return (
    <div className='crn-section'>
      <div className='crn-section__header'>
          <div className='crn-section__crn-container'>
            <div className='crn-section__crn'>
                <h4 className='crn-section__crm'>CRN 47008</h4>
                <div className='crn-section__copy-link-container'>
                  <img src='#' alt='copy icon' className='crn-section__copy-link-icon'/>
                  <span className='crn-section__copy-link-img'>copy link</span>
                </div>
            </div>
            <p>6 weeks</p>
          </div>
          <div className='crn-section__cost'>
              <h4 className='crn-section__crm'>$599.00</h4>
              <span className='crn-section__copy-link-img'>domestic fee</span>
            </div>
      </div>
      <div className='crn-section__schedule'>
       <ScheduleInfo 
        src={calendar}
        alt='calendar icon'
        copy='Nov 04 - Dec 16 (Mon, Wed), 13:00 - 16:00'
       />
        <ScheduleInfo 
        src={location}
        alt='location icon'
        copy='Downtown DTC Rm. 484'
       />
       <ScheduleInfo 
        src={calendar}
        alt='calendar icon'
        copy='Nov 04 - Dec 16 (asynchronous labs)'
       />
        <ScheduleInfo 
        src={location}
        alt='location icon'
        copy='Online'
       />
      </div>
      
    </div>
  )
}

export default CourseOffering