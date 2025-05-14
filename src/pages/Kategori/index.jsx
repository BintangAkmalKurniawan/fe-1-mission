import React from "react";
import Card from "./component/Card.jsx";
import { courses } from "../../data.js";

export default function Beranda() {
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
            {courses.map((course) => (
              <Card key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
