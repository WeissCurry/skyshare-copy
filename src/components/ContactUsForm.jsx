import React from "react";
import ButtonLink from "./ButtonLink";
import "./ContactUsForm.css";

function ContactUsForm() {
  return (
    <>
      <div className="help-section bg-background border-t-2 border-black flex flex-col lg:py-24 lg:px-0 py-14 px-6 items-center">
        <div className="help-container flex flex-col items-center gap-7 lg:gap-10">
          <h1 className="headline-1 text-center">Apa yang bisa kami bantu?</h1>
          <div className="form-area flex items-start gap-4 lg:gap-6 lg:flex-row flex-col">
            <div className="form-info flex flex-col items-start gap-4">
              <form action="w-full" className="">
                <label className="headline-4 mb-2" htmlFor="firstname">
                  Nama Depan <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  className=" pl-2 rounded-md border-2 border-gray-400 w-full py-3 mb-4"
                  type="text"
                  id="firstname"
                  placeholder="Masukkan nama depan"
                />
                <label className="headline-4 mb-2" htmlFor="lastname">
                  Nama Belakang
                  <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  className=" pl-2 rounded-md border-2 border-gray-400 w-full py-3 mb-4"
                  type="text"
                  id="lastname"
                  placeholder="Masukkan nama Belakang"
                />
                <label className="headline-4 mb-2" htmlFor="email">
                  Email <span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  className="pl-2 rounded-md border-2 border-gray-400 w-full py-3"
                  type="text"
                  id="email"
                  placeholder="e.g astronaut@email.com"
                />
              </form>
            </div>
            <div className="form-suggest">
              <label className=" headline-4 mb-2" htmlFor="firstname">
                Berikan Pesan atau pertanyaan
                <span className="text-red-500 font-bold">*</span>
              </label>
              <textarea
                className=" pl-2 rounded-md border-2 h-60 border-gray-400 px-1 py- resize-none w-full"
                type="paragraph"
                id="firstname"
                draggable="false"
                placeholder="Masukkan pesan atau pertanyaan anda"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <ButtonLink
              caption="Send message"
              to="google.com"
              textColor="text-white"
              backgroundColor="bg-primary-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.833 8.5L2.1665 8.5L2.1665 7.5L13.833 7.5L13.833 8.5Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.3329 7.5C10.9812 7.5 9.05957 9.56809 9.05957 11.7734L9.05957 12.2734L10.0596 12.2734L10.0596 11.7734C10.0596 10.099 11.5547 8.5 13.3329 8.5L13.8329 8.5L13.8329 7.5L13.3329 7.5Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.3329 8.5C10.9812 8.5 9.05957 6.43191 9.05957 4.22664L9.05957 3.72664L10.0596 3.72664L10.0596 4.22664C10.0596 5.90102 11.5547 7.5 13.3329 7.5L13.8329 7.5L13.8329 8.5L13.3329 8.5Z"
                  fill="white"
                />
              </svg>
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsForm;
