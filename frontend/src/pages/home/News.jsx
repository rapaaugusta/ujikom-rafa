import React from 'react'

import news1 from "../../assets/news/news-1.png"
import news2 from "../../assets/news/news-2.png"
import news3 from "../../assets/news/news-3.png"
import news4 from "../../assets/news/news-4.png"

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'

const news = [
  {
      "id": 1,
      "link": "https://www.gramedia.com/blog/interstellar-tayang-ulang/",
      "title": "Interstellar Kembali ke Bioskop! Rayakan 10 Tahun Film Epik Christopher Nolan",
      "description": "Setelah 10 tahun berlalu sejak penayangan perdana film bergenre sci-fi ini, tak membuat kepopuleran Insterstellar menyusut. Bahkan, dalam beberapa tahun terakhir, film ini justru semakin hangat diperbincangkan, lho!",
      "image": news1
  },
  {
      "id": 2,
      "link": "https://www.gramedia.com/blog/rekomendasi-novel-angst/",
      "title": "Siap-Siap Baper! Inilah 5 Novel Terbitan GPU yang Penuh Drama dan Emosional!",
      "description": "Februari identik dengan bulan kasih sayang, tapi bukan cuma cinta yang manis-manis aja, lho! Kadang, kisah penuh drama dan emosional justru bikin perasaan lebih berkesan. Nah, kita punya 5 rekomendasi novel terbitan GPU yang siap mengaduk emosi kamu—dari romansa yang menyentuh hati sampai cerita penuh harapan dan kehilangan.",
      "image": news2
  },
  {
      "id": 3,
      "link": "https://www.gramedia.com/blog/buku-latihan-snbt-terbaik-2025/",
      "title": "Persiapan Sukses Menghadapi SNBT 2025 dengan Buku Mantra UTBK SNBT!",
      "description": "Tak terasa sudah bulan Februari, yang berarti hanya tinggal sisa beberapa bulan untuk mempersiapkan diri menghadapi SNBT 2025. Nah, sebelumnya kamu juga harus tahu bahwa UTBK SNBT itu bukan hanya soal hafalan materi, lho! ",
      "image": news3
  },
  {
      "id": 4,
      "link": "https://www.gramedia.com/blog/novel-jakarta-sebelum-pagi-hadir-kembali-dengan-sampul-terbaru/",
      "title": "9 Tahun Berlalu, Novel Jakarta Sebelum Pagi Hadir Kembali dengan Sampul Terbaru",
      "description": "Sembilan tahun setelah rilisan pertamanya, novel Jakarta Sebelum Pagi karya Ziggy Zezsyazeoviennazabrizkie dicetak ulang dengan gambar sampul terbaru. Sebagai salah satu buku best seller, buku Jakarta Sebelum Pagi memiliki peminat yang begitu besar, sehingga menjadikan bukunya sebagai salah satu buku yang sangat cepat terjual dan menjadi langka.",
      "image": news4
  },
  {
      "id": 5,
      "link": "https://www.gramedia.com/blog/novel-js-khairen/",
      "title": "Karya Terbaik J.S. Khairen: Deretan Buku Penuh Makna yang Wajib Dibaca!",
      "description": "Dari Kami (Bukan) Sarjana Kertas hingga Bungkam Suara, semua bukunya nggak hanya seru, tapi juga penuh dengan pesan-pesan hidup yang bikin mikir. Nah, di artikel ini, kita akan bahas deretan buku terbaik J.S. Khairen yang wajib banget kamu baca!",
      "image": news2
  }
]

const News = () => {
  return (
    <div className='py-16'>
      <h2 className='text-3xl font-semifold mb-6'>Berita Terbaru</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
          navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          news.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-12'>
                {/* CONTENT */}
                <div className='py-4'>
                  <Link to={item.link}>
                    <h3 className='text-lg font-medium hover:text-blue-500 mb-4'>{item.title}</h3>
                  </Link>
                    <div className='w-12 h-[4px] bg-[#FF9D23] mb-5'></div>
                    <p className='text-sm text-gray-600'>{item.description}</p>
                </div>

                {/* <div className='flex-shrink-0'>
                  <img src={item.image} alt="" className='w-full object-cover'/>
                </div> */}
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default News