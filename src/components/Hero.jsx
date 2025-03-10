import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero bg-hero-bg bg-cover bg-center flex flex-col pb-24 pt-48 items-center self-stretch h-auto">
        <div className="content text-white flex flex-row content-end items-start flex-wrap">
          <div className="tagline flex flex-col content-end items-start lg:gap-4 xs:gap-2">
            <h1 className=" text-white font-bold">
              Build up your mentoring with us.
            </h1>
            <p className="text-white lg:text-xl xs:text-sm font-normal">
              Katanya mau berkembang? daripada berkembang seorang diri, Yukk
              maksimalkan potensi kamu dengan adanya mentorship!
            </p>
            <Button onClick={() => navigate("/ourprogram")} className="">
              Check Our Programs
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" inline ml-2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.749 13.3037L3.24926 13.3037L3.24926 11.8037L20.749 11.8037L20.749 13.3037Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.9994 11.8037C16.4718 11.8037 13.5894 14.9059 13.5894 18.2138L13.5894 18.9638L15.0894 18.9638L15.0894 18.2138C15.0894 15.7022 17.332 13.3037 19.9994 13.3037L20.7494 13.3037L20.7494 11.8037L19.9994 11.8037Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.9994 13.3037C16.4718 13.3037 13.5894 10.2016 13.5894 6.89366L13.5894 6.14366L15.0894 6.14366L15.0894 6.89366C15.0894 9.40524 17.332 11.8037 19.9994 11.8037L20.7494 11.8037L20.7494 13.3037L19.9994 13.3037Z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
