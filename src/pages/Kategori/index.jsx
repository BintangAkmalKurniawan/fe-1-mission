import { React, useState } from "react";
import { FaSort, FaSearch, FaClock, FaTags, FaBook } from "react-icons/fa";
import Navbar from "../../component/layout/Navbar";
import satu from "../../assets/thumbnail/satu.jpeg";
import dua from "../../assets/thumbnail/dua.jpeg";
import tiga from "../../assets/thumbnail/tiga.jpeg";
import Card from "../Kategori/component/Card.jsx";

function Index() {
  const filterIcons = {
    "Bidang Studi": <FaBook className="text-green-500" />,
    Harga: <FaTags className="text-green-500" />,
    Durasi: <FaClock className="text-green-500" />,
  };

  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});

  const toggleOption = (filterName, option) => {
    const current = selectedFilters[filterName] || [];
    const updated = current.includes(option) ? current.filter((o) => o !== option) : [...current, option];

    setSelectedFilters({
      ...selectedFilters,
      [filterName]: updated,
    });
  };

  const resetFilters = () => {
    setSelectedFilters({});
    setOpenDropdown(null);
  };
  const filters = [
    {
      name: "Bidang Studi",
      options: ["Pemasaran", "Digital & Teknologi", "Pengembangan Diri", "Bisnis Manajemen"],
    },
    {
      name: "Harga",
      options: ["Gratis", "Di Bawah Rp100K", "Rp100K - Rp300K", "Di Atas Rp300K"],
    },
    {
      name: "Durasi",
      options: ["Kurang dari 4 Jam", "4 - 8 Jam", "Lebih dari 8 Jam"],
    },
  ];

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
      <div className="bg-white rounded-xl p-4 space-y-3 ">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-gray-800">Filter</p>
          <button onClick={resetFilters} className="text-red-500 text-sm font-medium">
            Reset
          </button>
        </div>

        {filters.map((filter, index) => (
          <div key={index} className="border border-gray-100 rounded-md p-2">
            <button onClick={() => setOpenDropdown(openDropdown === filter.name ? null : filter.name)} className="w-full flex justify-between items-center mb-2">
              <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
                {filterIcons[filter.name]}
                {filter.name}
              </div>
              <span className="text-green-600">⌄</span>
            </button>

            {openDropdown === filter.name && (
              <div className="space-y-1 pl-6">
                {filter.options.map((option, i) => (
                  <label key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <input type="checkbox" checked={(selectedFilters[filter.name] || []).includes(option)} onChange={() => toggleOption(filter.name, option)} className="accent-green-500" />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
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
      <section className=" sm:py-3 mx-5 sm:mx-64 my-10 sm:my-20">
        <div className="space-y-3">
          {courses.map((course, i) => (
            <Card key={i} {...course} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Index;
