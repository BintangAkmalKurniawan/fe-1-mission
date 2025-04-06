import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";

function Index() {
  const navigate = useNavigate();
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const defaultUser = {
    email: "admin@gmail.com",
    password: "password",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const found = existingUsers.find((user) => user.email === formData.email && user.password === formData.password);

    if (found || (formData.email === defaultUser.email && formData.password === defaultUser.password)) {
      navigate("/home");
    } else if (found === "" || (formData.email === "" && formData.password === "")) {
      alert("Email atau password kosong!");
    } else {
      alert("Email atau password salah!");
    }
  };

  const handleAccountDefault = (e) => {
    e.preventDefault();
    setFormData({ email: defaultUser.email, password: defaultUser.password });
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const isEmailUsed = existingUsers.find((user) => user.email === formData.email);
    if (isEmailUsed) {
      alert("Email sudah digunakan!");
      return;
    }

    const newUsers = [...existingUsers, formData];
    localStorage.setItem("users", JSON.stringify(newUsers));
    alert("Register sukses! Silakan login.");
    setFormData({ email: "", password: "" });
    setIsLoginPage(true);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="absolute top-10 left-10 text-4xl font-bold">LOGO.</div>
        <div className="w-full max-w-sm p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">{isLoginPage ? "Login" : "Register"}</h2>
          <form onSubmit={isLoginPage ? handleLogin : handleRegister} className="space-y-3">
            <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" value={formData.email} onChange={handleOnChange} />
            <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded" value={formData.password} onChange={handleOnChange} />
            <button type="submit" className="w-full p-2 text-white bg-teal-400 rounded font-semibold">
              {isLoginPage ? "Login" : "Register"}
            </button>
          </form>
          {!isLoginPage ? null : (
            <button className="w-full p-2 text-black bg-gray-400 rounded font-semibold mt-2" onClick={handleAccountDefault}>
              Account Default
            </button>
          )}
          <p className="text-sm mt-4 text-center">
            {isLoginPage ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
            <button onClick={() => setIsLoginPage(!isLoginPage)} className="text-blue-500 underline">
              {isLoginPage ? "Register di sini" : "Login di sini"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Index;
