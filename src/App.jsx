import React from 'react'
import Navbar from './components/navbar/Navbar'
import {Routes} from 'react-router-dom';
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
       <Route path ='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
