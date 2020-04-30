import React from 'react';
import './styles.css';

export const ContentBoxRow1 = (props) => {
    return(
        <div className='row'>
            <div className='info'>
                <h2>Id:</h2>
                <p>{props.employeeInfo.id}</p>
            </div>
            <div className='info'>
                <h2>Name:</h2>
                <p>{props.employeeInfo.name}</p>
            </div>
            <div className='info'>
                <h2>Position:</h2>
                <p>{props.employeeInfo.position}</p>
            </div>
            {/* <h2>Name</h2>
            <h2>Position</h2> */}
        </div>
    )
}

export const ContentBoxRow2 = (props) => {
    return (
        <div className='row'>
            <div className='info'>
                <h2>Start Date:</h2>
                <p>{props.employeeInfo.startDate}</p>
            </div>
            <div className='info'>
                <h2>Salary:</h2>
                <p>{props.employeeInfo.salary}</p>
            </div>
            <div className='info'>
                <h2>Department:</h2>
                <p>{props.employeeInfo.department}</p>
            </div>
            {/* <h2>Start Date</h2>
            <h2>Salary</h2>
            <h2>Department</h2> */}
        </div>
    )
}