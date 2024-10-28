import React from 'react';
import './PageHeader.scss';
import ButtonSecondary from '../../Atoms/Buttons/ButtonSecondary/ButtonSecondary.jsx'
import { email, print } from '../../../assets/icons';

const PageHeader = () => {
  return (
    <div className='pageHeader'>
        <div className='pageHeader__container'>
            <div className='pageHeader__container-text'>
                <span className='pageHeader__descr'>COMP 1516</span>
                <h1 className='pageHeader__title'>Programming Fundamentals Part 1 (Python)</h1>
                <div className='pageHeader__descr'>
                    <span className='pageHeader__descr-element'>Computer Systems</span>
                    <span className='pageHeader__descr-element'>Course</span>
                </div>
                <div className='pageHeader__icon'>
                    <img src={print} alt='print icon' className='pageHeader__icon-element'/>
                    <img src={email} alt='email icon' className='pageHeader__icon-element'/>
                </div>
            </div>
        
            <div className='pageHeader__container-btn'>
                <div className='pageHeader__btn'>
                    <ButtonSecondary btnLabel='subscribe'/>
                </div>
                <div className='pageHeader__btn'>
                    <ButtonSecondary btnLabel='contact us'/>
                </div>  
            </div> 
        </div>
    </div>
  )
}

export default PageHeader