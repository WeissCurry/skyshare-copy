import React from "react";
// import mascot from "/images/mascot-icons/mascot-contact.png"
import mascot from "../../public/images/mascot-icons/mascot-contact.png"
import "./ContacUsHero.css";

function ContactUsHero() {
  return (
    <>
      <div className="contact-section bg-orange-bg bg-cover flex flex-col sm:content-end items-center gap-gap10 lg:pt-padding170 pt-padding106 pb-14 px-6 lg:py-24">
        <div className="inside-padding flex flex-col w-312 lg:w-nav content-end items-center gap-gap10 lg:gap-6">
          <div className="contact-container flex flex-col items-center lg:gap-6 lg:flex-wrap gap-4 self-stretch">
            <h1 className="headline-1 text-center text-neutral-2 self-stretch">Punya Pertanyaan Lebih <br className=" xs:hidden"/> Lanjut?</h1>
            <p className="paragraph text-center self-stretch text-neutral-2">
              Layanan kami tersedia Senin-Minggu,
              {/* add break line */}
              <br />
              jam 
              <span className=" font-bold"> 08.00-20.00</span>
            </p>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 relative">
              <div className="test w-312 h-auto">
                <a href="https://wa.me/628568043529" className="contact-buttons-white flex flex-col items-center gap-gap7277 relative overflow-hidden">
                  <svg className="svgAUAH" xmlns="http://www.w3.org/2000/svg" width="72" height="63" viewBox="0 0 72 63" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.1732 54.0734L44.8858 42.8291L55.5155 16.2878L28.9995 26.9226L17.74 0.650391L6.47543 26.9226L-20.0406 16.2878L-9.4108 42.8291L-35.6982 54.0734L-9.4108 65.3177L-20.0406 91.8591L6.47543 81.2242L17.74 107.496L28.9995 81.2242L55.5155 91.8591L44.8858 65.3177L71.1732 54.0734Z" fill="#FFD9AC"/>
                  </svg>
                  <div className="wa-and-logo flex items-center gap-gap7277">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                      <path d="M11.6613 3.67969C7.1677 3.67969 3.51068 7.20203 3.50909 11.5309C3.50804 12.9152 3.88409 14.2663 4.59712 15.4562L3.44043 19.5247L7.76242 18.433C8.96464 19.0619 10.3014 19.3899 11.6582 19.389H11.6613C16.155 19.389 19.812 15.8661 19.8136 11.5372C19.8147 9.44041 18.9675 7.46665 17.4279 5.98302C15.8888 4.49887 13.8422 3.68022 11.6613 3.67969ZM11.6613 18.0627H11.6587C10.4429 18.0627 9.25027 17.7479 8.20978 17.1532L7.96154 17.0117L5.39782 17.6592L6.08232 15.2508L5.92123 15.0041C5.2446 13.9722 4.8844 12.7649 4.88497 11.5309C4.88655 7.93249 7.92668 5.00591 11.664 5.00591C13.4735 5.00644 15.1747 5.68619 16.4545 6.91946C17.7342 8.15273 18.4383 9.79269 18.4372 11.5367C18.4356 15.1351 15.396 18.0627 11.6608 18.0627H11.6613ZM15.3781 13.1745C15.1742 13.0768 14.1728 12.602 13.9858 12.536C13.7994 12.471 13.6636 12.4372 13.5279 12.6337C13.3927 12.8302 13.0018 13.2723 12.8835 13.4027C12.7642 13.5337 12.6453 13.5495 12.4415 13.4518C12.2376 13.3536 11.5811 13.1466 10.8036 12.4779C10.1978 11.9582 9.789 11.3159 9.67016 11.1189C9.55132 10.923 9.65748 10.8168 9.75942 10.7191C9.85079 10.632 9.96329 10.4904 10.0647 10.3758C10.1661 10.2612 10.1999 10.1793 10.2686 10.0483C10.3362 9.91787 10.3024 9.80273 10.2511 9.70502C10.1999 9.60625 9.79322 8.64076 9.62262 8.24833C9.45784 7.86594 9.28988 7.91717 9.1647 7.91083C9.04587 7.90555 8.91066 7.90397 8.77386 7.90397C8.63918 7.90397 8.41788 7.95309 8.2309 8.14957C8.04446 8.34604 7.51788 8.82034 7.51788 9.78583C7.51788 10.7518 8.24781 11.6846 8.34974 11.8156C8.45168 11.946 9.78636 13.9282 11.8298 14.7786C12.3157 14.9798 12.695 15.1008 12.9913 15.1916C13.4793 15.3411 13.9235 15.3194 14.2742 15.2693C14.665 15.2127 15.4795 14.795 15.6485 14.337C15.8186 13.8791 15.8186 13.4862 15.7678 13.4043C15.7182 13.3224 15.5819 13.2733 15.3781 13.1745Z" fill="#334151"/>
                    </svg>
                    <h3 className="headline-3 text-neutral-2 text-center">Whatsapp</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9707 12.2842L3.05255 12.2842L3.05255 10.9197L18.9707 10.9197L18.9707 12.2842Z" fill="#334151"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2887 10.9194C15.08 10.9194 12.458 13.7412 12.458 16.7501L12.458 17.4324L13.8224 17.4324L13.8224 16.7501C13.8224 14.4656 15.8624 12.2839 18.2887 12.2839L18.9709 12.2839L18.9709 10.9194L18.2887 10.9194Z" fill="#334151"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2887 12.2842C15.08 12.2842 12.458 9.46241 12.458 6.45347L12.458 5.77125L13.8224 5.77125L13.8224 6.45347C13.8224 8.73805 15.8624 10.9197 18.2887 10.9197L18.9709 10.9197L18.9709 12.2842L18.2887 12.2842Z" fill="#334151"/>
                    </svg>
                  </div>
                  <p className=" paragraph text-neutral-2 text-center">(+62) 856-8043-529</p>       
                </a>
              </div>
              <div className="test w-312 h-auto">
                <button className="contact-buttons-white flex flex-col items-center gap-gap7277 relative overflow-hidden" onClick={() => window.open("mailto:msimbusiness@org.com", "_blank")}>
                  <svg className="svgAUAH" xmlns="http://www.w3.org/2000/svg" width="72" height="63" viewBox="0 0 72 63" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.1732 54.0734L44.8858 42.8291L55.5155 16.2878L28.9995 26.9226L17.74 0.650391L6.47543 26.9226L-20.0406 16.2878L-9.4108 42.8291L-35.6982 54.0734L-9.4108 65.3177L-20.0406 91.8591L6.47543 81.2242L17.74 107.496L28.9995 81.2242L55.5155 91.8591L44.8858 65.3177L71.1732 54.0734Z" fill="#FFD9AC"/>
                  </svg>
                  <div className="wa-and-logo flex items-center gap-gap7277">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.68273 7.28223L11.0251 11.6235L16.3675 7.28223L17.228 8.34113L11.0251 13.3816L4.82227 8.34113L5.68273 7.28223Z" fill="#001125"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.21094 2.23779H20.7678V19.9754H1.21094V2.23779ZM2.57537 3.60222V18.611H19.4034V3.60222H2.57537Z" fill="#001125"/>
                    </svg>
                    <h3 className="headline-3 text-neutral-2 text-center">Email</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9707 12.2842L3.05255 12.2842L3.05255 10.9197L18.9707 10.9197L18.9707 12.2842Z" fill="#334151"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2887 10.9194C15.08 10.9194 12.458 13.7412 12.458 16.7501L12.458 17.4324L13.8224 17.4324L13.8224 16.7501C13.8224 14.4656 15.8624 12.2839 18.2887 12.2839L18.9709 12.2839L18.9709 10.9194L18.2887 10.9194Z" fill="#334151"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2887 12.2842C15.08 12.2842 12.458 9.46241 12.458 6.45347L12.458 5.77125L13.8224 5.77125L13.8224 6.45347C13.8224 8.73805 15.8624 10.9197 18.2887 10.9197L18.9709 10.9197L18.9709 12.2842L18.2887 12.2842Z" fill="#334151"/>
                    </svg>
                  </div>
                  <p className=" paragraph text-neutral-2 text-center">msimbusiness@org.com</p>       
                </button>
              </div>
              <img src={mascot} className="hidden lg:block lg:absolute -right-24 bottom-0 w-w200 h-h200"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );  
}

export default ContactUsHero;
