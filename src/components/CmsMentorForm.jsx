import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Hero.css";
import skyshareApi from "../utilities/skyshareApi";
import CmsNavCard from "./CmsNavCard";
import Book from "../../public/images/mascot-icons/Document.png";
import Work from "../../public/images/mascot-icons/Work.png";
import Time from "../../public/images/mascot-icons/Time Circle.png";
import Ceklist from "../../public/images/mascot-icons/Tick Square.png";
import Chain from "../../public/images/mascot-icons/Link.png";
import Xbutton from "../../public/images/mascot-icons/Fill 300.png";
import Mascot1 from "../../public/images/mascot-icons/pose=8.png";
import Mascot2 from "../../public/images/mascot-icons/pose=1.png";
import Coution from "../../public/images/mascot-icons/Info Square.png";
import Mascot from "../../public/images/mascot-icons/pose=2.png";
import ArrowLeft from "../../public/images/mascot-icons/Arrow - Down 3.png";

function CmsMentorForm() {
  const [mentorForm, setMentorForm] = useState({});
  const [schools, setSchools] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [deleteSchoolById, setDeleteSchoolById] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [imagePreviewUrlTimeline, setImagePreviewUrlTimeline] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [responseStatus, setResponseStatus] = useState("");
  const [dataMentor, setDataMentor] = useState({});
  const Navigate = useNavigate();

  useEffect(() => {
    const getDataMentor = async () => {
      setIsUploading(true);
      try {
        const getDataFromServer = await skyshareApi.get(`/mentor`);
        const mentor = getDataFromServer.data.data;
        setDataMentor(mentor);
        setMentorForm({
          ...mentorForm,
          file_booklet: mentor.file_booklet,
          link_cta: mentor.link_cta,
          link_join_program: mentor.link_join_program,
        });
        setImagePreviewUrl(mentor.gambar_alur_acara || "");
        setImagePreviewUrlTimeline(mentor.gambar_timeline || "");
      } catch (error) {
        console.error(error);
      } finally {
        setIsUploading(false);
      }
    };
    getDataMentor();
  }, []);

  const handleAddTalentAcademy = async function () {
    const formData = new FormData();
    formData.append("file_booklet", mentorForm.file_booklet);
    formData.append("gambar_alur_acara", mentorForm.gambar_alur_acara);
    formData.append("gambar_timeline", mentorForm.gambar_timeline);
    formData.append("link_cta", mentorForm.link_cta);
    formData.append("link_join_program", mentorForm.link_join_program);
    setIsUploading(true);
    try {
      const responseFromServer = await skyshareApi({
        url: "/mentor",
        method: "PUT",
        data: formData,
      });
      const status = responseFromServer.data.status;
      setResponseStatus(status);
      if (status === "success") {
        setIsSaveModalOpen(true);
      } else {
        setIsErrorModal(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsUploading(false);
    }
    console.log(formData, "data");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeErrorModal = () => {
    setMentorForm({ school_ids: [] });
    setImagePreviewUrl("");
    setImagePreviewUrlTimeline("");
    setIsErrorModal(false);
  };

  const handleCancel = () => {
    setIsCancelModalOpen(true);
  };

  const closeSaveModal = () => {
    setIsSaveModalOpen(false);
    setImagePreviewUrl("");
    setImagePreviewUrlTimeline("");
    setDataMentor({});
  };

  const closeCancelModal = () => {
    setIsCancelModalOpen(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMentorForm({
        ...mentorForm,
        gambar_alur_acara: file,
      });
      // setSelectedFileName(file.name);
      setImagePreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleFileChangeTimeline = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMentorForm({
        ...mentorForm,
        gambar_timeline: file,
      });
      // setSelectedFileName(file.name);
      setImagePreviewUrlTimeline(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="bg-background flex flex-col pt-12 items-center self-stretch">
        <div className="content-1 flex gap-4">
          <div>
            <CmsNavCard />
          </div>
          <div className="w-full">
            <div>
              <h1 className="headline-1">Mentor Academy</h1>
              <p className="paragraph">
                Kelola secara dinamis page Mentor Academy disini.
              </p>
            </div>
            <div className="shadow-md bg-neutral-white mt-10 border-2 border-black rounded-xl pb-5 px-3 w-full">
              <div className=" booklet mt-6">
                <div className="bg-background p-4 gap-4 flex items-center rounded-xl">
                  <img className="w-6" src={Book} alt="" />
                  <h4 className="headline-4">Booklet</h4>
                </div>
                <div className="bg-neutral-white gap-4 flex items-center">
                  <form className="w-full" action="">
                    <label className="block font-bold mt-4 mb-1" htmlFor="cta">
                      <div className="flex gap-1">
                        <img className="w-6" src={Chain} alt="" />
                        Link Booklet<span className="text-red-500">*</span>
                      </div>
                    </label>
                    <input
                      placeholder="https://"
                      type="text"
                      defaultValue={dataMentor.file_booklet}
                      onChange={(e) =>
                        setMentorForm({
                          ...mentorForm,
                          file_booklet: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                  </form>
                </div>
              </div>

              <div className=" alur-acara mt-6">
                <div className="bg-background p-4 gap-4 flex items-center rounded-xl">
                  <img className="w-6" src={Work} alt="" />
                  <h4 className="headline-4">Alur Acara</h4>
                </div>
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <h4 className=" font-bold text-base">
                    Upload gambar “Alur Acara”{" "}
                    <span className=" text-base font-bold text-orange-300">
                      *
                    </span>
                  </h4>
                </div>
                <div className="bg-neutral-white rounded-xl border-2 border-gray-400 px-6 pt-7 pb-4">
                  <div className="border-2 border-dashed flex justify-center items-center border-gray-400 rounded-xl h-60">
                    <div className="">
                      {imagePreviewUrl && (
                        <div className="flex justify-center  ">
                          <img
                            src={imagePreviewUrl}
                            alt="Image Preview"
                            className="rounded-xl border-2 border-gray-400"
                            style={{ maxWidth: "100%", maxHeight: "220px" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="my-4 bg-primary-1 cursor-pointer hover:bg-primary-2 flex justify-center rounded-xl items-center">
                    <input
                      type="file"
                      id="image_heading"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="cursor-pointer z-10 opacity-0 ml-80 rounded-xl flex justify-center gap-2 py-4"
                    />
                    <div className="absolute cursor-pointer flex gap-2 items-center ">
                      <p className=" cursor-pointer text-white font-bold">
                        Upload File
                      </p>
                      <img
                        className=" cursor-pointer w-6 -rotate-90"
                        src={ArrowLeft}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-center pb-3">
                    <h4 className=" text-base">
                      Minimal Ukuran{" "}
                      <span className=" font-bold">(956 x 350px)</span>
                    </h4>
                  </div>
                </div>
              </div>

              <div className=" timeline mt-6">
                <div className="bg-background p-4 gap-4 flex items-center rounded-xl">
                  <img className="w-6" src={Time} alt="" />
                  <h4 className="headline-4">Timeline</h4>
                </div>
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <h4 className=" font-bold text-base">
                    Upload gambar “Timeline”{" "}
                    <span className=" text-base font-bold text-orange-300">
                      *
                    </span>
                  </h4>
                </div>
                <div className="bg-neutral-white rounded-xl border-2 border-gray-400 px-6 pt-7 pb-4">
                  <div className="border-2 border-dashed flex justify-center items-center border-gray-400 rounded-xl h-60">
                    <div className="">
                      {imagePreviewUrlTimeline && (
                        <div className="flex justify-center  ">
                          <img
                            src={imagePreviewUrlTimeline}
                            alt="Image Preview"
                            className="rounded-xl border-2 border-gray-400"
                            style={{ maxWidth: "100%", maxHeight: "220px" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="my-4 bg-primary-1 cursor-pointer hover:bg-primary-2 flex justify-center rounded-xl items-center">
                    <input
                      type="file"
                      id="image_heading"
                      accept="image/*"
                      onChange={handleFileChangeTimeline}
                      className="cursor-pointer z-10 opacity-0 ml-80 rounded-xl flex justify-center gap-2 py-4"
                    />
                    <div className="absolute cursor-pointer flex gap-2 items-center ">
                      <p className=" cursor-pointer text-white font-bold">
                        Upload File
                      </p>
                      <img
                        className=" cursor-pointer w-6 -rotate-90"
                        src={ArrowLeft}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-center pb-3">
                    <h4 className=" text-base">
                      Minimal Ukuran{" "}
                      <span className=" font-bold">(956 x 350px)</span>
                    </h4>
                  </div>
                </div>
              </div>

              <div className=" join-button mt-6">
                <div className="bg-background py-4 gap-4 flex items-center rounded-xl">
                  <img className="w-6" src={Chain} alt="" />
                  <h4 className="headline-4">Join Button</h4>
                </div>
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <form className="w-full" action="">
                    <label className="block font-bold mb-1" htmlFor="cta">
                      Call To Action <span className="text-red-500">*</span>
                    </label>
                    <input
                      placeholder="Example: Join Talent Academy Season 6"
                      defaultValue={dataMentor.link_cta}
                      onChange={(e) =>
                        setMentorForm({
                          ...mentorForm,
                          link_cta: e.target.value,
                        })
                      }
                      type="text"
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                    <label className="block font-bold mt-4 mb-1" htmlFor="cta">
                      <div className="flex gap-1">
                        <img className="w-6" src={Chain} alt="" />
                        Link Join Program{" "}
                        <span className="text-red-500">*</span>
                      </div>
                    </label>
                    <input
                      placeholder="https://"
                      type="text"
                      defaultValue={dataMentor.link_join_program}
                      onChange={(e) =>
                        setMentorForm({
                          ...mentorForm,
                          link_join_program: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                  </form>
                </div>
                <div className=" mt-4 flex gap-5 justify-end">
                  <div className=" w-56 py-2 flex">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="bg-gray-300 w-full py-2 rounded-md hover:bg-gray-200 text-black font-bold"
                    >
                      Batal
                    </button>
                  </div>
                  <div className=" w-56 py-2 flex">
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent the default form submission
                        handleAddTalentAcademy();
                      }}
                      className="bg-primary-1 w-full py-2 rounded-md hover:bg-primary-2 text-white font-bold"
                    >
                      Simpan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-2/5 h-80 rounded-3xl p-6">
            <div className="flex justify-center">
              <img className=" w-40" src={Mascot} alt="" />
            </div>
            <h3 className="mb-5 mt-5 headline-3 text-center">
              {deleteMessage}
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 px-4 py-2 w-1/2 rounded-lg"
              >
                Batal
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 w-1/2 hover:bg-red-400 text-white px-4 py-2 rounded-lg"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {isSaveModalOpen && (
        <div className="fixed inset-0 bg-gray-600 z-10 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-3xl p-6 relative">
            <button onClick={closeSaveModal} className="absolute top-6 right-6">
              <img className="w-5" src={Xbutton} alt="" />
            </button>
            <div className="flex justify-center">
              <img className="w-40" src={Mascot1} alt="" />
            </div>
            <div className="flex gap-1 mt-5 items-center">
              <img className="w-6 h-6" src={Ceklist} alt="" />
              <h3 className="headline-3 ">Saved Successfully</h3>
            </div>
          </div>
        </div>
      )}

      {isErrorModal && (
        <div className="fixed inset-0 bg-gray-600 z-10 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-3xl p-6 relative">
            <button
              onClick={closeErrorModal}
              className="absolute top-6 right-6"
            >
              <img className="w-5" src={Xbutton} alt="" />
            </button>
            <div className="flex justify-center">
              <img className="w-40" src={Mascot2} alt="" />
            </div>
            <div className="flex gap-1 mt-5 items-center">
              <img className="w-6 h-6" src={Coution} alt="" />
              <h3 className="headline-3 ">Upload Failed</h3>
            </div>
          </div>
        </div>
      )}

      {isCancelModalOpen && (
        <div className="fixed inset-0 z-10 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-3xl p-6 relative">
            <button
              onClick={closeCancelModal}
              className="absolute top-6 right-6"
            >
              <img className="w-5" src={Xbutton} alt="" />
            </button>
            <div className="flex justify-center">
              <img className="w-40" src={Mascot2} alt="" />
            </div>
            <div className="flex gap-1 mt-5 items-center">
              <img className="w-6 h-6" src={Coution} alt="" />
              <h3 className="headline-3 ">Progress is not saved</h3>
            </div>
          </div>
        </div>
      )}

      {isUploading && (
        <div className="fixed z-10 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="flex flex-col items-center bg-white p-5 rounded-xl">
            <svg
              className="animate-spin h-8 w-8 text-primary-1 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <p className="text-primary-1">Uploading article...</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CmsMentorForm;
