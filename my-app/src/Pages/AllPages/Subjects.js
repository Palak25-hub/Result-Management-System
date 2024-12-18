import {Link} from 'react-router-dom'
import React from 'react'

function Subjects(){
    return (
        <div className='subjects'>
            <Link to='/subjects'>
            <button className='sub' onClick={"http://localhost:3000/subjects"}>Student Subjects</button>
            </Link>
        </div>
    )
}
export default Subjects