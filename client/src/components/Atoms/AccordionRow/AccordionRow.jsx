import React from 'react';
import './AccordionRow.scss';
import { arrowDownBlue} from '../../../assets/icons';
import { useState } from 'react';
import AccordionDescr from '../AccourdionDescription/AccordionDescr';

const AccordionRow = ({title, courseDetails}) => {
    const [isRowClicked, setIsRowClicked] = useState(false)

    const handleRowClick = () => {
        setIsRowClicked(prev => !prev)
    }

  return (
    <div className='accordionRow'>
        <div className='accordionRow__header' onClick={handleRowClick}>   
            <h2 className='accordionRow__header-title'>{title}</h2>
            <button 
                className='accordionRow__header-btn' type='button'>
                    <img src={arrowDownBlue} alt='arrow icon' className={`accordionRow__header-btn-icon ${isRowClicked ? 'rotated' : ''}`}/>
            </button>
            
        </div>
        <div className={ isRowClicked ? 'accordionRow__text' : 'hidden'}>
            <AccordionDescr 
                title={title}
                courseDetails={courseDetails}

            />
        </div>
        
    </div>

  )
}

export default AccordionRow