import React from 'react';
import './styles.css';

const EmployeeListItem = (props) => {
    return (
        <li data-id = {props.id} className = 'employee' key={props.id} onClick={props.handleClick}>
            <p data-id = {props.id}>Name: {props.employee.name}</p>
            <p data-id = {props.id}>Position: {props.employee.position}</p>
        </li>
    )
}

export default EmployeeListItem;