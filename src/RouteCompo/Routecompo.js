import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../Component/Login'

import LinkCompo from '../LinkCompo.js/LinkCompo'
import Registerform from '../Component/Register'
import Home from '../Component/Home'
const Routecompo = () => {
  return (
    <div>
        <BrowserRouter>
        <LinkCompo/>
        <Routes>
            
            <Route path='/home' element={<Home/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element ={<Registerform/>}/>
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default Routecompo