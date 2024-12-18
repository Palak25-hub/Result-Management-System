import {Link} from 'react-router-dom'
import React from 'react'

function Password(){
    return (
        <div className='password'>
            <Link to='/password'>
            <button className='pass' onClick={"http://localhost:3000/password"}>Password Change</button>
            </Link>
        </div>
    )
}
export default Password