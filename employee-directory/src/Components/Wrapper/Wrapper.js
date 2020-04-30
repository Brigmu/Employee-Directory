import React from 'react';
import './styles.css';
import EmployeeImg from '../EmployeeImg/EmployeeImg';
import EmployeeContentBox from '../EmployeeContentBox/EmployeeContentBox';

const Wrapper = (props) => {
    return (
        <div className ={props.class}>
            <EmployeeContentBox />
            <EmployeeImg />
        </div>
    )
}

export default Wrapper;