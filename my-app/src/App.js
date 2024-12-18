import React from 'react';
// import DummyData from "./Pages/Dashboard";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Pages/AllPages/NewStudent";
import Classes from "./Pages/AllPages/StudentClasses";
import Dashboard from "./Pages/AllPages/Dashboard";
import Subjects from "./Pages/AllPages/Subjects"
import Result from "./Pages/AllPages/Result"
import Password from './Pages/AllPages/AdminPass';
import EditDetails from './Pages/AccountEdit/Details';
import Login from './Pages/AccountEdit/StudentLogin';
import AdminLogin from './Pages/AccountEdit/AdminLogin';
import HomeButton from './Pages/AccountEdit/HomeButton';
import './App.css'

function app(){
    return (
    <div class="wrapper"> 
    <div id="c1">
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element = {<Dashboard/>}/>
        </Routes>
        <Routes>
            <Route exact path="/" element = {<Home/>}/>
        </Routes>
        <Routes>
            <Route exact path= "/" element = {<Classes/>}/>
        </Routes>
        <Routes>
            <Route exact path="/" element={<Subjects/>} />
        </Routes>
        <Routes>
            <Route exact path= "/" element={<Result/>}/>
        </Routes>
        <Routes>
            <Route exact path="/" element ={<Password/>}/>
        </Routes>
        <Routes>
            <Route exact path="/dashboard" element={<HomeButton/>}/>
        </Routes>
        <Routes>
            <Route exact path="/newStudent" element={<HomeButton/>}/>
        </Routes>
        
        </BrowserRouter>
        </div>
        <div id="c2">
        <BrowserRouter>
        <Routes>
            <Route exact path="/dashboard" element={<Login/>}/>
        </Routes>
        
        </BrowserRouter>
        </div>
        <div id="c3">
        <BrowserRouter>
        <Routes>
            <Route exact path = "/dashboard" element={<AdminLogin/>}/>
        </Routes>
        <Routes>
            <Route exact path="/" element={<EditDetails/>}/>
        </Routes>
        </BrowserRouter>
        </div>
        </div>
        
    )
}

export default app;