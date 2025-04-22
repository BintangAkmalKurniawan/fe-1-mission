import { React } from "react";
import poster from "../../assets/thumbnail/poster.jpeg";
import satu from "../../assets/thumbnail/satu.jpeg";
import dua from "../../assets/thumbnail/dua.jpeg";
import tiga from "../../assets/thumbnail/tiga.jpeg";
import empat from "../../assets/thumbnail/empat.jpeg";
import lima from "../../assets/thumbnail/lima.jpeg";
import enam from "../../assets/thumbnail/enam.jpeg";
import tujuh from "../../assets/thumbnail/tujuh.jpeg";
import delapan from "../../assets/thumbnail/delapan.jpeg";
import sembilan from "../../assets/thumbnail/sembilan.jpeg";
import avatar from "../../assets/avatar/satu.png";
import Navbar from "../../component/layout/Navbar.jsx";
import Footer from "../../component/layout/Footer.jsx";

export default function Beranda() {
  const thumbnails = [satu, dua, tiga, empat, lima, enam, tujuh, delapan, sembilan];
  const navbar = ["Semua Kelas", "Pemasaran", "Design", "Pengembangan Diri", "Bisnis"];

  return (
    <div className="background-color min-h-screen ">
      {/* Header */}
      <Navbar />
      {/* Banner */}
      <section className="relative top-[60px] h-[420px] sm:h-[400px] flex items-center justify-center text-center text-white px-4 mt-[100px] sm:my-10 mx-10 sm:mx-64 rounded shadow-md ">
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
      <section className="px-4 py-8 sm:py-3 mx-10 sm:mx-64 my-10 sm:my-20">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="grid grid-rows-1 bg-white rounded-xl shadow hover:shadow-md overflow-hidden p-3 sm:p-3 mt-4">
              {/* Thumbnail */}
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-1 items-start">
                <img src={thumbnails[i % thumbnails.length]} alt="thumbnail" className="w-24 h-24 sm:w-full sm:h-40 object-cover rounded-xl sm:rounded-xl col-span-1 col-start-1 " />
                {/* Konten */}
                <div className="grid grid-col gap-1 pl-2 sm:px-3 sm:py-2 flex-1 col-span-1 -mx-[60px] sm:mx-0">
                  {/* Konten atas */}
                  <div>
                    <h4 className="text-sm font-semibold max-w-[200px] sm:max-w-full ml-[7px]">Big 4 Auditor Financial Analyst</h4>
                    <p className="hidden sm:block text-xs text-gray-400 mt-1">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik</p>
                    {/* Instruktur */}
                    <div className="flex items-center mt-1 gap-2">
                      <img src={avatar} alt="avatar" className="w-6 h-6 rounded-full" />
                      <div>
                        <p className="text-xs font-medium">Jenna Ortega</p>
                        <p className="text-xs text-gray-400 mt-0">Senior Accountant</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bintang & Harga (di bawah konten) */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2 text-yellow-400 text-sm">
                  <span>★ ★ ★ ☆ ☆</span>
                  <span className="text-gray-500 text-sm">3.5</span>
                  <span className="text-gray-400 text-xs">(86)</span>
                </div>
                <span className="text-green-600 font-bold text-sm">Rp 300K</span>
              </div>
            </div>
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
