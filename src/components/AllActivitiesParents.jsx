import React from "react";
import ArrowRight from "../../public/images/mascot-icons/Arrow - Right 3.png";
import ArrowDown from "../../public/images/mascot-icons/Arrow - Down 3.png";
import { Link } from "react-router-dom";
import SecondayButton from "./SecondayButton";
import ButtonLink from "./ButtonLink";

function AllActivitiesParents({ parents }) {
  const data = parents;

  return (
    <>
      <div className="botton-section bg-background flex flex-col pt-14 lg:pt-24 items-center">
        <div className="bottom-container flex flex-col lg:max-w-5xl max-w-80 gap-4">
          <p className="paragraph text-center">
            Kalian akan mengikuti beragam aktivitas untuk mengupgrade kecerdasan
            majemuk yang dimiliki. Adapun aktivitas dalam program Skyshare
            Academy yang akan kalian lakukan di antaranya, circle time, home
            visit, fill your mind, training, student expedition, take a walk
            together, experiantial learning, dan lain-lain.
          </p>
          <div className="allact-btn w-44 mx-auto">
            <SecondayButton
              caption="Seluruh Kegiatan"
              to="/ourprogram/parents/activities"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.8594 8.84814L2.19287 8.84814L2.19287 7.84815L13.8594 7.84814L13.8594 8.84814Z"
                  fill="#001125"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.3593 7.84814C11.0076 7.84814 9.08594 9.91624 9.08594 12.1215L9.08594 12.6215L10.0859 12.6215L10.0859 12.1215C10.0859 10.4471 11.581 8.84814 13.3593 8.84814L13.8593 8.84814L13.8593 7.84814L13.3593 7.84814Z"
                  fill="#001125"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.3593 8.84814C11.0076 8.84814 9.08594 6.78005 9.08594 4.57478L9.08594 4.07478L10.0859 4.07478L10.0859 4.57478C10.0859 6.24917 11.581 7.84814 13.3593 7.84814L13.8593 7.84814L13.8593 8.84814L13.3593 8.84814Z"
                  fill="#001125"
                />
              </svg>
            </SecondayButton>
          </div>
          <div className="join-btn mx-auto w-48 py-14 lg:py-24">
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
          </div>
        </div>
      </div>
    </>
  );
}
export default AllActivitiesParents;
