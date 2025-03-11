import React from "react";
import WorkIcon from "../../public/images/mascot-icons/Vector.png";
import ParentsLogo from "../../public/images/Parents-logo.png";
import "./ActivitiesHero.css";

function ParentsActivitiesHero() {
  return (
    <>
      <div className="activities-title bg-talent-bg bg-cover flex flex-col self-stretch items-center px-6 py-14 lg:py-24 lg:px-0">
        <div className="activities-padding flex flex-col justify-end items-center flex-wrap">
          <div className="activities-hero-content flex px-4 pb-6 pt-12 lg:pt-24 flex-col items-center gap-2 self-stretch lg:gap-4 bg-white">
            <div className="activities-title-logo flex flex-col items-center">
              <img
                className=" icon-activities -mt-24 lg:-mt-44"
                src={ParentsLogo}
                alt="logo"
              />
              <h1 className="headline-1 w-[268px] text-center text-neutral-1 mt-2">
                Parents Activites
              </h1>
              <div className="flex items-center mt-5 justify-center gap-2">
                <img className="size-4 lg:size-6" src={WorkIcon} alt="tas" />
                <p className="paragraph text-slate-600">
                  Ada kegiatan apa aja sih di Parents Academy?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// padding: 96px 24px 24px 24px;

export default ParentsActivitiesHero;
