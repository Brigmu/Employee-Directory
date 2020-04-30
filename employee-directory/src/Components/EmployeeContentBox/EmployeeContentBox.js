import React from 'react';
import './styles.css';
import {ContentBoxRow1, ContentBoxRow2 } from '../ContentBoxRows/ContentBoxRows';


const EmployeeContentBox = (props) => {
    return (
        <div className='content-box'>
            <ContentBoxRow1 employeeInfo = {props.employeeInfo}></ContentBoxRow1>
            <ContentBoxRow2 employeeInfo = {props.employeeInfo}></ContentBoxRow2>
        </div>
    )
}

export default EmployeeContentBox;