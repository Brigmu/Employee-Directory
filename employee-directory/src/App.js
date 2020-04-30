import React from 'react';
import './App.css';
import PageContainer from './Components/pagecontainer/pagecontainer';

const employees = [
  {
    id: 1,
    name: "Becky Sue",
    position: 'Manager',
    startDate: 'Dec 3, 2009',
    salary: '$80,000',
    img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    department: 'Software'
  },
  {
    id: 2,
    name: 'Bill Franks',
    position: 'Manager',
    startDate: 'Jan 13, 2010',
    salary: '$75,000',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    department: 'Web'
  },
  {
    id: 3, 
    name: 'Josh Mooris',
    position: 'Engineer',
    startDate: 'Dec 3, 2009',
    salary: '$105,000',
    img: 'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    department: 'Software'
  },
  {
    id: 4,
    name: 'Martha Jenkins',
    position: 'Engineer',
    startDate: 'Jan 13, 2010',
    salary: '$85,000',
    img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    department: 'Web'
  },
  {
    id: 5,
    name: 'Frank Moses',
    position: 'Janitor',
    startDate: 'June 1, 2011',
    salary: '$55,000',
    img: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    department: 'Maintenance'
  },
  {
    id: 6,
    name: 'John Smith',
    position: 'Sales Lead',
    startDate: 'June 1, 2011',
    salary: '$85,000',
    img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    department: 'Sales'
  },
  {
    id: 7,
    name: 'Whitney Klem',
    position: 'Salesperson',
    startDate: 'July 25, 2011',
    salary: '$65,000',
    img: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    department: 'Sales'
  }
]

function App() {
  return (
    <div className="App">
      <PageContainer employeesArr={employees}/>
    </div>
  );
}

export default App;
