import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../admin/adminpages/AdminLayout'
import  Dashbord from '../admin/adminpages/dashboard'

const AdminRoutes = () => {
  return (
    <Routes>
        <Route path="/admin" element={<AdminLayout />}>
       <Route path='dashboard' element={<Dashbord />} />
      
      </Route>
    </Routes>
  )
}

export default AdminRoutes