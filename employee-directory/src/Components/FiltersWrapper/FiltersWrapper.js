import React from 'react';
import './styles.css';
import FilterInput from '../filterinput/FilterInput';
import EmployeeList from '../employeeList/EmloyeeList';

const FiltersWrapper = (props) => {
    return (
        <div className = 'filters-wrapper'>
            <h4>Enter a name or position to filter employees</h4>
            <FilterInput placeholder='Enter name' handleChange={props.handleName}/>
            <FilterInput placeholder='Enter position' handleChange={props.handlePosition}/>
            <EmployeeList employees={props.employees}/>
        </div>
    )
}

export default FiltersWrapper;