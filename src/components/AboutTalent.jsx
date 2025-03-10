import React from "react";
import "./About.css";

function Skyshareabout() {
  return (
    <>
      <div className="skyshare-about bg-background flex flex-col py-14 lg:py-24 items-center self-stretch">
        <div className="about-container flex flex-col items-center gap-7 lg:gap-10">
          <h2 className="headline-2">About</h2>
          <div className="title-desc flex justify-center items-center content-center gap-2 flex-wrap text-center">
            <h4 className="headline-4 text-center">
              Jadi apa sih Talent Academy itu?
            </h4>
            <p className="paragraph">
              Talent Academy merupakan program ekskul kelas karakter minat dan
              bakat pengembangan potensi diri di bawah Skyshare Academy
              Indonesia yang terinspirasi dari Mentoring Project* di Harvard
              T.H. Chan School of Public Health Boston, Amerika Serikat sejak
              1997.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skyshareabout;
