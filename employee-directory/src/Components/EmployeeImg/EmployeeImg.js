import React from 'react';
import './style.css';

const EmployeeImg = (props) => {
    let imageSrc ='';
    props.src ? imageSrc = props.src : imageSrc = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';
    return (
        <img alt = 'employee' className='employee-img' src={imageSrc}></img>
    )
}

export default EmployeeImg