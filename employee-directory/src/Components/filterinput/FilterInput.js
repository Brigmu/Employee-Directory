import React from 'react';
import './styles.css';

const FilterInput = (props) => {
    return (
        <input type='text' placeholder = {props.placeholder} className="filter-input" onChange={props.handleChange}></input>
    )
}

export default FilterInput;