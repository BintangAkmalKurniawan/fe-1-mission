import React from "react";
import Navbar from "../../component/layout/Navbar.jsx";
import Footer from "../../component/layout/Footer.jsx";
import satu from "../../assets/thumbnail/satu.jpeg";
import dua from "../../assets/thumbnail/dua.jpeg";
import tiga from "../../assets/thumbnail/tiga.jpeg";
import Filter from "./component/Filter.jsx";
import Card from "./component/Card.jsx";

export default function Beranda() {
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
    <div className="background-color min-h-screen ">
      <Navbar />
      <section className="grid grid-row sm:grid-col gap-5 mx-6 sm:mx-64 mt-[80px] sm:mt-[110px]">
        <h3 className="text-xl font-semibold ">Koleksi Video Pembelajaran Unggulan</h3>
        <p className="text-sm text-gray-500 mb-4">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
      </section>
      {/* Filter + Cards Section */}
      <section className="flex flex-col lg:flex-row gap-5 mx-6 sm:mx-64 my-10">
        <Filter />

        <div className="w-full lg:w-[80%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course, index) => (
              <Card key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
