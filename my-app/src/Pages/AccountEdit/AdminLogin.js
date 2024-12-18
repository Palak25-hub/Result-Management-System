import {Link} from 'react-router-dom'
import React from 'react'

function AdminLogin(){
    return (
        <div className='thirdblock'>
            <h1> Admin </h1>
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
export default AdminLogin