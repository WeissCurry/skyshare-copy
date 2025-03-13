import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./SSACarousel.css";

function SsaCarousel() {

  const data = [
    {
      svg: `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M23 12C23 5.92487 18.0751 1 12 1M23 12C23 18.0751 18.0751 23 12 23M23 12C23 14.2091 18.0751 16 12 16C5.92487 16 1 14.2091 1 12M12 1C5.92487 1 1 5.92487 1 12M12 1C14.7614 1 17 5.92487 17 12C17 18.0751 14.7614 23 12 23M12 1C9.23858 1 7 5.92487 7 12C7 18.0751 9.23858 23 12 23M12 23C5.92487 23 1 18.0751 1 12"
        stroke="white"
        stroke-width="1.5"
      />
    </svg>`,
      judul: "1. Seminar",
      deskripsi: "Kegiatan mengikuti seminar atau talkshow dengan tema  pengembangan diri yang bertujuan untuk memperluas wawasan dan cakrawala berfikir member dengan waktu minimal setahun sekali.",
    },
    {
      svg: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="26"
        viewBox="0 0 24 26"
        fill="none"
      >
        <path
          d="M6 18.5204C5.80556 18.5071 5.63743 18.5 5.5 18.5C3.84315 18.5 2.5 19.8431 2.5 21.5C2.5 23.1569 3.84315 24.5 5.5 24.5C7.5 24.5 15.4128 21.3481 17.5 20.75V20.25C16.4827 20.0804 12.2455 19.3359 9 18.8743M17.5 16.5V12M17.5 16.5C19.7091 16.5 21.5 18.2909 21.5 20.5C21.5 22.7091 19.7091 24.5 17.5 24.5C15.8213 24.5 14.3841 23.4659 13.7908 22M17.5 16.5C15.6362 16.5 14.0701 17.7748 13.626 19.5M19 9L22 6M19 10.5H16.0311C14.8044 10.5 13.7013 9.75315 13.2457 8.61417L12 5.5H11.0862C10.3844 5.5 9.70479 5.74604 9.16564 6.19533L5.5 9.25V9.5L8.5 13.5V13.75C8.5 13.75 7.49996 16 7.5 20M10 10.5L13 12.5V12.75C13 12.75 11 14 10.5 15.75M14.8052 5.5C14.8052 5.5 16.6152 4.94296 16.9397 3.72413C17.1907 2.78174 16.6349 1.81307 15.6984 1.56055C14.7619 1.30804 13.8034 1.86843 13.5525 2.81082C13.2279 4.02965 14.5145 5.42162 14.5145 5.42162L14.8052 5.5Z"
          stroke="white"
          stroke-width="1.5"
        />
      </svg>`,
      judul: "2. Training",
      deskripsi: "Pelatihan kepada member untuk meningkatkan kapasitas softskill dan hardskill dengan waktu minimal setahun sekali",
    },
    {
      svg: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M19.25 25L19.2501 21.3332C19.2501 20.1878 20.0335 19.2593 21 19.2593V13.037C21 13.037 19.6875 12 17.5 12C15.3125 12 14 13.0371 14 13.0371V19.2593C14.9666 19.2593 15.7501 20.1879 15.7501 21.3335V24.9999M9.00005 25L9.00008 18.4999C9.00009 17.3954 9.89548 16.5 11 16.5V8.49992C11 8.49992 9.5 7.49996 7 7.49996C4.5 7.49996 3 8.5 3 8.5V16.5C4.10464 16.5 5.00011 17.3955 5.00011 18.5001V24.9999M17.3731 10C17.3731 10 16 9.125 16 8.03125C16 7.18556 16.6724 6.5 17.5019 6.5C18.3313 6.5 19 7.18556 19 8.03125C19 9.125 17.6306 10 17.6306 10H17.3731ZM6.85 5.5C6.85 5.5 5.25 4.5 5.25 3.25C5.25 2.2835 6.0335 1.5 7 1.5C7.9665 1.5 8.74568 2.2835 8.74568 3.25C8.74568 4.5 7.15 5.5 7.15 5.5H6.85Z"
          stroke="white"
          stroke-width="1.5"
        />
      </svg>`,
      judul: "3. Parents Talk",
      deskripsi: "Kegiatan rutin tahunan yang mempertemukan manajemen pengelola Skyshare Academy, mentor dan juga orangtua dengan agenda penyampaian laporan perkembangan member dan program yang telah dilakukan serta diskusi terkait program lanjutan dengan waktu minimal setahun sekali",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: true,
    draggable: true,
    rows: 1,
    responsive: [
      {
        className: "center",
        breakpoint: 639,
        settings: {
          slidesToShow: 1.2,
          infinite: true,
          dots: false,
          arrows: false,
          centerPadding: "60px",
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={index}
            className="activities-card lg:ml-9 -ml-10 mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center items-center"
          >
            <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
              <div dangerouslySetInnerHTML={{ __html: item.svg }} />
            </div>
            <div className="main-card flex flex-col item self-stretch">
              <h4 className="headline-4">{item.judul}</h4>
            </div>
            <hr className="horz-rule" />
            <p className="alternative-paragraph">{item.deskripsi}</p>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default SsaCarousel;
