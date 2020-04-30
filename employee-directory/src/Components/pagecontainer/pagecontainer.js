import React, { useState, useEffect } from 'react';
import './styles.css';
import Wrapper from '../Wrapper/Wrapper';
import FiltersWrapper from '../FiltersWrapper/FiltersWrapper';

const PageContainer = (props) => {
    const [nameFilter, setNameFilter] = useState();
    const [positionFilter, setPositionFilter] = useState();
    const [employees, setEmployees] = useState([...props.employeesArr]);
    const [employeeInfo, setEmployeeInfo] = useState({
    id: '',
    name: '',
    position: '',
    startDate: '',
    salary: '',
    img: '',
    department: ''
    });
    

    
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

    const handleItemClick = (event) => {
        const id = parseInt(event.target.getAttribute('data-id'));
        let index = 0;
        for(let i = 0; i < props.employeesArr.length; i++){
            console.log(props.employeesArr[i].id);
            if(props.employeesArr[i].id === id){
                index = props.employeesArr[i].id - 1;
                break;
            }
        }
        setEmployeeInfo(props.employeesArr[index]);
    }

    return (
        <div className='container'>
            <FiltersWrapper employees ={employees} handleName={e => setNameFilter(e.target.value)} handlePosition={e => setPositionFilter(e.target.value)} handleClick={handleItemClick}/>
            <Wrapper class='single-employee-wrapper' singleEmployee = {employeeInfo}/>
        </div>
    )
}

export default PageContainer;