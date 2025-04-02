import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul>
        <li className="mb-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/profile" className="hover:text-gray-400">
            Profile
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/settings" className="hover:text-gray-400">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
