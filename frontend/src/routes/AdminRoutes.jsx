import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../admin/adminpages/AdminLayout'


const AdminRoutes = () => {
  return (
      <Routes>
      <Route path="/admin" element={<AdminLayout/>}>
     
        {/* // <Route path="birth-requests" element={<BirthRequests />} />
        // <Route path="marriage-requests" element={<MarriageRequests />} />
        // <Route path="death-requests" element={<DeathRequests />} />
        // <Route path="uploads" element={<Uploads />} />
        // <Route path="settings" element={<Settings />} />  */}
      </Route>
    </Routes>
  )
}

export default AdminRoutes