import {Link} from 'react-router-dom'
import React from 'react'

function Result(){
    return (
        <div className='result'>
            <Link to='/result'>
            <button className='res' onClick={"http://localhost:3000/result"}>Student Results</button>
            </Link>
        </div>
    )
}
export default Result