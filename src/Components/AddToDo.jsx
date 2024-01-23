import React, { useState } from 'react'
import { IoAddCircleSharp } from "react-icons/io5";

function AddToDo({onNewItem}) {

  const[todoName,setToDoName]=useState('');
  const[dueDate,setDueDate]=useState('');

  const handleNameChange=(event)=>{
      setToDoName(event.target.value);
  }

  const handleDateChange=(event)=>{
    setDueDate(event.target.value);
    
  }

  const handleButtonClick=()=>{
   onNewItem(todoName,dueDate)
   setDueDate("");
   setToDoName("");
  }

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="enter to do here" value={todoName} onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange}/>
        </div>
        <div className="col-2 ">
          <button type="button" className="btn btn-success kg-butten" onClick={handleButtonClick}><IoAddCircleSharp /></button>
        </div>
      </div>
    </div>
  )
}

export default AddToDo