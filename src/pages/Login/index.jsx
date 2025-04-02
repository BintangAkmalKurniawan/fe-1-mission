import React from "react";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="absolute top-10 left-10 text-4xl font-bold">LOGO.</div>
        <div className="w-full max-w-sm p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">LOGIN</h2>
          <form>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Email</label>
              <input type="email" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Password</label>
              <input type="password" className="w-full p-2 border rounded" required />
            </div>
            <button type="submit" className="w-full p-2 text-white bg-teal-400 rounded font-semibold" onClick={() => navigate("/home")}>
              LOGIN
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            <button onClick={() => navigate("/register")} className="text-blue-600 font-semibold">
              Belum punya akun?
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Index;
