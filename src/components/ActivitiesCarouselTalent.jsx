import React from "react";
import SSACarousel from "./SSACarouselTalent";
import ButtonLink from "./ButtonLink";
import "./ActivitiesCarousel.css";

function SkyshareActivitiesCarousel() {
  return (
    <>
      <div className="carousel-act bg-background flex lg:pb-24 lg:pt-14 py-14 px-6 lg:px-0 flex-col justify-center items-center overflow-hidden">
        <div className="flex lg:max-w-6xl max-w-sm flex-col gap-10 flex-nowrap">
          <SSACarousel />
        </div>
        <div className="join-btn mx-auto w-64 py-14 lg:py-24">
          <ButtonLink
            caption="Go to Talent Academy"
            to="/ourprogram/talent"
            backgroundColor="bg-primary-1"
            textColor="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.749 12.75L3.24926 12.75L3.24926 11.25L20.749 11.25L20.749 12.75Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9994 11.25C16.4718 11.25 13.5894 14.3521 13.5894 17.66L13.5894 18.41L15.0894 18.41L15.0894 17.66C15.0894 15.1485 17.332 12.75 19.9994 12.75L20.7494 12.75L20.7494 11.25L19.9994 11.25Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9994 12.75C16.4718 12.75 13.5894 9.64786 13.5894 6.33995L13.5894 5.58995L15.0894 5.58995L15.0894 6.33995C15.0894 8.85153 17.332 11.25 19.9994 11.25L20.7494 11.25L20.7494 12.75L19.9994 12.75Z"
                fill="white"
              />
            </svg>
          </ButtonLink>
        </div>
      </div>
    </>
  );
}

export default SkyshareActivitiesCarousel;
