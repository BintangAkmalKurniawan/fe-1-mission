import React from "react";

function index() {
  const user = {
    name: "Bitang akmal",
    email: "akmal@example.com",
    role: "Mahasiswa Informatika",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Seorang pemuda dengan semangat tinggi untuk belajar pemrograman dan membangun aplikasi yang berdampak!",
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <div className="flex items-center space-x-6">
        <img className="h-24 w-24 rounded-full object-cover border-4 border-teal-400" src={user.avatar} alt="avatar" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.role}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Tentang Saya</h3>
        <p className="text-gray-600 text-sm">{user.bio}</p>
      </div>

      <div className="mt-6 flex gap-3">
        <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition">Edit Profile</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Logout</button>
      </div>
    </div>
  );
}

export default index;
