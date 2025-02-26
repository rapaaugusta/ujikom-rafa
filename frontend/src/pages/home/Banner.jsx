import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="" />
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          Rilisan Terbaru Minggu Ini
        </h1>
        <p className="mb-10">
          Di sini, setiap halaman adalah jendela menuju dunia baru yang penuh
          wawasan, imajinasi, dan inspirasi. Jelajahi koleksi buku terbaru yang
          dirancang untuk memperkaya perspektif, menggugah pemikiran, dan
          membawa Anda dalam perjalanan tanpa batas melalui kata-kata. Biarkan
          setiap lembar membuka pengalaman baru dan ilmu yang berharga dalam
          perjalanan membaca Anda!
        </p>
      </div>
    </div>
  );
};

export default Banner;
