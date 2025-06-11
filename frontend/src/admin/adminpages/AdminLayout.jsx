import React from "react";
import Sidebar from "../admincomponents/sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">
     <Sidebar/>
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
      <Outlet/>
      </div>
    </div>
  );
};

export default AdminLayout;
