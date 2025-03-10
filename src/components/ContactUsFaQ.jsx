import React, { useState } from "react";
import ButtonLink from "./ButtonLink";
import mascot from "../../public/images/mascot-icons/pose=1.png";

function ContactUsFaQ() {
    const [activeQuestionId, setActiveQuestionId] = useState(null);

    const faq = [
        {
            id: 1,
            pertanyaan: "Apa itu Skyshare Academy? 1",
            jawaban: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
            id: 2,
            pertanyaan: "Apa itu Skyshare Academy? 2",
            jawaban: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas officia, voluptate accusantium inventore accusamus soluta tempora reprehenderit necessitatibus fugit aliquam placeat eligendi culpa qui sequi! Quos suscipit expedita blanditiis eos facere tempore similique at, possimus, aliquam ducimus itaque aut magnam fuga, quam rem quasi consectetur perspiciatis. Sequi saepe perspiciatis veritatis.",
        },
        {
            id: 3,
            pertanyaan: "Apa itu Skyshare Academy? 3",
            jawaban: "Lorem ipsum dolor sit amet consectetur !",
        },
        {
            id: 4,
            pertanyaan: "Apa itu Skyshare Academy? 4",
            jawaban: "Lorem ipsum dolor sit amet consectetur !",
        },
        {
            id: 5,
            pertanyaan: "Apa itu Skyshare Academy? 5",
            jawaban: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
            id: 6,
            pertanyaan: "Apa itu Skyshare Academy? 6",
            jawaban: "Lorem ipsum dolor sit amet consectetur !",
        },
        {
            id: 7,
            pertanyaan: "Apa itu Skyshare Academy? 7",
            jawaban: "Lorem ipsum dolor sit amet consectetur !",
        },
        {
            id: 8,
            pertanyaan: "Apa itu Skyshare Academy? 8",
            jawaban: "Lorem ipsum dolor sit amet consectetur !",
        },
    ];

    const toggleDropdown = (id) => {
        setActiveQuestionId((prevId) => (prevId === id ? null : id));
    };

    return (
    <div className="faq-section flex lg:py-[96px] py-[56px] px-[10px] justify-center items-start gap-gap10 bg-background">
        <div className="faq-container flex flex-col items-start gap-7 lg:gap-[40px]">
            <div className="faq-title flex xs:flex-col items-start lg:items-center gap-4">
                <div className="mascot-container flex size-[120px] justify-center items-center">
                    <img src={mascot} alt="Mascot" />
                </div>
                <div className="title-container flex lg:w-[516px] w-[296px] flex-col items-start gap-2">
                    <div className="faq-container flex items-center gap-3 self-stretch">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.4053 12.1049L18.2293 9.89094L20.3223 4.66494L15.1013 6.75894L12.8843 1.58594L10.6663 6.75894L5.4453 4.66494L7.5383 9.89094L2.3623 12.1049L7.5383 14.3189L5.4453 19.5449L10.6663 17.4509L12.8843 22.6239L15.1013 17.4509L20.3223 19.5449L18.2293 14.3189L23.4053 12.1049Z"
                                fill="#334151"
                            />
                        </svg>
                        <h2 className="text-neutral-2 font-bold leading-[130%] text-2xl lg:text-[34px]">
                            Frequently asked questions
                        </h2>
                    </div>
                    <p className="self-stretch text-neutral-3 font-normal leading-[130%] text-[14px] lg:text-[16px]">
                        <span className="font-bold">Masih Bingung?</span> Jelajahi Pertanyaan Populer dari 
                        Calon Member Sebelum Bergabung di Mentoring 
                        <span className="font-bold"> Skyshare Academy!</span>
                    </p>
                </div>
            </div>
            <div className="all-dropdown flex w-[312px] lg:w-[1152px] flex-col lg:items-start items-center gap-4 lg:gap-6">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                    <div className="pack-1 lg:w-[564px] w-[312px] flex flex-col gap-4">
                        {faq.slice(0, 4).map((question) => (
                            <div key={question.id} className="faq-dropdown flex flex-col py-3 px-4 gap-4 self-stretch rounded-lg border border-neutral-2 bg-white">
                                <div className="flex justify-between items-center lg:w-full w-[280px]">
                                    <h4 className="text-neutral-2 font-bold leading-[150%] text-[15px]">
                                        {question.pertanyaan}
                                    </h4>
                                    <svg
                                        onClick={() => toggleDropdown(question.id)}
                                        className={`size-6 flex-shrink-0 duration-300 transform cursor-pointer ${activeQuestionId === question.id ? 'rotate-180' : ''}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 25 25"
                                        fill="none"
                                    >
                                        <path
                                            d="M12.8838 14.6572L18.8369 8.69937C19.2775 8.25874 19.99 8.25874 20.426 8.69937C20.8619 9.13999 20.8619 9.85249 20.426 10.2931L13.6807 17.0431C13.2541 17.4697 12.5697 17.4791 12.1291 17.0759L5.33691 10.2978C5.1166 10.0775 5.00879 9.78687 5.00879 9.50093C5.00879 9.21499 5.1166 8.92437 5.33691 8.70405C5.77754 8.26343 6.49004 8.26343 6.92598 8.70405L12.8838 14.6572Z"
                                            fill="#334151"
                                        />
                                    </svg>
                                </div>
                                <div 
                                    className={`overflow-hidden transition-all duration-700 ${
                                        activeQuestionId === question.id ? "h-auto block" : "hidden"
                                    }`}
                                >
                                    <p className="text-neutral-3 font-normal leading-[130%] text-[14px]">
                                        {question.jawaban}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pack-2 lg:w-[564px] w-[312px] flex flex-col gap-4">
                        {faq.slice(4, 8).map((question) => (
                            <div key={question.id} className="faq-dropdown flex flex-col py-3 px-4 gap-4 self-stretch rounded-lg border border-neutral-2 bg-white">
                                <div className="flex justify-between items-center lg:w-full w-[280px]">
                                    <h4 className="text-neutral-2 font-bold leading-[150%] text-[15px]">
                                        {question.pertanyaan}
                                    </h4>
                                    <svg
                                        onClick={() => toggleDropdown(question.id)}
                                        className={`size-6 flex-shrink-0 duration-300 transform cursor-pointer ${activeQuestionId === question.id ? 'rotate-180' : ''}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 25 25"
                                        fill="none"
                                    >
                                        <path
                                            d="M12.8838 14.6572L18.8369 8.69937C19.2775 8.25874 19.99 8.25874 20.426 8.69937C20.8619 9.13999 20.8619 9.85249 20.426 10.2931L13.6807 17.0431C13.2541 17.4697 12.5697 17.4791 12.1291 17.0759L5.33691 10.2978C5.1166 10.0775 5.00879 9.78687 5.00879 9.50093C5.00879 9.21499 5.1166 8.92437 5.33691 8.70405C5.77754 8.26343 6.49004 8.26343 6.92598 8.70405L12.8838 14.6572Z"
                                            fill="#334151"
                                        />
                                    </svg>
                                </div>
                                <div 
                                    className={`overflow-hidden transition-all duration-700 ${
                                        activeQuestionId === question.id ? "h-auto block" : "hidden"
                                    }`}
                                >
                                    <p className="text-neutral-3 font-normal leading-[130%] text-[14px]">
                                        {question.jawaban}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <p className="lg:w-[1152px] w-[312px] text-neutral-3 font-normal leading-[130%] text-[14px] lg:text-[16px] text-center lg:self-stretch">
                <span className="font-bold">Jika pertanyaan-pertanyaan ini belum menjawab keresahanmu</span>, 
                jangan ragu untuk langsung menghubungi kami melalui WhatsApp di atas. Konsultasikan lebih lanjut 
                dan tanyakan apa saja yang ingin kamu ketahui! 
            </p>
        </div>
    </div>
);
}


export default ContactUsFaQ;
