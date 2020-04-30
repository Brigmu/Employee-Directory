import React, { useState, useEffect } from 'react';
import './styles.css';
import Wrapper from '../Wrapper/Wrapper';
import FiltersWrapper from '../FiltersWrapper/FiltersWrapper';

const PageContainer = (props) => {
    const [nameFilter, setNameFilter] = useState();
    const [positionFilter, setPositionFilter] = useState();
    const [employees, setEmployees] = useState([...props.employeesArr]);
    

    
    useEffect(()=>{
        if(nameFilter !== undefined && positionFilter !== undefined){
            const nameRegex = new RegExp(nameFilter.toLowerCase());
            const positionRegex = new RegExp(positionFilter.toLowerCase());
            let firstFilter = props.employeesArr.filter(employee => {
                return nameRegex.test(employee.name.toLowerCase());
            })
            let filteredEmployees = firstFilter.filter(employee => {
                return positionRegex.test(employee.position.toLowerCase());
            })
            setEmployees(filteredEmployees);

        } else if (nameFilter !== undefined) {
            const nameRegex = new RegExp(nameFilter.toLowerCase());
            let filteredEmployees = props.employeesArr.filter(employee => {
                return nameRegex.test(employee.name.toLowerCase());
            })
            setEmployees(filteredEmployees);
        }  else if (positionFilter !== undefined) {
            const positionRegex = new RegExp(positionFilter.toLowerCase());
            let filteredEmployees = props.employeesArr.filter(employee => {
                return positionRegex.test(employee.position.toLowerCase());
            })
            setEmployees(filteredEmployees);
        }
    },[nameFilter, positionFilter])

    return (
        <div className='container'>
            <FiltersWrapper employees ={employees} handleName={e => setNameFilter(e.target.value)} handlePosition={e => setPositionFilter(e.target.value)}/>
            <Wrapper class='single-employee-wrapper'/>
        </div>
    )
}

export default PageContainer;