import React from "react";
import Mascot from "../../public/images/mascot-icons/pose=9.png";
import Caution from "../../public/images/mascot-icons/Danger Triangle.png";

function NotFoundPage() {
  return (
    <>
      <div className="bg-background flex justify-center items-center h-screen">
        <div className=" bg-white py-5 px-20 rounded-xl shadow-lg">
          <div className="flex justify-center">
            <img className="w-64" src={Mascot} alt="" />
          </div>
          <div className="flex justify-center">
            <img className="w-20" src={Caution} alt="" />
          </div>
          <h2 className="headline-2">404 Page Not Found</h2>
        </div>
      </div>
    </>
  );
}
export default NotFoundPage;
