import React from "react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/admin/birth-requests">Birth Requests</NavLink></li>
        <li><NavLink to="/admin/marriage-requests">Marriage Requests</NavLink></li>
        <li><NavLink to="/admin/death-requests">Death Requests</NavLink></li>
        <li><NavLink to="/admin/upload">Uploads</NavLink></li>
        <li><NavLink to="/admin/settings">Settings</NavLink></li>
        <li><NavLink to="/login">Logout</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
