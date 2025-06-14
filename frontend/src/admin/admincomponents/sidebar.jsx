import React from "react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
   <div className="w-64 bg-blue-900 text-white min-h-screen flex flex-col justify-between p-4">
      {/* Menu Links */}
      <ul className="space-y-5 text-2xl">
        <li>
          <NavLink to="/admin/dashboard" className="block py-2 rounded hover:bg-amber-300 transition duration-300">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/birth-requests" className="block py-2 rounded hover:bg-amber-300 transition duration-300">
            Birth Requests
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/marriage-requests" className="block py-2 rounded hover:bg-amber-300 transition duration-300">
            Marriage Requests
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/death-requests" className="block py-2 rounded hover:bg-amber-300 transition duration-300">
            Death Requests
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/upload" className="block py-2 rounded hover:bg-amber-300 transition duration-300">
            Uploads
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/settings" className="block py-2 rounded hover:bg-amber-300 transition duration-300">
            Settings
          </NavLink>
        </li>
      </ul>

      {/* Logout */}
      <div className="">
        <NavLink
          to="/login"
          className="block bg-red-700 text-white text-center py-2 px-4 rounded hover:bg-red-500 transition duration-300"
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
