import React, { useState } from 'react';
import './CourseOffering.scss';
import ScheduleInfo from '../Atoms/ScheduleInfo/ScheduleInfo';
import ButtonTetriary from '../Atoms/Buttons/ButtonTetriary/ButtonTetriary';
import StatusTag from '../Atoms/StatusTag/StatusTag';
import TextLink from '../Atoms/TextLink/TextLink';
import ButtonPrimary from '../Atoms/Buttons/ButtonPrimary/ButtonPrimary';

const CourseOffering = ({offeringDetails, isLinkClicked, setIsLinkClicked, courseDetails}) => {
  console.log(courseDetails)

  return (
    <div className='crn-section'>
      <div className='crn-section__header'>
          <div className='crn-section__header-container'>
            <div className='crn-section__crn-container'>
              <div className='crn-section__crn'>
                  <h4 className='crn-section__crn-header'>{offeringDetails.dates}</h4>
              </div>
            <div className='crn-section__crn'>
              <div className='crn-section__caption'>
              <span className='crn-section__caption-label'>CRN</span>
              <span className='crn-section__caption-value'>{offeringDetails.crn}</span>
              </div>
              <ButtonTetriary 
                handleClick={()=> (console.log('btn clicked'))}
              />
            </div>
            </div>
            <div className='crn-section__status-tag'>
              <StatusTag 
                status={offeringDetails.status}
              />
            </div>
            
          </div>
          <div className='crn-section__cost'>
              <h4 className='crn-section__crn-header'>{`$${offeringDetails.domestic_fee}`}</h4>
              <span className='crn-section__caption'>Domestic fee</span>
          </div>
      </div>
      <div className='crn-section__schedule'>
       <ScheduleInfo 
        meetingMetrics={offeringDetails.meeting_metrics}
       />
      </div>
      <div className={isLinkClicked.isClicked && isLinkClicked.id === offeringDetails.crn ? 'offering-details__container' : 'hidden'}>
          <div className='offering-details__item'>
            <h5 className='offering-details__item-heading'>Duration</h5>
            <p className='offering-details__item-copy'>{offeringDetails.duration}</p>
          </div>
          <div className='offering-details__item'>
            <h5 className='offering-details__item-heading'>Instructor</h5>
            <p className='offering-details__item-copy'>{offeringDetails.instructor}</p>
          </div>
          <div className='offering-details__item'>
            <h5 className='offering-details__item-heading'>
              Course outline</h5>
            <p className='offering-details__item-copy'>Course outline TBD — see Learning Outcomes in the interim.</p>
          </div>
        </div>
        <div className={isLinkClicked.isClicked && isLinkClicked.id === offeringDetails.crn ? 'offering-details' : 'hidden'}>
        <div className='offering-details__info'>
          <h5 className='offering-details__item-heading'>
            Important Information</h5>
          <ol className='offering-details__item-copy'>
            {offeringDetails.important_info.map((item, index) => {
              return <li key={index} className='offering-details__important-item'>{item}</li>
            })}
          </ol>
        </div>
      </div>
      <div className={isLinkClicked.isClicked && isLinkClicked.id === offeringDetails.crn && offeringDetails.status === 'Available' ? 'crn-section__status--available' : 'crn-section__status' }>
        {
          isLinkClicked.isClicked && isLinkClicked.id === offeringDetails.crn 
          ? (offeringDetails.status.value === 'available' 
              ? <ButtonPrimary handleClick={()=> (console.log('button clicked'))}/> 
              : <div className='offering-details__subscribe'>
                  <div>{`This course is ${offeringDetails.status.name.toLowerCase()}. Please check this page for other currently available offerings, `}</div>
                  <TextLink text='subscribe' />
                  <div>{` to receive email updates or `}  <TextLink text='contact us' /> {`with your comments or questions.`}</div>
                </div>)
          : <TextLink 
          text="View details"
          handleClick={()=>setIsLinkClicked({id: offeringDetails.crn, isClicked: true})}
          /> 
        }
        

      </div>
      <div className={isLinkClicked.isClicked && isLinkClicked.id === offeringDetails.crn ? 'offering-details' : 'hidden'}>
        <div className='offering-details__hide-btn-container'>
          <TextLink 
            text="Hide details"
            handleClick={()=>setIsLinkClicked({id: offeringDetails.crn, isClicked: false})}
          />
        </div>
      </div>
     
    </div>
  )
}

export default CourseOffering