import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Index() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const defaultUser = {
    email: "admin@gmail.com",
    password: "password",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (e.email === defaultUser.email && e.password === defaultUser.password) {
      alert("Invalid username or password");
    } else {
      navigate("/home");
    }
  };

  const handleAccountDefault = (e) => {
    e.preventDefault();
    setFormData({ email: defaultUser.email, password: defaultUser.password });
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="absolute top-10 left-10 text-4xl font-bold">LOGO.</div>
        <div className="w-full max-w-sm p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">LOGIN</h2>
          <form>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Email</label>
              <input type="email" className="w-full p-2 border rounded" required value={formData.email} />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Password</label>
              <input type="password" className="w-full p-2 border rounded" required value={formData.password} />
            </div>
            <button type="submit" className="w-full p-2 text-white bg-teal-400 rounded font-semibold" onClick={(e) => handleLogin(e)}>
              LOGIN
            </button>
          </form>
          <button className="w-full p-2 text-black bg-gray-400 rounded font-semibold mt-2" onClick={handleAccountDefault}>
            Account Default
          </button>
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
