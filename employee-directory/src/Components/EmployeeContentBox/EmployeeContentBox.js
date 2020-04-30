import React from 'react';
import './styles.css';
import EmployeeId from '../EmployeeId/EmployeeId';
import {ContentBoxRow1, ContentBoxRow2 } from '../ContentBoxRows/ContentBoxRows';


const EmployeeContentBox = (props) => {
    return (
        <div className='content-box'>
            {/* <EmployeeId /> */}
            <ContentBoxRow1></ContentBoxRow1>
            <ContentBoxRow2></ContentBoxRow2>
        </div>
    )
}

export default EmployeeContentBox;