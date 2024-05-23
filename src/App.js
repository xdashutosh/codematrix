import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import WelcomePage from './WelcomePage'
import DashBoard from './DashBoard'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import CodeBase from './CodeBase'
const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<WelcomePage/>}/>
  <Route path='/dashboard/:id' element={<DashBoard/>}/>
  <Route path='/codebase' element={<CodeBase/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/home' element={<Home/>}/>
</Routes>
</BrowserRouter>
 
  )
}

export default App