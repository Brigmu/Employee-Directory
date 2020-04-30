import React from 'react';
import './styles.css';

const EmployeeListItem = (props) => {
    return (
        <li className = 'employee' key={props.id}>
            <p>Name: {props.employee.name}</p>
            <p>Position: {props.employee.position}</p>
        </li>
    )
}

export default EmployeeListItem;