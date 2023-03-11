

import React from 'react'
import { Route, Routes } from 'react-router'

import Create from './Attendance management system/Create'
import Read from './Attendance management system/Read'
import Edit from './Attendance management system/Edit'

import {css} from "./Attendance management system/Create.css"



export default function App() {
  return (
    <Routes>

      <Route path='/' element={<Read/>}></Route>
      <Route  path='/Create' element={<Create/>}></Route>
      <Route  path='/Edit' element={<Edit/>}></Route>


    </Routes>
  )
}
