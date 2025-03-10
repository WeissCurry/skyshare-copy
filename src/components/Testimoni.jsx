import React from "react";
import Mascot1 from "../../public/images/mascot-icons/pose=4.png";
import Carousel from "./Carousel";

import "./Testimoni.css";
import TestimoniCarousel from "./TestimoniCarousel";

function Testimoni() {
  return (
    <>
      <div className="testimoni-container flex py-14 px-6 lg:px-0 lg:py-24 flex-col lg:flex-row justify-center self-stretch bg-orange-bg bg-cover">
        <div className="testimoni-content flex flex-col lg:flex-row lg:w-nav items-center content-center gap-10 lg:gap-6 self-stretch ">
          <div className="testimoni-header flex flex-col items-center lg:items gap-4">
            <div className="testimoni-mascot flex justify-center items-center">
              <img
                className="mascot-img border-b-2 border-black"
                src={Mascot1}
                alt="mascot"
              />
            </div>
            <h1 className="headline-2">Apa Kata Mereka?</h1>
            <p className="paragraph">
              Simakk Yukk apa kata para alumni & orang tua pelajar tentang
              program dari Skyshare Academy!
            </p>
          </div>
          <TestimoniCarousel />
        </div>
      </div>
    </>
  );
}

export default Testimoni;
