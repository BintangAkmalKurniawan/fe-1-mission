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

export default function Beranda() {
  const thumbnails = [satu, dua, tiga, empat, lima, enam, tujuh, delapan, sembilan];

  return (
    <div className="background-color min-h-screen ">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-4 sm:px-20 flex justify-between items-center">
        <h1 className="text-orange-500 text-xl font-bold">videobelajar</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600 hidden sm:inline">Bintang Akmal Kurniawan</span>
          <img src={avatar} alt="User" className="w-8 h-8 rounded-full " />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </div>
      </header>

      {/* Banner */}
      <section className="relative  h-[320px] sm:h-[500px] flex items-center justify-center text-center text-white px-4 mt-16 sm:my-10 mx-10 sm:mx-64 rounded shadow-md ">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${poster})` }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-3xl">
          <h2 className="text-2xl sm:banner font-bold leading-tight">Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h2>
          <p className="mt-4 text-sm sm:text-base">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.{" "}
          </p>
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded shadow-md">Temukan Video Course untuk Dipelajari!</button>
        </div>
      </section>

      {/* Koleksi Video */}
      <section className="px-4 py-8 sm:py-3 mx-10 sm:mx-64 ">
        <h3 className="text-xl font-semibold mb-4">Koleksi Video Pembelajaran Unggulan</h3>

        {/* Kategori */}

        <div className="snap-x snap-mandatory overflow-x-scroll">
          <div className="flex gap-4 sm:gap-6 mb-2 text-sm sm:snap-start scroll-ms-6">
            {["Digital Teknologi", "Pemasaran", "Desain", "Pengembangan Diri", "Baru"].map((item) => (
              <span key={item} className=" px-4  py-1 rounded-full cursor-pointer hover:text-orange-500">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Video Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-row sm:flex-col bg-white rounded-xl shadow hover:shadow-md overflow-hidden p-3 sm:p-4">
              {/* Thumbnail */}
              <img src={thumbnails[i % thumbnails.length]} alt="thumbnail" className="w-24 h-24 sm:w-full sm:h-40 object-cover rounded-xl sm:rounded-xl" />

              {/* Konten */}
              <div className="flex flex-col justify-between px-2 sm:p-4 flex-1">
                {/* Konten atas */}
                <div>
                  <h4 className="text-sm font-semibold leading-snug">Big 4 Auditor Financial Analyst</h4>
                  <p className=" hidden sm:block text-xs text-gray-400 mt-1">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik</p>

                  {/* Instruktur */}
                  <div className="flex items-center gap-2 mt-2">
                    <img src={avatar} alt="avatar" className="w-6 h-6 rounded-full" />
                    <div>
                      <p className="text-xs font-medium">Jenna Ortega</p>
                      <p className="text-xs text-gray-400 -mt-1">Senior Accountant</p>
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
      <footer className="bg-white text-gray-700 border-t">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Atas - Logo & Deskripsi */}
          <div className="mb-6">
            <h2 className="text-xl font-bold">
              <span className="text-yellow-500">video</span>
              <span className="text-red-500">belajar</span>
            </h2>
            <p className="mt-2 font-medium">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
            <p className="mt-2 text-sm">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p className="text-sm">+62-877-7123-1234</p>
          </div>

          {/* Menu responsive */}
          <div className="block sm:hidden border-t border-gray-200 pt-4">
            {["Perusahaan", "Perusahaan", "Komunitas"].map((item, idx) => (
              <details key={idx} className="mb-2">
                <summary className="font-semibold cursor-pointer py-1 flex justify-between items-center">
                  {item}
                  <span className="ml-2">›</span>
                </summary>
              </details>
            ))}
          </div>

          {/* Menu desktop */}
          <div className="hidden sm:grid grid-cols-3 gap-10">
            {/* Kategori */}
            <div>
              <h4 className="font-semibold mb-2">Kategori</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Digital & Teknologi</li>
                <li>Pemasaran</li>
                <li>Manajemen Bisnis</li>
                <li>Pengembangan Diri</li>
                <li>Desain</li>
              </ul>
            </div>

            {/* Perusahaan */}
            <div>
              <h4 className="font-semibold mb-2">Perusahaan</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Tentang Kami</li>
                <li>FAQ</li>
                <li>Kebijakan Privasi</li>
                <li>Ketentuan Layanan</li>
                <li>Bantuan</li>
              </ul>
            </div>

            {/* Komunitas */}
            <div>
              <h4 className="font-semibold mb-2">Komunitas</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Tips Sukses</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>

          {/* Footer bawah */}
          <div className="border-t mt-8 pt-6 pb-8 flex flex-col items-start lg:flex-row lg:justify-between lg:items-center">
            <div className="flex gap-4 mb-4 lg:mb-0">
              <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <p className="text-sm text-gray-500">@2023 Gerobak Sayur All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
