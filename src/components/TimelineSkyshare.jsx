import React from "react";
import TimeIcon from "../../public/images/mascot-icons/Time Circle.png";
import "./TimelineSkyshare.css";

function TimelineSkyshare({ parents, talent, mentor }) {
  const timelineImageSrc = parents?.gambar_timeline || talent?.gambar_timeline || mentor?.gambar_timeline;

  return (
    <div className="timeline-section flex pt-14 lg:pt-24 flex-col items-center bg-background">
      <div className="timeline-container flex flex-col items-center gap-7 lg:gap-10">
        <div className="timeline-title flex items-center gap-2 lg:gap-4">
          <img className="size-6 lg:size-10" src={TimeIcon} alt="starts" />
          <h2 className="headline-2">Timeline Acara</h2>
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

export default TimelineSkyshare;
