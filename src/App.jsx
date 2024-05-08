import React from 'react'
import Navbar from './componets/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className='App'>
 <Navbar />
 <Routes>
  <Route path='' element={''} />
 </Routes>

    </div>
  )
}

export default App
