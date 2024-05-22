import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import WelcomePage from './WelcomePage'
import DashBoard from './DashBoard'
const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<WelcomePage/>}/>
  <Route path='/dashboard' element={<DashBoard/>}/>
</Routes>
</BrowserRouter>
 
  )
}

export default App