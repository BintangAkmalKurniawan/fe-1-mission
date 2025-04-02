import React from "react";
import SideBar from "../../component/layout/SideBar.jsx";
import Navbar from "../../component/layout/Navbar.jsx";

const HomePage = () => {
  const data = [
    { id: 1, name: "John Doe", role: "Admin" },
    { id: 2, name: "Jane Smith", role: "User" },
    { id: 3, name: "Michael Brown", role: "Moderator" },
  ];

  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Welcome to Home Page</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id} className="border">
                  <td className="border p-2 text-center">{user.id}</td>
                  <td className="border p-2 text-center">{user.name}</td>
                  <td className="border p-2 text-center">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
