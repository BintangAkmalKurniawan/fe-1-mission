import React from "react";
import { Link } from "react-router-dom";

function SideBar({ showSidebar }) {
  return (
    <div className={`${showSidebar ? "w-64" : "w-0"} transition-all duration-300 overflow-hidden bg-gray-800 text-white`}>
      <div className="p-5">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul>
          <li className="mb-4">
            <Link to="/home" className="hover:text-gray-400 ">
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/home/profile" className="hover:text-gray-400">
              Profile
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/home/formdata" className="hover:text-gray-400">
              Setting
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
