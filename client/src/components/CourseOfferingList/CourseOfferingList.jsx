import React, { useEffect } from 'react';
import './CourseOfferingList.scss';
import CourseOffering from '../CourseOffering/CourseOffering';
import TabBar from '../Molecules/TabBar/TabBar';
import { useState } from 'react';

const CourseOfferingList = ({courseDetails}) => {
  const termArray = courseDetails.offerings?.map(item => item.term) || [];
  const [tabClicked, setTabClicked] = useState({ id: termArray[0] || '', isClicked: true });
  const [currentOfferings, setCurrentOfferings] = useState([]);
  const offeringDetails = courseDetails.offerings;
  const [isViewDetailsClicked, setIsViewDetailsClicked] = useState({
    id: '',
    isClicked: false
  })

  console.log(isViewDetailsClicked)

  useEffect(() => {
    if (termArray.length > 0 && !tabClicked.id) {
      setTabClicked({ id: termArray[0], isClicked: true });
    }
  }, [termArray, tabClicked.id]);

  useEffect(() => {
    const currentOfferingsArr = offeringDetails?.filter((offering) => offering.term === tabClicked.id);
    if (currentOfferingsArr?.length > 0) {
      setCurrentOfferings(currentOfferingsArr[0].schedule);
    }
  }, [tabClicked.id, offeringDetails]);

  if (!courseDetails.offerings) return null;

  return (
    <div className='offerings'>
      <h2 className='offerings__title'>Course Offerings</h2>
      <TabBar 
        terms={termArray}
        tabClicked={tabClicked}
        setTabClicked={setTabClicked}
        setIsViewDetailsClicked={setIsViewDetailsClicked}
        currentOfferings={currentOfferings}
        courseDetails={courseDetails}
      />

      <div className='offerings__list'>
          {currentOfferings.map((offering, index) => {
            return <CourseOffering
              key={index}
              offeringDetails={offering}
              isLinkClicked={isViewDetailsClicked} 
              setIsLinkClicked={setIsViewDetailsClicked}
              courseDetails={courseDetails}
            />
          })}
        </div>
    </div>
    
  )
}

export default CourseOfferingList