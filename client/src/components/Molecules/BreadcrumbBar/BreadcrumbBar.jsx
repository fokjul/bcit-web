import React from 'react';
import './BreadcrumbBar.scss';
import CartIcon from '../../Atoms/CartIcon/CartIcon';
import '@fortawesome/fontawesome-free/css/all.min.css';

const BreadcrumbBar = () => {
  return (
    <div className='breadcrumbBar'>
        <div className='breadcrumbBar__container'>
            <ul className='breadcrumbs'>
                <li className='breadcrumbs-item'>study</li>
                <li className='breadcrumbs-item'>flexible learning</li>
                <li className='breadcrumbs-item'>computer systems</li>
                <li className='breadcrumbs-item'>comp 1516</li>
            </ul>
            <ul className='breadcrumbs--mobile'>
                <li className='breadcrumbs-item'>stu...</li>
                <li className='breadcrumbs-item'>flex...</li>
                <li className='breadcrumbs-item'>com...</li>
                <li className='breadcrumbs-item'>comp 1516</li>
            </ul>
            <CartIcon />
        </div>
        
    </div>
    
  )
}

export default BreadcrumbBar