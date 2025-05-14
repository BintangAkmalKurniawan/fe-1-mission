import React, { useState } from "react";
import { FaBook, FaTags, FaClock } from "react-icons/fa";

// Map label filter ke ikon
const FilterIcon = {
  "Bidang Studi": <FaBook className="text-green-500 mr-2" />,
  Harga: <FaTags className="text-green-500 mr-2" />,
  Durasi: <FaClock className="text-green-500 mr-2" />,
};

// Daftar filter dan opsinya
const filters = [
  {
    name: "Bidang Studi",
    options: ["Pemasaran", "Digital & Teknologi", "Pengembangan Diri", "Bisnis Manajemen"],
  },
  {
    name: "Harga",
    options: ["Gratis", "Berbayar"],
  },
  {
    name: "Durasi",
    options: ["Kurang dari 4 Jam", "4-8 Jam", "Lebih dari 8 Jam"],
  },
];

const Filter = () => {
  // Inisialisasi state dengan semua opsi bernilai false
  const [selectedFilters, setSelectedFilters] = useState(() => {
    const initialState = {};
    filters.forEach((filter) => {
      filter.options.forEach((option) => {
        initialState[option] = false;
      });
    });
    return initialState;
  });

  // Fungsi handle perubahan checkbox
  const handleCheckboxChange = (option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  // Fungsi reset semua checkbox
  const handleReset = () => {
    const resetState = {};
    Object.keys(selectedFilters).forEach((key) => {
      resetState[key] = false;
    });
    setSelectedFilters(resetState);
  };

  return (
    <div className="w-full h-[45vh] lg:w-[20%] p-4 border rounded-md bg-white">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold">Filter</h4>
        <button className="text-red-500 text-sm hover:underline" onClick={handleReset}>
          Reset
        </button>
      </div>
      {filters.map((filter) => (
        <div key={filter.name} className="mb-4">
          <p className="font-medium text-sm mb-1 flex items-center">
            {FilterIcon[filter.name]}
            {filter.name}
          </p>
          {filter.options.map((option) => (
            <div key={option} className="flex items-center mb-1">
              <input type="checkbox" id={option} className="mr-2" checked={selectedFilters[option]} onChange={() => handleCheckboxChange(option)} />
              <label htmlFor={option} className="text-sm">
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Filter;
