import React from 'react';
import './styles.css';
import EmployeeImg from '../EmployeeImg/EmployeeImg';
import EmployeeContentBox from '../EmployeeContentBox/EmployeeContentBox';

const Wrapper = (props) => {
    return (
        <div className ={props.class}>
            <EmployeeContentBox employeeInfo = {props.singleEmployee}/>
            <EmployeeImg src={props.singleEmployee.img}/>
        </div>
    )
}

export default Wrapper;