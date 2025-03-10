import React from "react";
import { useNavigate } from "react-router-dom";
import TalentLogo from "../../public/images/Talent-logo.png";
import MentorLogo from "../../public/images/Mentor-logo.png";
import ParentsLogo from "../../public/images/Parents-logo.png";
import Button from "../components/Button";
import "../components/OurProgram.css";

function OurProgram() {
  const navigate = useNavigate();
  return (
    <>
      <div className="our-program bg-background flex flex-col items-center px-6 py-14 lg:pt-52 lg:pb-24">
        <div className="title lg:flex lg:flex-col lg:items-center lg:gap-2 hidden">
          <h1 className="headline-1 text-black">Explore Our Programs</h1>
          <p className="paragraph">
            Pelajari lebih lanjut program di Skyshare Academy
          </p>
        </div>
        <div className="all-program flex flex-col lg:flex-row items-start gap-28 lg:gap-6 lg:pt-0 pt-48 z-10">
          <div className="program relative px-6 lg:px-0 flex flex-col items-center gap-4 lg:pb-6 pb-6 text-center">
            <div className="image-container absolute flex items-center content-center size-44 lg:size-52 p-5">
              <img src={TalentLogo} alt="" className="image" />
            </div>
            <h2 className="headline-2">Talent Academy</h2>
            <p className="paragraph px-6">
              Talent Academy merupakan program ekskul kelas karakter minat dan
              bakat
            </p>
            <Button onClick={() => navigate("/ourprogram/talent")}>
              <div className="flex gap-2">
                <p className="font-bold text-neutral-white">Learn more</p>
                <svg
                  className="text-neutral-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.999 12.75L3.49926 12.75L3.49926 11.25L20.999 11.25L20.999 12.75Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.2494 11.25C16.7218 11.25 13.8394 14.3521 13.8394 17.66L13.8394 18.41L15.3394 18.41L15.3394 17.66C15.3394 15.1485 17.582 12.75 20.2494 12.75L20.9994 12.75L20.9994 11.25L20.2494 11.25Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.2494 12.75C16.7218 12.75 13.8394 9.64786 13.8394 6.33995L13.8394 5.58995L15.3394 5.58995L15.3394 6.33995C15.3394 8.85153 17.582 11.25 20.2494 11.25L20.9994 11.25L20.9994 12.75L20.2494 12.75Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Button>
          </div>
          <div className="program relative px-6 lg:px-0 flex flex-col items-center gap-4 lg:pb-6 pb-6 text-center">
            <div className="image-container absolute flex items-center content-center size-44 lg:size-52 p-5">
              <img src={MentorLogo} alt="" className="image" />
            </div>
            <h2 className="headline-2">Mentor Academy</h2>
            <p className="paragraph px-6">
              Mentor Academy merupakan program lanjutan dari Skyshare Academy
            </p>
            <Button onClick={() => navigate("/ourprogram/mentor")}>
              <div className="flex gap-2">
                <p className="font-bold text-neutral-white">Learn more</p>
                <svg
                  className="text-neutral-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.999 12.75L3.49926 12.75L3.49926 11.25L20.999 11.25L20.999 12.75Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.2494 11.25C16.7218 11.25 13.8394 14.3521 13.8394 17.66L13.8394 18.41L15.3394 18.41L15.3394 17.66C15.3394 15.1485 17.582 12.75 20.2494 12.75L20.9994 12.75L20.9994 11.25L20.2494 11.25Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.2494 12.75C16.7218 12.75 13.8394 9.64786 13.8394 6.33995L13.8394 5.58995L15.3394 5.58995L15.3394 6.33995C15.3394 8.85153 17.582 11.25 20.2494 11.25L20.9994 11.25L20.9994 12.75L20.2494 12.75Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Button>
          </div>
          <div className="program relative px-6 lg:px-0 flex flex-col items-center gap-4 lg:pb-6 pb-6 text-center">
            <div className="image-container absolute flex items-center content-center size-44 lg:size-52 p-5">
              <img src={ParentsLogo} alt="" className="image" />
            </div>
            <h2 className="headline-2">Parents Academy</h2>
            <p className="paragraph px-6">
              Parents Academy merupakan program untuk..Lorem Ipsum Dolor Sit
              Ammet
            </p>
            <Button onClick={() => navigate("/ourprogram/parents")}>
              <div className="flex gap-2">
                <p className="font-bold text-neutral-white">Learn more</p>
                <svg
                  className="text-neutral-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.999 12.75L3.49926 12.75L3.49926 11.25L20.999 11.25L20.999 12.75Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.2494 11.25C16.7218 11.25 13.8394 14.3521 13.8394 17.66L13.8394 18.41L15.3394 18.41L15.3394 17.66C15.3394 15.1485 17.582 12.75 20.2494 12.75L20.9994 12.75L20.9994 11.25L20.2494 11.25Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.2494 12.75C16.7218 12.75 13.8394 9.64786 13.8394 6.33995L13.8394 5.58995L15.3394 5.58995L15.3394 6.33995C15.3394 8.85153 17.582 11.25 20.2494 11.25L20.9994 11.25L20.9994 12.75L20.2494 12.75Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default OurProgram;
