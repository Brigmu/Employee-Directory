import React from 'react';
import './styles.css';

export const ContentBoxRow1 = (props) => {
    return(
        <div className='row'>
            <div className='info'>
                <h2>Id:</h2>
                <p>Test</p>
            </div>
            <div className='info'>
                <h2>Name:</h2>
                <p>Test</p>
            </div>
            <div className='info'>
                <h2>Position:</h2>
                <p>Test</p>
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
                <p>Test</p>
            </div>
            <div className='info'>
                <h2>Salary:</h2>
                <p>Test</p>
            </div>
            <div className='info'>
                <h2>Department:</h2>
                <p>Test</p>
            </div>
            {/* <h2>Start Date</h2>
            <h2>Salary</h2>
            <h2>Department</h2> */}
        </div>
    )
}