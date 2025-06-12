import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "../admincomponents/sidebar";

const AdminLayout = () => {
  return (
    <div className="flex">

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
    <Sidebar/>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default AdminLayout;
