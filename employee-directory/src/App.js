import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageContainer from './Components/pagecontainer/pagecontainer';

const employees = [
  {
    id: 1,
    name: "Becky Sue",
    position: 'Manager'
  },
  {
    id: 2,
    name: 'Bill Franks',
    position: 'Manager'
  },
  {
    id: 3, 
    name: 'Josh Mooris',
    position: 'Engineer'
  },
  {
    id: 4,
    name: 'Martha Jenkins',
    position: 'Engineer'
  },
  {
    id: 5,
    name: 'Frank Moses',
    position: 'Janitor'
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
