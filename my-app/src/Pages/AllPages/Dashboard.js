import {Link } from 'react-router-dom'
import React from 'react'

function dashboard(){
    return (
        <div class='firstPage'>
            <div class='style'>
                <p1>DASHBOARD</p1>
            </div>
            <Link to="/dashboard">
            
            <button class='dash' onClick={"http://localhost:3000/dashboard"}>Dashboard</button>
            
            </Link>
        </div>
    )
}
export default dashboard