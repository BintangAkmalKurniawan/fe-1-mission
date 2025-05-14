import { React } from "react";
import { useState } from "react";
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
import Navbar from "../../component/layout/Navbar.jsx";
import Footer from "../../component/layout/Footer.jsx";
import Card from "../Home/component/Card.jsx";

export default function Beranda() {
  const navbar = ["Semua Kelas", "Pemasaran", "Desain", "Pengembangan Diri", "Bisnis"];
  const [selectedCategory, setSelectedCategory] = useState("Semua Kelas");

  const courses = [
    // === PEMASARAN ===
    {
      title: "Big 4 Auditor Financial Analyst",
      instructor: "Jenna Ortega\nSenior Accountant",
      price: "Rp 300K",
      rating: "3.5 (68)",
      image: satu,
      category: "Pemasaran",
    },
    {
      title: "Strategi Digital Marketing",
      instructor: "Reza Mahendra\nDigital Marketer",
      price: "Rp 250K",
      rating: "4.2 (120)",
      image: dua,
      category: "Pemasaran",
    },
    {
      title: "SEO & SEM Optimization",
      instructor: "Alia Fauzia\nSEO Expert",
      price: "Rp 200K",
      rating: "4.0 (87)",
      image: tiga,
      category: "Pemasaran",
    },
    {
      title: "Branding dan Positioning",
      instructor: "Dewi Lestari\nBrand Strategist",
      price: "Rp 270K",
      rating: "4.3 (93)",
      image: empat,
      category: "Pemasaran",
    },
    {
      title: "Marketing Analytics Dasar",
      instructor: "Taufik Hidayat\nMarketing Analyst",
      price: "Rp 280K",
      rating: "4.4 (101)",
      image: lima,
      category: "Pemasaran",
    },
    {
      title: "Email Marketing Automation",
      instructor: "Karina Putri\nCampaign Specialist",
      price: "Rp 210K",
      rating: "4.1 (72)",
      image: enam,
      category: "Pemasaran",
    },
    {
      title: "Content Marketing Mastery",
      instructor: "Ari Wibowo\nContent Strategist",
      price: "Rp 230K",
      rating: "4.0 (89)",
      image: tujuh,
      category: "Pemasaran",
    },
    {
      title: "Facebook Ads for Business",
      instructor: "Lisa Andini\nAds Specialist",
      price: "Rp 260K",
      rating: "3.9 (77)",
      image: delapan,
      category: "Pemasaran",
    },
    {
      title: "TikTok Marketing Strategy",
      instructor: "Nina Saputra\nSocial Media Expert",
      price: "Rp 250K",
      rating: "4.2 (84)",
      image: sembilan,
      category: "Pemasaran",
    },

    // === DESAIN ===
    {
      title: "Fundamental UI/UX Design",
      instructor: "Dian Kartika\nUI/UX Designer",
      price: "Rp 320K",
      rating: "4.5 (134)",
      image: satu,
      category: "Desain",
    },
    {
      title: "Adobe Photoshop Masterclass",
      instructor: "Kevin Santoso\nGraphic Designer",
      price: "Rp 300K",
      rating: "4.3 (102)",
      image: dua,
      category: "Desain",
    },
    {
      title: "Canva untuk Bisnis",
      instructor: "Putri Ayu\nCreative Designer",
      price: "Rp 150K",
      rating: "4.1 (88)",
      image: tiga,
      category: "Desain",
    },
    {
      title: "Illustrator dari Nol",
      instructor: "Yoga Pratama\nVector Artist",
      price: "Rp 275K",
      rating: "4.4 (93)",
      image: empat,
      category: "Desain",
    },
    {
      title: "Membuat Portofolio Digital",
      instructor: "Indah Lestari\nVisual Designer",
      price: "Rp 220K",
      rating: "4.2 (77)",
      image: lima,
      category: "Desain",
    },
    {
      title: "Design Thinking untuk Pemula",
      instructor: "Rian Hidayat\nProduct Designer",
      price: "Rp 260K",
      rating: "4.0 (81)",
      image: enam,
      category: "Desain",
    },
    {
      title: "Figma Advanced",
      instructor: "Aditya Saputra\nUI Specialist",
      price: "Rp 310K",
      rating: "4.5 (97)",
      image: tujuh,
      category: "Desain",
    },
    {
      title: "Mobile App UI Design",
      instructor: "Aulia Rachma\nUI/UX Freelancer",
      price: "Rp 290K",
      rating: "4.3 (88)",
      image: delapan,
      category: "Desain",
    },
    {
      title: "Layouting & Typography",
      instructor: "Niko Prasetyo\nPrint Designer",
      price: "Rp 240K",
      rating: "4.1 (79)",
      image: sembilan,
      category: "Desain",
    },

    // === Pengembangan Diri ===
    {
      title: "Web Dev dengan HTML, CSS, JS",
      instructor: "Agus Riyadi\nWeb Developer",
      price: "Rp 280K",
      rating: "4.4 (103)",
      image: satu,
      category: "Pengembangan Diri",
    },
    {
      title: "React untuk Pemula",
      instructor: "Siti Rahma\nFrontend Engineer",
      price: "Rp 300K",
      rating: "4.3 (100)",
      image: dua,
      category: "Pengembangan Diri",
    },
    {
      title: "Kotlin Android Developer",
      instructor: "Dimas Prakoso\nMobile Dev",
      price: "Rp 320K",
      rating: "4.5 (120)",
      image: tiga,
      category: "Pengembangan Diri",
    },
    {
      title: "Laravel Framework Dasar",
      instructor: "Budi Santosa\nBackend Developer",
      price: "Rp 290K",
      rating: "4.2 (89)",
      image: empat,
      category: "Pengembangan Diri",
    },
    {
      title: "Python untuk Data Science",
      instructor: "Laras Widya\nData Analyst",
      price: "Rp 310K",
      rating: "4.6 (130)",
      image: lima,
      category: "Pengembangan Diri",
    },
    {
      title: "Git & GitHub Workshop",
      instructor: "Eko Susilo\nDevOps",
      price: "Rp 200K",
      rating: "4.0 (75)",
      image: enam,
      category: "Pengembangan Diri",
    },
    {
      title: "JavaScript Lanjutan",
      instructor: "Farah Lestari\nSoftware Engineer",
      price: "Rp 270K",
      rating: "4.1 (91)",
      image: tujuh,
      category: "Pengembangan Diri",
    },
    {
      title: "Machine Learning Dasar",
      instructor: "Rizky Hadi\nML Engineer",
      price: "Rp 350K",
      rating: "4.7 (140)",
      image: delapan,
      category: "Pengembangan Diri",
    },
    {
      title: "REST API dengan Node.js",
      instructor: "Anita Zahra\nBackend Specialist",
      price: "Rp 285K",
      rating: "4.3 (99)",
      image: sembilan,
      category: "Pengembangan Diri",
    },
    // === Pengembangan Diri ===
    {
      title: "Web Dev dengan HTML, CSS, JS",
      instructor: "Agus Riyadi\nWeb Developer",
      price: "Rp 280K",
      rating: "4.4 (103)",
      image: satu,
      category: "Pengembangan Diri",
    },
    {
      title: "React untuk Pemula",
      instructor: "Siti Rahma\nFrontend Engineer",
      price: "Rp 300K",
      rating: "4.3 (100)",
      image: dua,
      category: "Pengembangan Diri",
    },
    {
      title: "Kotlin Android Developer",
      instructor: "Dimas Prakoso\nMobile Dev",
      price: "Rp 320K",
      rating: "4.5 (120)",
      image: tiga,
      category: "Pengembangan Diri",
    },
    {
      title: "Laravel Framework Dasar",
      instructor: "Budi Santosa\nBackend Developer",
      price: "Rp 290K",
      rating: "4.2 (89)",
      image: empat,
      category: "Pengembangan Diri",
    },
    {
      title: "Python untuk Data Science",
      instructor: "Laras Widya\nData Analyst",
      price: "Rp 310K",
      rating: "4.6 (130)",
      image: lima,
      category: "Pengembangan Diri",
    },
    {
      title: "Git & GitHub Workshop",
      instructor: "Eko Susilo\nDevOps",
      price: "Rp 200K",
      rating: "4.0 (75)",
      image: enam,
      category: "Pengembangan Diri",
    },
    {
      title: "JavaScript Lanjutan",
      instructor: "Farah Lestari\nSoftware Engineer",
      price: "Rp 270K",
      rating: "4.1 (91)",
      image: tujuh,
      category: "Pengembangan Diri",
    },
    {
      title: "Machine Learning Dasar",
      instructor: "Rizky Hadi\nML Engineer",
      price: "Rp 350K",
      rating: "4.7 (140)",
      image: delapan,
      category: "Pengembangan Diri",
    },
    {
      title: "REST API dengan Node.js",
      instructor: "Anita Zahra\nBackend Specialist",
      price: "Rp 285K",
      rating: "4.3 (99)",
      image: sembilan,
      category: "Bisni",
    },
  ];

  const filteredCourses = selectedCategory === "Semua Kelas" ? courses : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="background-color min-h-screen">
      {/* Header */}
      <Navbar />
      {/* Banner */}
      <section className="relative top-[10px] sm:top-[70px] h-[420px] sm:h-[400px] flex items-center justify-center text-center text-white px-4 mt-[100px] sm:my-10 mx-10 sm:mx-64 rounded shadow-md ">
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
              <span key={item} onClick={() => setSelectedCategory(item)} className={`px-4 py-1 rounded-full cursor-pointer hover:text-orange-500 ${selectedCategory === item ? "bg-orange-100 text-orange-600 font-semibold" : ""}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCourses.map((course, i) => (
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
