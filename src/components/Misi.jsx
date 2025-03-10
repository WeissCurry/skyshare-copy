import React from "react";
import Icon1 from "../../public/images/mascot-icons/circle-1.png";
import Icon2 from "../../public/images/mascot-icons/circle-2.png";
import Icon3 from "../../public/images/mascot-icons/circle.png";
// import "./Misi.css";

function Misi() {
  return (
    <>
      <div className="misi py-14 lg:py-24 flex flex-col items-center self-stretch">
        <div className="misi-content flex flex-col gap-10 lg:max-w-[1152px] xs:w-[312px]">
          <h1 className="headline-1 text-center text-black font-bold">Misi</h1>
          <div className="misi-point lg:w-[956px] lg:h-[109px] w-[312px] h-[100%] flex gap-6 items-center">
            <img className="icon size-10 lg:size-16" src={Icon3} alt="icon" />
            <div className="misi-paragraph flex flex-col items-start gap-2 lg:gap-4">
              <h4 className=" text-base lg:text-lg font-semibold">
                Personalized Mentorship
              </h4>
              <p className="text-sm lg:text-base font-normal">
                Skyshare Academy menyediakan mentor yang sesuai dengan kebutuhan individu,
                membantu mengatasi tantangan akademik, karier, dan pertumbuhan
                pribadi.
              </p>
            </div>
          </div>
          <div className="misi-point lg:w-[956px] lg:h-[109px] w-[312px] h-[100%] flex gap-6 items-center">
            <img className="icon size-10 lg:size-16" src={Icon1} alt="icon" />
            <div className="misi-paragraph flex flex-col items-start gap-2 lg:gap-4">
              <h4 className=" text-base lg:text-lg font-semibold">
                Integration of Islamic Spirituality
              </h4>
              <p className="text-sm lg:text-base font-normal">
                Kami memadukan nilai-nilai Islam ke dalam pendekatan pembinaan,
                menciptakan individu yang unggul dalam kehidupan pribadi dan
                mengamalkan prinsip-prinsip kebaikan dan keadilan.
              </p>
            </div>
          </div>
          <div className="misi-point lg:w-[956px] lg:h-[109px] w-[312px] h-[100%] flex gap-6 items-center">
            <img className="icon size-10 lg:size-16" src={Icon2} alt="icon" />
            <div className="misi-paragraph flex flex-col items-start gap-2 lg:gap-4">
              <h4 className=" text-base lg:text-lg font-semibold">
                Empowerment for Success
              </h4>
              <p className="text-sm lg:text-base font-normal">
                Skyshare Academy memberdayakan individu untuk meraih kesuksesan di dunia dan
                akhirat, menyediakan keterampilan, pengetahuan, dan kedalaman
                spiritual yang diperlukan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Misi;
