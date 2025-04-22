import React from "react";
import { FaSort, FaSearch } from "react-icons/fa";
import Navbar from "../../component/layout/Navbar";
import satu from "../../assets/thumbnail/satu.jpeg";
import dua from "../../assets/thumbnail/dua.jpeg";
import tiga from "../../assets/thumbnail/tiga.jpeg";

const Card = ({ title, instructor, price, rating, image }) => {
  const [name, role] = instructor.split("\n");

  return (
    <div className="flex flex-col items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
      <div className="flex gap-3">
        <img src={image} alt="thumbnail" className="w-16 h-16 rounded-md object-cover" />
        <div className="flex-1">
          <h3 className="font-semibold text-sm text-gray-900 leading-tight">{title}</h3>
          <p className="text-xs text-gray-800 font-medium">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>

      <div className="flex items-center gap-1 text-xs text-yellow-400 mt-1">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>{rating}</span>
        <div className="text-green-600 font-semibold text-sm ml-[200px]">{price}</div>
      </div>
    </div>
  );
};

function Index() {
  const courses = [
    {
      title: "Big 4 Auditor Financial Analyst",
      instructor: "Jenna Ortega\nSenior Accountant",
      price: "Rp 300K",
      rating: "3.5 (68)",
      image: satu,
    },
    {
      title: "Big 4 Auditor Financial Analyst",
      instructor: "Jenna Ortega\nSenior Accountant",
      price: "Rp 300K",
      rating: "3.5 (68)",
      image: dua,
    },
    {
      title: "Big 4 Auditor Financial Analyst",
      instructor: "Jenna Ortega\nSenior Accountant",
      price: "Rp 300K",
      rating: "3.5 (68)",
      image: tiga,
    },
  ];

  return (
    <div className="bg-[#FFFDF5] min-h-screen p-4 space-y-4">
      {/* Header */}
      <Navbar />

      {/* Title & Subtitle */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 leading-snug">Koleksi Video Pembelajaran Unggulan</h2>
        <p className="text-sm text-gray-500">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
      </div>

      {/* Filter */}
      <div className="bg-white rounded-xl p-4 space-y-3">
        <div className="flex justify-between items-center">
          <p className="font-medium text-gray-700">Filter</p>
          <button className="text-red-500 text-sm font-medium">Reset</button>
        </div>
        <div className="space-y-2">
          {["Bidang Studi", "Harga", "Durasi"].map((item, i) => (
            <button key={i} className="w-full flex justify-between items-center border p-2 rounded text-gray-700 text-sm">
              <span>{item}</span>
              <span className="text-gray-400">▼</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sort & Search */}
      <div className="flex gap-2">
        <button className="flex items-center gap-1 border px-3 py-2 rounded text-sm text-gray-700">
          <FaSort /> Urutkan
        </button>
        <div className="flex items-center border rounded px-2 flex-1">
          <FaSearch className="text-gray-400" />
          <input type="text" placeholder="Cari Kelas" className="outline-none p-2 w-full text-sm" />
        </div>
      </div>

      {/* Course Cards */}
      <div className="space-y-3">
        {courses.map((course, i) => (
          <Card key={i} {...course} />
        ))}
      </div>
    </div>
  );
}

export default Index;
