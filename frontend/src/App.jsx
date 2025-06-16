import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import News from './pages/News'
import Home from './pages/Home'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import BirthForm from './components/forms/BirthForm'
import DeathForm from './components/forms/DeathForm'
import MarriageForm from './components/forms/MarriageForm'
import ServiceSlider from './pages/ServiceSlider'
import Dashboard from './admin/adminpages/dashboard'
import Marriage from './admin/adminpages/marriagerequest'
import Birth from './admin/adminpages/birthrequest'
import Upload from './admin/adminpages/upload'
import Profile from './admin/adminpages/profile'

function App() {
 

  return (
   <>
    <Router>
  <Navbar/> <br /> <br /> <br />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<ServiceSlider />} />
          <Route path="/news" element={<News />} />
            <Route path="/birthcertificaterequest" element={<BirthForm/>} />
              <Route path="/deathcertificaterequest" element={<DeathForm />} />
                <Route path="/marriageregistration" element={<MarriageForm />} />
           

            {/* Admin routes */}   
    <Route path="/admin" element={<Dashboard/>} />
     <Route path="/admin/marriage-requests" element={<Marriage/>} />
     <Route path="/admin/birth-requests" element={<Birth/>} />
     <Route path="/admin/upload" element={<Upload/>} />
     <Route path="/admin/profile" element={<Profile/>} />

        </Routes>
         <Footer/> 
        
      </Router>
  
    </>
  )
}

export default App
