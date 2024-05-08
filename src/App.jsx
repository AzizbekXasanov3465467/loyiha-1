import React from 'react'
import Header from './componets/header/Header'
import Navbar from './componets/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className='App'>
 <Navbar />

 <Routes>
        <Route path='/'  element={<Header />}/>

      </Routes>

    </div>
  )
}

export default App
