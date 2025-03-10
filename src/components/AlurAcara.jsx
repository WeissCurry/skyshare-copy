import React from "react";
import WorkIcon from "../../public/images/mascot-icons/Work.png";
import TimeLine from "../../public/images/Alur Acara Ex.png";
import "./AlurAcara.css";

function AlurAcara({ parents, talent, mentor }) {
  const timelineImageSrc =
    parents?.gambar_alur_acara || talent?.gambar_alur_acara || mentor?.gambar_alur_acara;

  return (
    <div className="alur-section flex pt-14 lg:pt-24 flex-col items-center bg-background">
      <div className="alur-container flex flex-col items-center gap-7 lg:gap-10">
        <div className="alur-title flex items-center gap-2 lg:gap-4">
          <img className="size-6 lg:size-10" src={WorkIcon} alt="starts" />
          <h2 className="headline-2">Alur Acara</h2>
        </div>
        {timelineImageSrc ? (
          <div className="timeline-img-container">
            <img
              className="timeline-img"
              src={timelineImageSrc}
              alt="timeline-acara"
            />
          </div>
        ) : (
          <p className="no-image">No timeline image available</p>
        )}
      </div>
    </div>
  );
}

export default AlurAcara;
