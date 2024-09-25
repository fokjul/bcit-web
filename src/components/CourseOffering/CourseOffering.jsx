import React, { useState } from 'react';
import './CourseOffering.scss';
import { location, calendar} from '../../assets/icons';
import ScheduleInfo from '../Atoms/ScheduleInfo/ScheduleInfo';
import ButtonTetriary from '../Atoms/Buttons/ButtonTetriary/ButtonTetriary';
import StatusTag from '../Atoms/StatusTag/StatusTag';
import TextLink from '../Atoms/TextLink/TextLink';
import ButtonPrimary from '../Atoms/Buttons/ButtonPrimary/ButtonPrimary';

const CourseOffering = ({status, text}) => {
  const [isLinkClicked, setIsLinkClicked] = useState(false)
  return (
    <div className='crn-section'>
      <div className='crn-section__header'>
          <div className='crn-section__crn-container'>
            <div className='crn-section__crn'>
              <h4 className='crn-section__crn-header'>CRN 47008</h4>
              <ButtonTetriary 
                handleClick={()=> (console.log('btn clicked'))}
              />
            </div>
            <span className='crn-section__caption'>6 weeks</span>
          </div>
          <div className='crn-section__cost'>
              <h4 className='crn-section__crn-header'>$599.00</h4>
              <span className='crn-section__caption'>Domestic fee</span>
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
      <div className={isLinkClicked ? 'offering-details__container' : 'hidden'}>
          <div className='offering-details__instructor'>
            <h5 className='offering-details__heading'>Instructor</h5>
            <p>Jeff Parker</p>
          </div>
          <div className='offering-details__outline'>
            <h5 className='offering-details__heading'>Course outline</h5>
            <p>Course outline TBD — see Learning Outcomes in the interim.</p>
          </div>
        </div>
      <div className={isLinkClicked && status === 'available' ? 'crn-section__status--available' : 'crn-section__status' }>
        <StatusTag 
          text={text}
          status={status}
        />
        {
          isLinkClicked 
          ? (status === 'available' 
              ? <ButtonPrimary handleClick={()=> (console.log('button clicked'))}/> 
              : <p className='offering-details__subscribe'>This course is full. Please check this page for other currently available offerings, subscribe to receive email updates or contact us with your comments or questions.</p>)
          : <TextLink 
          text="View details"
          handleClick={()=>setIsLinkClicked(!isLinkClicked)}
          isLinkClicked={isLinkClicked}
          /> 
        }
        

      </div>
      <div className={isLinkClicked ? 'offering-details' : 'hidden'}>

        <div className='offering-details__info'>
          <h5 className='offering-details__heading'>Important Information</h5>
          <ol>
            <li>Departmental approval needed</li>
            <li>International fees are typically 3.12 times the domestic tuition. Exact cost will be calculated upon completion of registration.</li>
            <li>This is an intensive 6 week delivery course. Students must attend all classes. Please email cstflex@bcit.ca for Departmental approval. Include your Student number (A0#) and COMP__ and preferred CRN __ and Program Declaration____. Course is 36 hours on campus. Please Note: Attendance, participation in class and the BCIT Learning Hub are mandatory. You should prepare to spend 2-3 hours on homework for every 1 hour of class time. This course may require an average total time commitment of 9-12+ hours per week. 3 hours of synchronous class time and 6-9+ hours per week for homework. Late registration is not permitted. BCIT Computing is primarily a Microsoft Windows environment. Students must provide their own current model Windows-compatible PC. i5 or higher equivalent processor, with 8 GB of RAM minimum, and 256 GB minimum storage. Highspeed internet access is needed for online sections and for homework. Mac users must have the ability to manage and support their iOS computer. They may need to create a virtual Windows environment using Parallels or VMWare Fusion. COMP instructors may not be able to assist Mac users with software compatibility issues. BCIT does not provide access to Parallels or support for students to use a Mac to run Windows. No class November 11 (Remembrance Day). The start and end dates have been changed from Oct 28 – Dec 9 to Nov 4 – Dec 16.</li>
          </ol>
        </div>
        <div className='offering-details__hide-btn-container'>
          <TextLink 
            text="Hide details"
            handleClick={()=>setIsLinkClicked(!isLinkClicked)}
          />
        </div>
      </div>
     
    </div>
  )
}

export default CourseOffering