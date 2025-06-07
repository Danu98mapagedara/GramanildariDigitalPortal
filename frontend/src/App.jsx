import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import News from './pages/News'
import React from 'react'

import Home from './pages/Home'
function App() {
 

  return (
   <>
    <Router>
    <Navbar/>
         <Routes>
          <Route path="/" element={<Home />} />
        
     
        </Routes>
          <Footer/> 
      </Router>
  
    </>
  )
}

export default App
