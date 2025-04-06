import React from "react";
import { useNavigate } from "react-router";

function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-teal-500 p-4 text-white flex justify-between">
      <button onClick={toggleSidebar} className="bg-white text-black px-3 py-1 rounded">
        ☰ Menu
      </button>
      <h1 className="text-lg font-bold">LOGO</h1>
      <button className="bg-red-500 px-4 py-1 rounded" onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;
