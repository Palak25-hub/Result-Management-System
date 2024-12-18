import {Link} from 'react-router-dom'
import React from 'react'

function HomeButton(){
    return (
        <div className='button'>
            <Link to="/">
            <button className='homebtn' onClick={"http://localhost:3000/"}>Home Page</button>
            </Link>
        </div>
    )
}
export default HomeButton