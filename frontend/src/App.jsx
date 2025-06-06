import { useState } from 'react'
import './App.css'
import News from './pages/News'
import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/Footer'
function App() {
 

  return (
    <>
      <div>
        <Navbar/>
     <News/>
     <Footer/>
      </div>
   
    </>
  )
}

export default App
