import React from "react";
import "./About.css";

function Mentorabout() {
    return (
        <>
        <div className="mentor-about bg-background flex flex-col py-14 lg:py-24 items-center self-stretch">
        <div className="about-container flex flex-col items-center gap-7 lg:gap-10">
            <h2 className="headline-2">About</h2>
            <div className="title-desc flex justify-center items-center content-center gap-2 flex-wrap text-center">
                <h4 className="headline-4 text-center">
                Jadi apa sih Mentor Academy itu?
                </h4>
                <p className="paragraph">
                Mentor Academy merupakan program Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                </p>
            </div>
            </div>
        </div>
        </>
    );
}

export default Mentorabout;
