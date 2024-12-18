import {Link} from "react-router-dom"
import React from "react"

function classes(){
    return (
        <div className="classes">
            <Link to="/studentclasses">
            <button className='studentclass' onClick={"http://localhost:3000/studentclasses"}>Student Classes</button>
            </Link>
        </div>
    )
}
export default classes