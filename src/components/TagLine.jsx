import React from "react";
import logoPlaceholder from "../../public/images/logo SkyshareAcademy.png";
import "./TagLine.css";

function TagLine() {
  return (
    <>
      <div className="logo-abt background flex flex-col xs:pt-12 lg:pt-24 items-center self-stretch">
        <div className="logo-padding flex flex-col items-center justify-center sm:content-end">
          <img src={logoPlaceholder} alt="logo" />
        </div>
        <p className="logo-txt lg:text-xl font-medium text-slate-900	"></p>
      </div>
    </>
  );
}
export default TagLine;
