import React from 'react'
import {Link } from 'react-router-dom'

function Login(){
    return(
        <div className='secondblock'>
            <h1> Student </h1>
            <p1>Excellent Management System</p1><br></br>
            <p1>Username</p1><br></br>
            <Link to="/dashboard">
            <input type='text'></input><br></br>
            </Link>
            <p1>Password</p1><br></br>
            <Link to="/dashboard">
            <input type='password'></input>
            </Link>
        </div>
    )
}
export default Login