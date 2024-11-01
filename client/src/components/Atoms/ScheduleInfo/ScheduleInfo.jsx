import React from 'react';
import './ScheduleInfo.scss';



const ScheduleInfo = ({ meetingMetrics }) => {

  return (
    <>
      <div className='meetingMetrics'>
      <div className='meetingMetrics__header'>
        <div className='meetingMetrics__header-cell'>Dates</div>
        <div className='meetingMetrics__header-cell'>Days</div>
        <div className='meetingMetrics__header-cell'>Time</div>
        <div className='meetingMetrics__header-cell'>Locations</div>
      </div>
      {meetingMetrics?.map((metricItem, index) => (
        <div className='meetingMetrics__row'>
            <div key={index} className='meetingMetrics__cell'>{metricItem.dates}</div>
            {/* <div key={index} className='meetingMetrics__cell'>{metricItem.days === metricItem.times ? `${metricItem.days}` : `${metricItem.days}, ${metricItem.times}`}</div> */}
            <div key={index} className='meetingMetrics__cell'>{metricItem.days}</div>
            <div key={index} className='meetingMetrics__cell'>{metricItem.times}</div>
            <div key={index} className='meetingMetrics__cell'>{metricItem.locations}</div>
        </div>
        
      ))}
      </div>
      <div className='meetingMetrics--mobile'>
      {meetingMetrics?.map((metricItem, index) => (
        <div className='meetingMetrics__row'>
            <div className='meetingMetrics__metric'>
              <div className='meetingMetrics__header-cell'>Dates</div>
              <div key={index} className='meetingMetrics__cell'>{metricItem.dates}</div>
            </div>
            <div className='meetingMetrics__metric'>
              <div className='meetingMetrics__header-cell'>Days</div>
              <div key={index} className='meetingMetrics__cell'>{metricItem.days}</div>
            </div>
            <div className='meetingMetrics__metric'>
              <div className='meetingMetrics__header-cell'>Time</div>
              <div key={index} className='meetingMetrics__cell'>{metricItem.times}</div>
            </div>
            <div className='meetingMetrics__metric'>
              <div className='meetingMetrics__header-cell'>Locations</div>
              <div key={index} className='meetingMetrics__cell'>{metricItem.locations}</div>
            </div>
        </div>
        
      ))}
      </div>
    </>
   
  );
}

export default ScheduleInfo