import { React } from "react";
import poster from "../../assets/thumbnail/poster.jpeg";
import satu from "../../assets/thumbnail/satu.jpeg";
import dua from "../../assets/thumbnail/dua.jpeg";
import tiga from "../../assets/thumbnail/tiga.jpeg";
import Navbar from "../../component/layout/Navbar.jsx";
import Footer from "../../component/layout/Footer.jsx";
import Card from "../Kategori/component/Card.jsx";

export default function Beranda() {
  const navbar = ["Semua Kelas", "Pemasaran", "Design", "Pengembangan Diri", "Bisnis"];

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
    <div className="background-color min-h-screen">
      {/* Header */}
      <Navbar />
      {/* Banner */}
      <section className="relative top-[20px] h-[420px] sm:h-[400px] flex items-center justify-center text-center text-white px-4 mt-[100px] sm:my-10 mx-10 sm:mx-64 rounded shadow-md ">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${poster})` }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-3xl ">
          <h2 className="text-2xl sm:banner font-bold leading-tight">Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h2>
          <p className="mt-4 text-sm sm:text-base">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.{" "}
          </p>
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded shadow-md">Temukan Video Course untuk Dipelajari!</button>
        </div>
      </section>

      {/* Koleksi Video */}
      <section className=" py-8 sm:py-3 mx-10 sm:mx-64 my-10 sm:my-20">
        <h3 className="text-xl font-semibold mb-4">Koleksi Video Pembelajaran Unggulan</h3>

        {/* Kategori */}

        <div className="snap-x snap-mandatory overflow-x-scroll">
          <div className="flex gap-5 sm:gap-6 mb-2 text-sm sm:snap-start scroll-ms-6">
            {navbar.map((item) => (
              <span className=" px-4 py-1 rounded-full cursor-pointer hover:text-orange-500 ">{item}</span>
            ))}
          </div>
        </div>
        {/* Video Cards */}
        <div className="space-y-3">
          {courses.map((course, i) => (
            <Card key={i} {...course} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative mt-10 bg-black text-white py-12 px-4 text-center my-10 mx-10 sm:mx-64 rounded-xl sm:rounded-xl">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${poster})` }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-sm font-light mb-2">NEWSLETTER</p>
          <h3 className="text-2xl font-semibold mb-2">Mau Belajar Lebih Banyak?</h3>
          <p className="text-sm max-w-md mx-auto mb-4">Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id</p>
          <form className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Masukkan email kamu" className="w-full px-4 py-2 rounded text-black" />
            <button type="submit" className="bg-yellow-500 hover:bg-orange-600 px-6 py-2 rounded text-white">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
