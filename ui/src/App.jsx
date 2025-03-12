import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Addstudent from './pages/Addstudent'
import Studentdetails from './pages/Studentdetails'

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Homepage/>}/>
       <Route path='/addstudent' element={<Addstudent/>}/>
       <Route path='/studentdetails' element={<Studentdetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App