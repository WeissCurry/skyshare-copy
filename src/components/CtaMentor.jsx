import React from "react";
import MentorLogo from "../../public/images/Mentor-logo.png";
import "./Cta.css";
import ButtonLink from "./ButtonLink";

function MentorCta({ mentor }) {
  const data = mentor;
  return (
    <>
      <div className="cta-title bg-mentor-bg bg-cover flex flex-col self-stretch items-center px-6 py-14 lg:py-24 lg:px-0">
        <div className="cta-padding flex flex-col justify-end items-center flex-wrap">
          <div className="cta-hero-content flex px-6 flex-col items-center gap-2 self-stretch lg:px-0 lg:gap-4">
            <div className="logo-title flex flex-col items-center">
              <img src={MentorLogo} alt="logo" />
              <h1 className="text-white headline-1 text-center">
                Mentor Academy
              </h1>
            </div>
            <p className="regist paragraph text-center mb-3">
              Open registration Mentor Academy Season 6.
            </p>
            <div className="join-download flex items-start gap-7 flex-col lg:flex-row ">
              <ButtonLink
                to={data.link_join_program}
                caption={data.link_cta}
                backgroundColor={"bg-primary-1"}
                textColor={"text-white"}
              >
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
              </ButtonLink>
              <ButtonLink
                to={data.file_booklet}
                caption="Unduh Booklet"
                backgroundColor={"bg-neutral-5"}
                textColor={"text-neutral-2"}
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
                    d="M2 8.3042H8.125V9.8042H3.5V19.733H20.5V9.8042H15.875V8.3042H22V21.233H2V8.3042Z"
                    fill="#334151"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.25 18.2065L11.25 2.76727L12.75 2.76727L12.75 18.2065L11.25 18.2065Z"
                    fill="#334151"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.75 17.4564C12.75 14.5114 10.1651 12.1108 7.40449 12.1108L6.65449 12.1108L6.65449 13.6108L7.40449 13.6108C9.36881 13.6108 11.25 15.3715 11.25 17.4564L11.25 18.2064L12.75 18.2064L12.75 17.4564Z"
                    fill="#334151"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.25 17.4564C11.25 14.5114 13.8349 12.1108 16.5955 12.1108L17.3455 12.1108L17.3455 13.6108L16.5955 13.6108C14.6312 13.6108 12.75 15.3715 12.75 17.4564L12.75 18.2064L11.25 18.2064L11.25 17.4564Z"
                    fill="#334151"
                  />
                </svg>
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MentorCta;
