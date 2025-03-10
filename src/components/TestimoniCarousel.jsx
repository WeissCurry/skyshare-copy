import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Vector1 from "/images/hero-vector-1.png";
import Vector2 from "/images/hero-vector-2.png";
import Mascot2 from "../../public/images/mascot-icons/Char-1.png";
import Mascot3 from "../../public/images/mascot-icons/Char-2.png";
import Mascot4 from "../../public/images/mascot-icons/Char-3.png";

function TestimoniCarousel() {
  return (
    <div className="testimoni-main flex items-start lg:items-end justify-end relative overflow-hidden lg:pb-4">
      <img src={Vector1} alt="" className="vector-1 absolute" />
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="testimoni-carousel pl-12"
        loop={true}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        }}
      >
        <SwiperSlide>
          <div className="testimoni-card flex flex-col items-start pb-6 pt-8 lg:pt-11 px-4 lg:px-6 gap-4 relative bg-white rounded-2xl">
            <div className="main-card-content flex flex-col items-start self-stretch ">
              <img src={Mascot2} alt="" className="size-10 lg:size-14" />
              <h4 className="headline-4 text-neutral-1">
                Nailah Farah Fadhilah
              </h4>
              <p className="paragraph text-neutral-3">
                Member group of New Orbit
              </p>
            </div>
            <hr className="w-full" />
            <p className="alternative-paragraph text-neutral-4">
              “Aku sangat senang, seru banget bisa kenal sama kakak-kakak di
              Skyshare Academy dan dapet mentor yang alhamdulillah cocok dan
              bisa main bareng teman-teman sefrekuensi, nambah ilmu, dan buat
              aku tetap menjaga apa yang harus jaga.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimoni-card flex flex-col items-start pb-6 pt-8 lg:pt-11 px-4 lg:px-6 gap-4 relative bg-white rounded-2xl">
            <div className="main-card-content flex flex-col items-start self-stretch ">
              <img src={Mascot3} alt="" className="size-10 lg:size-14" />
              <h4 className="headline-4 text-neutral-1">
                Bunda Annisa Rahmawati
              </h4>
              <p className="paragraph text-neutral-3">
                Orang tua dari Ananda Mecca
              </p>
            </div>
            <hr className="w-full" />
            <p className="alternative-paragraph text-neutral-4">
              ”Percaya banget deh pokoknya sama Skyshare Academy”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimoni-card flex flex-col items-start pb-6 pt-8 lg:pt-11 px-4 lg:px-6 gap-4 relative bg-white rounded-2xl">
            <div className="main-card-content flex flex-col items-start self-stretch ">
              <img src={Mascot3} alt="" className="size-10 lg:size-14" />
              <h4 className="headline-4 text-neutral-1">
                Muhammad Naufal Laksita
              </h4>
              <p className="paragraph text-neutral-3">Member group of Legacy</p>
            </div>
            <hr className="w-full" />
            <p className="alternative-paragraph text-neutral-4">
              “Setelah mengikuti Skyshare Academy yg terutama program Talent
              Academy saya merasa memiliki teman yang satu frekuensi.
              Teman-teman di group bukan hanya menjadi partner untuk saling
              berbagi cerita namun juga sebagai penjaga keimanan serta kesadaran
              saya sebagai manusia.”
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <img src={Vector2} alt="" className="vector-2 absolute" />
    </div>
  );
}

export default TestimoniCarousel;
