import { Outlet } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [stepOrder, setStepOrder] = useState(false);
  const stepOrderActive = stepOrder ? "text-gray-300" : "text-[#3ECF4C]";

  return (
    <div className="min-h-screen background-color">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm px-4 sm:px-20 flex justify-between items-center h-[60px]">
        <h1 className="text-orange-500 text-xl font-bold">videobelajar</h1>
        <div className="hidden sm:flex items-center text-gray-400">
          <i className={`ri-radio-button-line text-[30px] ${stepOrderActive}`}></i>
          <span className="text-black font-medium mr-10">Pilih Metode</span>
          <div className="w-[74px] h-[3px] bg-[#3A354161]"></div>
          <i className="ri-radio-button-line text-[30px]"></i>
          <span className="font-medium mr-10">Bayar</span>
          <div className="w-[74px] h-[3px] bg-[#3A354161]"></div>
          <i className="ri-radio-button-line text-[30px]"></i>
          <span className="font-medium">Selesai</span>
        </div>
      </header>

      <div className="pt-[60px]">
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
