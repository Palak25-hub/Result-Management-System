import {Link } from 'react-router-dom';
import React from "react"

function AddStudent(){
    return (
        <div className='student'>
            <div className='Style'>
            <p1>APPEARANCE</p1>
            </div>
            <Link to="/newStudent">
            <button className='addstudent' onclick="http://localhost:3000/newStudent"> Add Student </button>
            </Link>
        </div>
    )
}
export default AddStudent