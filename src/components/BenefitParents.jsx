import React from "react";
import Stars from "../../public/images/mascot-icons/Vector1.png";
import Icon1 from "../../public/images/mascot-icons/circle.png";
import "./Benefit.css";

function BenefitParents() {
    return (
        <>
        <div className="benefit bg-orange-bg bg-cover border-t-2 border-black flex flex-col py-14 lg:py-24 items-center self-stretch">
        <div className="benefit-container flex flex-col items-center gap-16 lg:gap-20">
            <div className="benefit-title flex items-center gap-3 lg:gap-4 ">
                <img className="w-12 h-12" src={Stars} alt="starts" />
                <h2 className="headline-2">Benefit of joining</h2>
            </div>
            <div className="benefit-cards flex lg:flex-row flex-col items-center lg:items-start gap-4 lg:gap-9 flex-wrap">
                <div className="benefit-card flex flex-col px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center">
                <div className="flex justify-center">
                    <img
                    className="star-icon size-16 lg:size-20"
                    src={Icon1}
                    alt=""
                    />
                </div>
                <div className="main-card flex flex-col item self-stretch">
                    <h4 className="headline-4">Personalized Mentorship</h4>
                </div>
                <hr className=" horz-rule" />
                <p className="alternative-paragraph">
                    Dapatkan mentor yang disesuaikan dengan kebutuhanmu, mendukungmu
                    dalam menghadapi tantangan akademik, keputusan karier, dan
                    perkembangan pribadi.
                </p>
                </div>
                <div className="benefit-card flex flex-col px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center mt-10 lg:mt-0">
                <div className="flex justify-center">
                    <img
                    className="star-icon size-16 lg:size-20"
                    src={Icon1}
                    alt=""
                    />
                </div>
                <div className="main-card flex flex-col item self-stretch">
                    <h4 className="headline-4">Exclusive Resources</h4>
                </div>
                <hr className=" horz-rule" />
                <p className="alternative-paragraph">
                    Akses ke workshop, seminar, kursus online, dan komunitas yang
                    mendukung untuk meningkatkan pengalaman belajarmu dan memperluas
                    wawasan.
                </p>
                </div>
                <div className="benefit-card flex flex-col px-4 pb-6 pt-8 lg:px-6 lg:pt-11 lg:pb-6 bg-white gap-4 lg:gap-4 text-center mt-10 lg:mt-0">
                <div className="flex justify-center">
                    <img
                    className="star-icon size-16 lg:size-20"
                    src={Icon1}
                    alt=""
                    />
                </div>
                <div className="main-card flex flex-col item self-stretch">
                    <h4 className="headline-4">Career Advancement</h4>
                </div>
                <hr className=" horz-rule" />
                <p className="alternative-paragraph">
                    Dapatkan konseling karier, kesempatan untuk berjejaring, dan
                    bimbingan untuk menjelajahi magang dan melamar pekerjaan,
                    mempersiapkanmu untuk sukses dalam bidang yang kamu pilih.
                </p>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
export default BenefitParents;
