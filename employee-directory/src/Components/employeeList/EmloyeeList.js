import React from 'react';
import './styles.css';
import EmployeeListItem from '../employeeListItem/EmployeeListItem';

const EmployeeList = (props) => {

    return (
        <ul className = 'employee-list'>
            {props.employees.map(item => (
                <EmployeeListItem id={item.id} employee={item}/>
            ))}
        </ul>
    )
}

export default EmployeeList;