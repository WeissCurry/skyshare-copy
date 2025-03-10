import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./SSACarousel.css";

function SsaCarousel() {
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
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        <div className="activities-card lg:ml-6 -ml-9 mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-gap10 text-center items-center content-center">
          <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M10.4726 17.3331V12.8192C10.4726 12.0521 11.0944 11.4303 11.8614 11.4303V5.87473C11.8614 5.87473 10.8198 5.18031 9.08366 5.18031C7.34755 5.18031 6.30588 5.87478 6.30588 5.87478V11.4303C7.07299 11.4303 7.69484 12.0522 7.69484 12.8193V17.333M3.18096 17.333V12.8193C3.18096 12.0522 2.5591 11.4303 1.79199 11.4303V5.87476C1.79199 5.87476 2.83366 5.18028 4.56977 5.18028M14.9865 17.3331V12.8192C14.9865 12.0521 15.6083 11.4303 16.3753 11.4303V5.87473C16.3753 5.87473 15.3337 5.18031 13.5975 5.18031M8.97949 3.79145C8.97949 3.79145 7.86838 3.09701 7.86838 2.22895C7.86838 1.55777 8.41248 1.01367 9.08366 1.01367C9.75484 1.01367 10.296 1.55777 10.296 2.22895C10.296 3.09701 9.18782 3.79145 9.18782 3.79145H8.97949ZM4.4656 3.79145C4.4656 3.79145 3.35449 3.09701 3.35449 2.22895C3.35449 1.55777 3.89859 1.01367 4.56977 1.01367C5.24095 1.01367 5.78205 1.55777 5.78205 2.22895C5.78205 3.09701 4.67394 3.79145 4.67394 3.79145H4.4656ZM13.4934 3.79145C13.4934 3.79145 12.3823 3.09701 12.3823 2.22895C12.3823 1.55777 12.9264 1.01367 13.5975 1.01367C14.2687 1.01367 14.8098 1.55777 14.8098 2.22895C14.8098 3.09701 13.7017 3.79145 13.7017 3.79145H13.4934Z"
                stroke="white"
                strokeWidth="1.04167"
              />
            </svg>
          </div>
          <div className="main-card flex flex-col item self-stretch">
            <h4 className="headline-4">1. Circle Time</h4>
          </div>
          <hr className=" horz-rule" />
          <p className="alternative-paragraph">
            Kegiatan yang dilakukan secara berkelompok dengan tujuan membangun
            pemahaman atau konsep mengenai suatu materi dengan waktu seminggu
            sekali sesuai kesepakatan bersama.
          </p>
        </div>
        <div className="activities-card lg:ml-6 -ml-9 mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center items-center">
          <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
            >
              <path
                d="M3.34798 5.87478H5.43131M2.56673 7.95812H6.21256M7.86194 7.39591C8.8575 6.45306 10.2019 5.87478 11.6813 5.87478C14.7496 5.87478 17.2369 8.36207 17.2369 11.4303C17.2369 14.4986 14.7496 16.9859 11.6813 16.9859C10.3675 16.9859 9.1602 16.5299 8.20909 15.7674M4.38965 1.01367C5.34847 1.01367 6.12576 1.79096 6.12576 2.74978C6.12576 3.76346 5.43131 4.73522 5.43131 5.7489V5.80479C5.43131 6.52638 5.66536 7.2285 6.09832 7.80575L6.25358 8.01277C7.07216 9.10423 7.51465 10.4317 7.51465 11.796C7.51465 12.4737 7.40539 13.147 7.19108 13.7899L6.12576 16.9859H2.65354L1.58822 13.7899C1.37391 13.147 1.26465 12.4737 1.26465 11.796C1.26465 10.4317 1.70714 9.10423 2.52572 8.01277L2.68098 7.80575C3.11394 7.2285 3.34798 6.52638 3.34798 5.80479V5.7489C3.34798 4.73522 2.65354 3.76346 2.65354 2.74978C2.65354 1.79096 3.43082 1.01367 4.38965 1.01367ZM13.0702 9.69423C12.6867 9.69423 12.3758 9.38332 12.3758 8.99978C12.3758 8.61624 12.6867 8.30534 13.0702 8.30534C13.4537 8.30534 13.7646 8.61624 13.7646 8.99978C13.7646 9.38332 13.4537 9.69423 13.0702 9.69423ZM11.6813 12.1248C11.2978 12.1248 10.9869 11.8139 10.9869 11.4303C10.9869 11.0468 11.2978 10.7359 11.6813 10.7359C12.0649 10.7359 12.3758 11.0468 12.3758 11.4303C12.3758 11.8139 12.0649 12.1248 11.6813 12.1248ZM14.4591 12.1248C14.0756 12.1248 13.7646 11.8139 13.7646 11.4303C13.7646 11.0468 14.0756 10.7359 14.4591 10.7359C14.8426 10.7359 15.1535 11.0468 15.1535 11.4303C15.1535 11.8139 14.8426 12.1248 14.4591 12.1248Z"
                stroke="white"
                strokeWidth="1.04167"
              />
            </svg>
          </div>
          <div className="main-card flex flex-col item self-stretch">
            <h4 className="headline-4">2. Sport Time</h4>
          </div>
          <hr className=" horz-rule" />
          <p className="alternative-paragraph">
            Kegiatan yang dilakukan secara berkelompok dengan tujuan membangun
            pemahaman atau konsep mengenai suatu materi dengan waktu seminggu
            sekali sesuai kesepakatan bersama.
          </p>
        </div>
        <div className="activities-card lg:ml-6 -ml-9 mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center items-center">
          <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
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
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="main-card flex flex-col item self-stretch">
            <h4 className="headline-4">3. Training</h4>
          </div>
          <hr className=" horz-rule" />
          <p className="alternative-paragraph">
            Pelatihan kepada member untuk meningkatkan kapasitas softskill dan
            hardskill dengan waktu minimal setahun sekali.
          </p>
        </div>
        <div className="activities-card lg:ml-6 -ml-9 mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center items-center">
          <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M23 12C23 5.92487 18.0751 1 12 1M23 12C23 18.0751 18.0751 23 12 23M23 12C23 14.2091 18.0751 16 12 16C5.92487 16 1 14.2091 1 12M12 1C5.92487 1 1 5.92487 1 12M12 1C14.7614 1 17 5.92487 17 12C17 18.0751 14.7614 23 12 23M12 1C9.23858 1 7 5.92487 7 12C7 18.0751 9.23858 23 12 23M12 23C5.92487 23 1 18.0751 1 12"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="main-card flex flex-col item self-stretch">
            <h4 className="headline-4">4. Fill Your Mind (FUM)</h4>
          </div>
          <hr className=" horz-rule" />
          <p className="alternative-paragraph">
            Kegiatan mengikuti seminar atau talkshow dengan tema pengembangan
            diri yang bertujuan untuk memperluas wawasan dan cakrawala berfikir
            member dengan waktu minimal setahun sekali.
          </p>
        </div>
        <div className="activities-card lg:ml-6 -ml-9 mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center items-center">
          <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
            >
              <path
                d="M18.5 2.5H7.5L7.2012 3.48605C6.41719 6.07326 4.9009 8.37814 2.83544 10.1223L1.5 11.25V11.5M18.5 2.5L18.1985 3.50501C17.4165 6.11173 15.8917 8.434 13.8106 10.1877L12.55 11.25L12.25 11.5H1.5M18.5 2.5L18.8015 3.50486C19.5835 6.11167 21.1084 8.43401 23.1896 10.1878L24.4502 11.25L24.5 11.2998V21.5H1.5V11.5M12.5 11.2917V21.5M18.5 21.5V17"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="main-card flex flex-col item self-stretch">
            <h4 className="headline-4">5. Home Visit</h4>
          </div>
          <hr className=" horz-rule" />
          <p className="alternative-paragraph">
            Kegiatan circle time yang dilakukan secara berkala dari rumah ke
            rumah secara bergantian untuk membangun bonding, mengenal keluarga
            dan latar belakang member dengan waktu sebulan sekali.
          </p>
        </div>
        <div className="activities-card lg:ml-6 -ml-9 mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center items-center">
          <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
            >
              <path
                d="M0.5 17.9998L9 20.402M15 22.0976L23.5 24.4998M0.5 24.4998L23.5 17.9998M12.0001 17.9998C8.72424 17.9998 5.9022 15.3442 5.9022 12.0683C5.9022 10.3664 6.63321 8.74653 7.90935 7.62055L9.84893 5.9092C11.1088 4.79754 11.8874 3.17291 12.0001 1.49951H12.3588C13.4412 2.8911 13.7904 4.61594 13.8374 6.12817C13.8921 7.88945 15.3214 9.58152 17.0766 9.42508L17.4593 9.39096C17.8746 10.212 18.0979 11.1276 18.0979 12.0683C18.0979 15.3442 15.276 17.9998 12.0001 17.9998ZM12.0001 17.9998C13.5417 17.9998 14.8694 16.73 14.8694 15.1636C14.8694 14.3498 14.5254 13.5753 13.9249 13.0369L13.0122 12.2186C12.3588 11.5432 12.1795 10.8275 12.1795 10.8275H11.8208C11.8208 10.8275 11.6414 11.5432 10.9876 12.2186L10.0748 13.0369C9.47433 13.5753 9.13033 14.3498 9.13033 15.1636C9.13033 16.73 10.4586 17.9998 12.0001 17.9998Z"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="main-card flex flex-col item self-stretch">
            <h4 className="headline-4">6. Student eXpedition</h4>
          </div>
          <hr className=" horz-rule" />
          <p className="alternative-paragraph">
            Program tahunan yang diadakan di alam bebas untuk seluruh member
            dengan tujuan melatih tanggungjawab, kemandirian, kerjasama, dan
            kepemimpinan member.
          </p>
        </div>
        <div className="activities-card lg:ml-6 -ml-9 mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center items-center">
          <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
            >
              <path
                d="M14.0042 24.5C13.0042 24.5 12.2542 23 12.2542 23C11.5042 21.5 11.5042 19.5 11.5042 18V17.5L6.50417 15V14.75L8.30692 9.52203C8.72416 8.31203 9.86312 7.5 11.143 7.5H12.5042L13.0218 10.0884C13.3023 11.4906 14.5335 12.5 15.9636 12.5H19.0042M9.50417 18.5C9.29342 18.5 9.03826 18.6332 8.76676 18.8436C6.96263 20.2412 6.50417 22.7178 6.50417 25M18.4364 14L16.5042 24.9M19.5 8L18.9682 11M6.50417 7L4.78003 12M12.3542 5.5C12.3542 5.5 10.7542 4.5 10.7542 3.25C10.7542 2.2835 11.5377 1.5 12.5042 1.5C13.4707 1.5 14.2499 2.2835 14.2499 3.25C14.2499 4.5 12.6542 5.5 12.6542 5.5H12.3542Z"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="main-card flex flex-col item self-stretch">
            <h4 className="headline-4">7. Take a Walk Together</h4>
          </div>
          <hr className=" horz-rule" />
          <p className="alternative-paragraph">
            Kegiatan rekreasi dan edukasi internal grup maupun gabungan untuk
            mengunjungi tempat wisata dengan waktu minimal setahun sekali.
          </p>
        </div>
        <div className="activities-card lg:ml-6 -ml-9 mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center items-center">
          <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M17.0001 9L12.7501 13.5H12.5001L11 7.5H10.5001C8.84322 7.5 7.50008 8.84315 7.50008 10.5V17C13.0001 17 16.5001 19.5 16.5001 20.5H7.00008M13 9.61778L15.0001 7.5M0 23.5H24M11.5552 5.5C11.5552 5.5 13.3652 4.94296 13.6897 3.72413C13.9407 2.78174 13.3849 1.81307 12.4484 1.56055C11.5119 1.30804 10.5534 1.86843 10.3025 2.81082C9.97794 4.02965 11.2645 5.42162 11.2645 5.42162L11.5552 5.5Z"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="main-card flex flex-col item self-stretch">
            <h4 className="headline-4">8. Soul of Charge</h4>
          </div>
          <hr className=" horz-rule" />
          <p className="alternative-paragraph">
            Kegiatan meningkatkan kondisi ruhiyah dan ibadah dalam rangka
            melatih kecerdasan spiritual dengan waktu minimal setahun sekali.
          </p>
        </div>
        <div className="activities-card lg:ml-6 -ml-9 mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center items-center">
          <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.7614 1.5H12.2386L12.8578 3.74269C13.8154 7.21124 16.971 9.61364 20.5693 9.61364H22.5V10L20.8436 11.1432C17.9675 13.1282 16.7126 16.7504 17.7444 20.0892L18.4894 22.5H18L17.0956 21.7528C14.138 19.3091 9.862 19.3091 6.90439 21.7528L6 22.5H5.51064L6.25561 20.0892C7.28738 16.7504 6.03252 13.1282 3.15636 11.1432L1.5 10V9.61364H3.43069C7.02901 9.61364 10.1846 7.21124 11.1422 3.74269L11.7614 1.5Z"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="main-card flex flex-col item self-stretch">
            <h4 className="headline-4">9. Experiental Learning</h4>
          </div>
          <hr className=" horz-rule" />
          <p className="alternative-paragraph">
            Penugasan kepada masing-masing member ataupun grup untuk melatih
            manajemen diri, organisasi dan kepekaan sosial dengan waktu setahun
            sekali.
          </p>
        </div>
        <div className="activities-card lg:ml-6 -ml-9 mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center items-center">
          <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.5 20.2468V15.9999C18.5 15.9999 16 14.5 12 14.5C8 14.5 5.5 16 5.5 16V20.2468M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM11.9262 12.5C11.9262 12.5 8.5 10.6798 8.5 8C8.5 6.067 10.0689 4.5 12.0043 4.5C13.9397 4.5 15.5 6.067 15.5 8C15.5 10.6798 12.0736 12.5 12.0736 12.5H11.9262Z"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="main-card flex flex-col item self-stretch">
            <h4 className="headline-4">10. Personal Approach</h4>
          </div>
          <hr className=" horz-rule" />
          <p className="alternative-paragraph">
            Pendekatan secara pribadi dari mentor kepada member untuk membantu
            terbentuknya karakter positif yang dimilikinya dengan waktu minimal
            seminggu sekali.
          </p>
        </div>
        <div className="activities-card lg:ml-6 -ml-9 mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center items-center">
          <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
            >
              <path
                d="M13 7.5V17M13 7.5C13 5.84315 11.6569 4.5 10 4.5H3V5.58531C3 10.1813 2.49701 14.7635 1.5 19.25V19.5H10C11.6569 19.5 13 20.8431 13 22.5M13 7.5C13 5.84315 14.3431 4.5 16 4.5H23V5.58531C23 10.1813 23.503 14.7635 24.5 19.25V19.5H16C14.3431 19.5 13 20.8431 13 22.5M13 22.5V23"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="main-card flex flex-col item self-stretch">
            <h4 className="headline-4">11. Catch The Wisdom</h4>
          </div>
          <hr className=" horz-rule" />
          <p className="alternative-paragraph">
            Pelatihan kepada member untuk meningkatkan kapasitas softskill dan
            hardskill dengan waktu minimal setahun sekali.
          </p>
        </div>
        <div className="activities-card lg:ml-6 -ml-9 mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center items-center">
          <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.5 7V10M15.5 7V10M12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5ZM12.3675 13H11.6325C9.57702 13 7.55444 12.4843 5.74997 11.5H5.49997V12C5.49997 15.5899 8.41012 18.5 12 18.5C15.5898 18.5 18.5 15.5899 18.5 12V11.5H18.25C16.4455 12.4843 14.4229 13 12.3675 13Z"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="main-card flex flex-col item self-stretch">
            <h4 className="headline-4">12. Sharing To Elevate</h4>
          </div>
          <hr className=" horz-rule" />
          <p className="alternative-paragraph">
            Pelatihan kepada member untuk meningkatkan kapasitas softskill dan
            hardskill dengan waktu minimal setahun sekali.
          </p>
        </div>
        <div className="activities-card lg:ml-6 -ml-9 mt-10 px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center items-center">
          <div className="icon-card flex justify-center items-center bg-primary-1 -mt-14 lg:-mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              f
              ill="none"
            >
              <path
                d="M19.25 25L19.2501 21.3332C19.2501 20.1878 20.0335 19.2593 21 19.2593V13.037C21 13.037 19.6875 12 17.5 12C15.3125 12 14 13.0371 14 13.0371V19.2593C14.9666 19.2593 15.7501 20.1879 15.7501 21.3335V24.9999M9.00005 25L9.00008 18.4999C9.00009 17.3954 9.89548 16.5 11 16.5V8.49992C11 8.49992 9.5 7.49996 7 7.49996C4.5 7.49996 3 8.5 3 8.5V16.5C4.10464 16.5 5.00011 17.3955 5.00011 18.5001V24.9999M17.3731 10C17.3731 10 16 9.125 16 8.03125C16 7.18556 16.6724 6.5 17.5019 6.5C18.3313 6.5 19 7.18556 19 8.03125C19 9.125 17.6306 10 17.6306 10H17.3731ZM6.85 5.5C6.85 5.5 5.25 4.5 5.25 3.25C5.25 2.2835 6.0335 1.5 7 1.5C7.9665 1.5 8.74568 2.2835 8.74568 3.25C8.74568 4.5 7.15 5.5 7.15 5.5H6.85Z"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className="main-card flex flex-col item self-stretch">
            <h4 className="headline-4">13. Mentor and Parents Conference</h4>
          </div>
          <hr className=" horz-rule" />
          <p className="alternative-paragraph">
            Pelatihan kepada member untuk meningkatkan kapasitas softskill dan
            hardskill dengan waktu minimal setahun sekali.
          </p>
        </div>
      </Slider>
    </>
  );
}

export default SsaCarousel;
