import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import News from './pages/News'
import React from 'react'

import Home from './pages/Home'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import BirthForm from './components/forms/BirthForm'
import DeathForm from './components/forms/DeathForm'
import MarriageForm from './components/forms/MarriageForm'
import ServiceSlider from './pages/ServiceSlider'

function App() {
 

  return (
   <>
    <Router>
  <Navbar/> <br /> <br /> <br />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<ServiceSlider />} />
          <Route path="/news" element={<News />} />
            <Route path="/birthformrequest" element={<BirthForm/>} />
              <Route path="/deathformrequest" element={<DeathForm />} />
                <Route path="/marriageformrequest" element={<MarriageForm />} />
           
     
        </Routes>
         <Footer/> 
      </Router>
  
    </>
  )
}

export default App
