import React from "react";
import logoPlaceholder from "../../public/images/logo placeholder.png";
import Mascot from "../../public/images/mascot-icons/pose=9.png";
import SecondaryButton from "./SecondayButton";

function Footer() {
  return (
    <>
      <div className=" neutral-white lg:max-w-6xl bottom-0 left-0 w-full lg:py-24 xs:py-14 flex flex-col text-xl font-normal mx-auto items-center">
        <div className=" lg:w-full w-4/5 flex items-end flex-wrap content-between">
          <div className="footer-container flex flex-col items-start lg:gap-16 xs:gap-8">
            <div className="logo flex flex-col items-start">
              <div className="logo-placeholder lg:w-44 lg:h-14 xs:w-28 xs:h-6 xs:mb-4">
                <img src={logoPlaceholder} alt="logo" />
              </div>
              <p className="lg:text-base lg:h-6 xs:text-xs font-medium	">
                Find Yourself
              </p>
            </div>
            <div className="footer-info w-1/2 lg:w-full lg:flex-nowrap flex items-start flex-wrap gap-8 self-stretch">
              <div className="footer-profile flex flex-col items-start lg:gap-6 xs:gap-4 xs:min-w-64 xs:max-w-64">
                <h4 className="lg:text-lg xs:text-base font-bold">About</h4>
                <p className="lg:text-base xs:text-sm font-normal">
                  Komplek Taman Mangu Indah B14/12 Pondok Aren, Tangerang
                  Selatan 15224
                </p>
                <p className="lg:text-base xs:text-sm font-normal">
                  (+62) 856-8043-529
                </p>
                <p className="lg:text-base xs:text-sm font-normal">
                  msimbusiness@org.com
                </p>
                <p className="lg:text-base xs:text-sm font-normal">
                  Copyright © 2024-2025 Skyshare Academy in Collaboration with Ideatecore{" "}
                </p>
              </div>
              <div className="footer-link flex flex-col lg:gap-6 xs:gap-4">
                <p className="lg:text-lg xs:text-base font-bold">Company</p>
                <SecondaryButton to="/aboutus">About Us</SecondaryButton>
                <SecondaryButton to="/article">Article</SecondaryButton>
                <SecondaryButton to="/ourprogram">Our Program</SecondaryButton>
                <SecondaryButton to="/contactus">Contact Us</SecondaryButton>
              </div>
              <div className="footer-social flex flex-col items-start lg:gap-6 xs:gap-4">
                <h4 className="lg:text-lg xs:text-base font-bold">
                  Social Media
                </h4>
                <div className="flex items-start lg:gap-4 xs:gap-2">
                  <div className="logo-box flex items-center justify-center lg:size-16 xs:size-10 rounded-full">
                    {/* SVG diletakkan di dalam logo-box */}
                    <a href="https://www.instagram.com/skyshareacademy.id/">
                      <svg
                        className="lg:size-7 xs:size-5"
                        viewBox="0 0 33 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2368 2.6665C19.913 2.6665 20.3717 2.67984 21.8141 2.7465C23.2551 2.81317 24.2361 3.03584 25.0993 3.3665C25.9924 3.70517 26.7447 4.16384 27.497 4.90384C28.185 5.57036 28.7174 6.37662 29.0571 7.2665C29.3913 8.11584 29.6186 9.08384 29.6862 10.5038C29.7498 11.9252 29.7674 12.3772 29.7674 15.9998C29.7674 19.6225 29.7539 20.0745 29.6862 21.4958C29.6186 22.9158 29.3913 23.8825 29.0571 24.7332C28.7184 25.6235 28.1859 26.43 27.497 27.0958C26.8204 27.7736 26.0023 28.2982 25.0993 28.6332C24.2374 28.9625 23.2551 29.1865 21.8141 29.2532C20.3717 29.3158 19.913 29.3332 16.2368 29.3332C12.5605 29.3332 12.1018 29.3198 10.6594 29.2532C9.21842 29.1865 8.23745 28.9625 7.37419 28.6332C6.47078 28.2991 5.65245 27.7744 4.97656 27.0958C4.2884 26.4294 3.756 25.6231 3.41648 24.7332C3.08092 23.8838 2.85495 22.9158 2.7873 21.4958C2.72371 20.0745 2.70612 19.6225 2.70612 15.9998C2.70612 12.3772 2.71965 11.9252 2.7873 10.5038C2.85495 9.0825 3.08092 8.11717 3.41648 7.2665C3.75506 6.37608 4.28758 5.5696 4.97656 4.90384C5.65265 4.22548 6.47092 3.70081 7.37419 3.3665C8.23745 3.03584 9.21707 2.81317 10.6594 2.7465C12.1018 2.68384 12.5605 2.6665 16.2368 2.6665ZM16.2368 9.33317C14.4425 9.33317 12.7217 10.0355 11.453 11.2858C10.1842 12.536 9.47144 14.2317 9.47144 15.9998C9.47144 17.7679 10.1842 19.4636 11.453 20.7139C12.7217 21.9641 14.4425 22.6665 16.2368 22.6665C18.031 22.6665 19.7518 21.9641 21.0206 20.7139C22.2893 19.4636 23.0021 17.7679 23.0021 15.9998C23.0021 14.2317 22.2893 12.536 21.0206 11.2858C19.7518 10.0355 18.031 9.33317 16.2368 9.33317ZM25.0317 8.99984C25.0317 8.55781 24.8535 8.13389 24.5363 7.82133C24.2191 7.50877 23.7889 7.33317 23.3404 7.33317C22.8918 7.33317 22.4616 7.50877 22.1444 7.82133C21.8272 8.13389 21.649 8.55781 21.649 8.99984C21.649 9.44186 21.8272 9.86579 22.1444 10.1783C22.4616 10.4909 22.8918 10.6665 23.3404 10.6665C23.7889 10.6665 24.2191 10.4909 24.5363 10.1783C24.8535 9.86579 25.0317 9.44186 25.0317 8.99984ZM16.2368 11.9998C17.3133 11.9998 18.3458 12.4213 19.1071 13.1714C19.8683 13.9216 20.296 14.939 20.296 15.9998C20.296 17.0607 19.8683 18.0781 19.1071 18.8283C18.3458 19.5784 17.3133 19.9998 16.2368 19.9998C15.1602 19.9998 14.1277 19.5784 13.3665 18.8283C12.6052 18.0781 12.1776 17.0607 12.1776 15.9998C12.1776 14.939 12.6052 13.9216 13.3665 13.1714C14.1277 12.4213 15.1602 11.9998 16.2368 11.9998Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="logo-box flex items-center justify-center lg:size-16 xs:size-10 rounded-full">
                    {/* SVG diletakkan di dalam logo-box */}
                    <a href="https://www.youtube.com/@msimindonesia7294">
                      <svg
                        className="lg:size-7 xs:size-5"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M27.4608 5.94682C28.7237 6.28487 29.7162 7.2773 30.0542 8.54017C30.6651 10.8268 30.6675 15.6006 30.6675 15.6006C30.6675 15.6006 30.6675 20.3745 30.0542 22.6612C29.7162 23.924 28.7237 24.9164 27.4608 25.2544C25.1742 25.8678 16.0008 25.8678 16.0008 25.8678C16.0008 25.8678 6.82757 25.8678 4.54088 25.2544C3.27802 24.9164 2.28559 23.924 1.94754 22.6612C1.33421 20.3745 1.33421 15.6006 1.33421 15.6006C1.33421 15.6006 1.33421 10.8268 1.94754 8.54017C2.28559 7.2773 3.27802 6.28487 4.54088 5.94682C6.82757 5.3335 16.0008 5.3335 16.0008 5.3335C16.0008 5.3335 25.1742 5.3335 27.4608 5.94682ZM20.6854 15.6011L13.0647 20.0005V11.2015L20.6854 15.6011Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-mascot flex flex-col items-center lg:ml-44 lg:items-start lg:mt-0 xs:mt-8 gap-4 lg:w-72 xs:w-full">
            <div className="mascot-footer flex justify-center items-center lg:w-full xs:w-2/5">
              <img src={Mascot} alt="mascot" className="mx-auto" />
            </div>
            <p className="lg:text-base xs:text-sm font-normal text-center w-full">
              Berkembang seorang diri itu melelahkan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
