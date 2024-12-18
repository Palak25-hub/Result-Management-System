import React from 'react'
import {Link} from 'react-router-dom'

function Detail(){
    return (
        <div className='thirdblock'>
            <Link to="/newStudent">
            <h1>Edit Details</h1>
            <p1>Username</p1><br></br>
            <input type='text'></input><br></br>
            <p1>Full Name</p1><br></br>
            <input type='text'></input><br></br>
            <p1>Email</p1><br></br>
            <input type='text'></input><br></br>
            <p1>Phone</p1><br></br>
            <input type='text'></input><br></br>
            <p1>Address</p1><br></br>
            <input type='text'></input> <br></br>
            </Link>   
        </div>
    )
}
export default Detail