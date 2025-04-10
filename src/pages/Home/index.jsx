import React, { useState } from "react";
import SideBar from "../../component/layout/SideBar.jsx";
import Navbar from "../../component/layout/Navbar.jsx";
import { Outlet } from "react-router-dom";

function HomePage() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="flex h-screen">
      <SideBar showSidebar={showSidebar} />
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={() => setShowSidebar(!showSidebar)} className="showSidebar" />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
