import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Mascot2 from "../../public/images/mascot-icons/Char-1.png";
import Mascot3 from "../../public/images/mascot-icons/Char-2.png";
import Mascot4 from "../../public/images/mascot-icons/Char-3.png";
import Mascot5 from "../../public/images/mascot-icons/Char-4.png";
import { useMediaQuery } from "react-responsive";
function Carousel() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1.3 : 2.1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    draggable: false,
    pauseOnHover: false,
  };
  return (
    <div className="h-full -mt-20">
      <div className="flex  absolute z-50 lg:w-slash-w mt-slash-top w-slash-sm -ml-3 justify-between">
        <h1 className=" font-thin slash3">/</h1>
        <h1 className=" font-thin slash4">\</h1>
      </div>
      <div className="  h-full -z-10 -mt-50 ">
        <div className=" lg:w-cover-size1 w-cover-size3">
          <Slider {...settings}>
            <div className=" m-auto ml-28 mt-40 ">
              <div className="bg-white rounded-xl card-size border-gray-900 border-2 shadow-md">
                <div className="rounded-full w-16 h-16 -mt-9 ml-5">
                  <img
                    className="w-16 h-16 border-2 border-black rounded-full"
                    src={Mascot2}
                    alt=""
                  />
                </div>
                <div className="">
                  <h4 className="headline-4 ml-6 mt-3">
                    Nailah Farah Fadhilah
                  </h4>
                  <p className="paragraph mx-6 pb-4 border-b border-black">
                    Member group of New Orbit
                  </p>
                  <p className="paragraph mx-5">
                    “Aku sangat senang, seru banget bisa kenal sama kakak-kakak
                    di Skyshare Academy dan dapet mentor yang alhamdulillah
                    cocok dan bisa main bareng teman-teman sefrekuensi, nambah
                    ilmu, dan buat aku tetap menjaga apa yang harus jaga.”
                  </p>
                </div>
              </div>
            </div>
            <div className="m-auto ml-28 mt-40">
              <div className="bg-white card-size rounded-xl border-gray-900 border-2 shadow-md">
                <div className="rounded-full w-16 h-16 -mt-9 ml-5">
                  <img
                    className="w-16 h-16 border-2 border-black rounded-full"
                    src={Mascot4}
                    alt=""
                  />
                </div>
                <div className="">
                  <h4 className="headline-4 ml-6 mt-3">
                    Bunda Annisa Rahmawati
                  </h4>
                  <p className="paragraph mx-6 pb-4 border-b border-black">
                    Orang tua dari Ananda Mecca
                  </p>
                  <p className="paragraph text-justify mx-5">
                    ”Percaya banget deh pokoknya sama Skyshare Academy”
                  </p>
                </div>
              </div>
            </div>
            <div className="m-auto ml-28 mt-40">
              <div className="bg-white card-size rounded-xl border-gray-900 border-2 shadow-md">
                <div className="rounded-full w-16 h-16 -mt-9 ml-5">
                  <img
                    className="w-16 h-16 border-2 border-black rounded-full"
                    src={Mascot3}
                    alt=""
                  />
                </div>
                <div className="">
                  <h4 className="headline-4 ml-6 mt-3">
                    Muhammad Naufal Laksita
                  </h4>
                  <p className="paragraph mx-6 pb-4 border-b border-black">
                    Member group of Legacy
                  </p>
                  <p className="paragraph text-left mx-5">
                    “Setelah mengikuti Skyshare Academy yg terutama
                    program Talent Academy saya merasa memiliki teman yang
                    satu frekuensi. Teman-teman di group bukan hanya menjadi
                    partner untuk saling berbagi cerita namun juga sebagai
                    penjaga keimanan serta kesadaran saya sebagai manusia.”
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="flex mt-5 absolute lg:w-slash-w mt-slash w-slash-sm z-40 -ml-3 justify-between">
          <h1 className=" font-thin slash1">\</h1>
          <h1 className=" font-thin slash2">/</h1>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
