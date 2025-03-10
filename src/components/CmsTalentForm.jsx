import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Hero.css";
import skyshareApi from "../utilities/skyshareApi";
import CmsNavCard from "./CmsNavCard";
import Arrow from "../../public/images/mascot-icons/Arrow - Down 3.png";
import File from "../../public/images/mascot-icons/Fill 337.png";
import Book from "../../public/images/mascot-icons/Document.png";
import Work from "../../public/images/mascot-icons/Work.png";
import Time from "../../public/images/mascot-icons/Time Circle.png";
import Edit1 from "../../public/images/mascot-icons/Edit Square.png";
import Delete from "../../public/images/mascot-icons/Delete.png";
import Location from "../../public/images/mascot-icons/Location.png";
import Show from "../../public/images/mascot-icons/Show.png";
import Close from "../../public/images/mascot-icons/Close Square.png";
import Ceklist from "../../public/images/mascot-icons/Tick Square.png";
import Add from "../../public/images/mascot-icons/Plus.png";
import Chain from "../../public/images/mascot-icons/Link.png";
import Xbutton from "../../public/images/mascot-icons/Fill 300.png";
import Mascot1 from "../../public/images/mascot-icons/pose=8.png";
import Mascot2 from "../../public/images/mascot-icons/pose=1.png";
import Coution from "../../public/images/mascot-icons/Info Square.png";
import Mascot from "../../public/images/mascot-icons/pose=2.png";
import ArrowLeft from "../../public/images/mascot-icons/Arrow - Down 3.png";

function CmsTalentForm() {
  const [talentForm, setTalentForm] = useState({ school_ids: [] });
  const [schools, setSchools] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isOpenGroups, setIsOpenGroups] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [deleteSchoolById, setDeleteSchoolById] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [imagePreviewUrlTimeline, setImagePreviewUrlTimeline] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [responseStatus, setResponseStatus] = useState("");
  const [dataGroups, setDataGroups] = useState([]);
  const [dataTalent, setDataTalent] = useState({});

  useEffect(() => {
    const getDataTalent = async () => {
      setIsUploading(true);
      try {
        const getDataFromServer = await skyshareApi.get(`/talent`);
        const talent = getDataFromServer.data.data;
        setDataTalent(talent);
        setTalentForm({
          ...talentForm,
          file_booklet: talent.file_booklet,
          link_cta: talent.link_cta,
          link_join_program: talent.link_join_program,
          school_id: talent.school_id,
        });
        setImagePreviewUrl(talent.gambar_alur_acara || "");
        setImagePreviewUrlTimeline(talent.gambar_timeline || "");
      } catch (error) {
        console.error(error);
      }
      setIsUploading(false);
    };
    getDataTalent();
  }, []);

  const handleAddTalentAcademy = async function () {
    const formData = new FormData();
    formData.append("file_booklet", talentForm.file_booklet);
    formData.append("gambar_alur_acara", talentForm.gambar_alur_acara);
    formData.append("gambar_timeline", talentForm.gambar_timeline);
    formData.append("link_cta", talentForm.link_cta);
    formData.append("school_id", JSON.stringify(talentForm.school_ids));
    formData.append("link_join_program", talentForm.link_join_program);

    setIsUploading(true);

    try {
      const responseFromServer = await skyshareApi({
        url: "/talent",
        method: "PUT",
        data: formData,
      });

      setResponseStatus(responseFromServer.data.data);

      if (responseFromServer.data.status === "success") {
        setIsSaveModalOpen(true);
      } else {
        setIsErrorModal(true);
      }
    } catch (error) {
      console.log(error);
      setIsErrorModal(true);
    } finally {
      setIsUploading(false);
    }
  };

  useEffect(() => {
    const getSchool = async function () {
      try {
        const response = await skyshareApi.get("/school");
        setSchools(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSchool();
  }, []);

  const getDataGroupById = async function (id) {
    try {
      const response = await skyshareApi.get(`/group/school/${id}`);
      setDataGroups(response.data.data);
    } catch (error) {
      onsole.log(error);
    }
  };

  // const handleCheckboxChange = (id) => {
  //   setTalentForm((prevForm) => {
  //     const newSchoolIds = prevForm.school_ids.includes(id)
  //       ? prevForm.school_ids.filter((schoolId) => schoolId !== id)
  //       : [...prevForm.school_ids, id];
  //     return {
  //       ...prevForm,
  //       school_ids: newSchoolIds,
  //     };
  //   });
  // };

  const Navigate = useNavigate();
  function handleNavigate(id) {
    Navigate(`/cms/talent/editschool/${id}`);
  }

  const handleSave = () => {
    setIsSaveModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeErrorModal = () => {
    setIsErrorModal(false);
  };

  const handleCancel = () => {
    setIsCancelModalOpen(true);
  };

  function closeSaveModal() {
    setTalentForm({ school_ids: [] });
    setImagePreviewUrl("");
    setImagePreviewUrlTimeline("");
    setDataTalent({});
    setIsSaveModalOpen(false);
  }

  const closeCancelModal = () => {
    setIsCancelModalOpen(false);
  };

  async function confirmDelete() {
    setIsModalOpen(false);
    if (!deleteSchoolById) return;
    setIsDeleting(true);
    try {
      await skyshareApi.delete(`/school/${deleteSchoolById}`);
      setSchools(schools.filter((school) => school.id !== deleteSchoolById));
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
    }
  }

  useEffect(() => {
    const getSchool = async function () {
      try {
        const response = await skyshareApi.get("/school");
        setSchools(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSchool();
  }, []);

  const handleDeleteSchool = () => {
    setIsModalOpen(true);
    setDeleteMessage("Yakin untuk menghapus sekolah?");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTalentForm({
        ...talentForm,
        gambar_alur_acara: file,
      });
      // setSelectedFileName(file.name);
      setImagePreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleFileChangeTimeline = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTalentForm({
        ...talentForm,
        gambar_timeline: file,
      });
      // setSelectedFileName(file.name);
      setImagePreviewUrlTimeline(URL.createObjectURL(file));
    }
  };

  function handleGroupsOpen(id) {
    if (!isOpenGroups) {
      setIsOpenGroups(isOpenGroups === id ? null : id);
    } else {
      setIsOpenGroups(false);
    }
  }

  return (
    <>
      <div className="bg-background flex flex-col pt-12 items-center self-stretch">
        <div className="content-1 flex gap-4">
          <div>
            <CmsNavCard />
          </div>
          <div className="w-full">
            <div>
              <h1 className="headline-1">Talent Academy</h1>
              <p className="paragraph">
                Kelola secara dinamis page Talent Academy disini.
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
                      defaultValue={dataTalent.file_booklet}
                      type="text"
                      onChange={(e) =>
                        setTalentForm({
                          ...talentForm,
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

              <div className="daftar-sekolah mt-6">
                <div className="bg-background flex justify-between rounded-xl mt-5 py-3 px-3">
                  <div className="flex items-center gap-5 ">
                    <img className=" w-6" src={Work} alt="" />
                    <h4 className="headline-4">Daftar Sekolah</h4>
                  </div>
                  <div className="bg-primary-1 flex items-center rounded-md px-2 py-2">
                    <Link
                      to="/cms/talent/addschool"
                      className="bg-primary-1 hover:bg-primary-2"
                    >
                      <img className=" w-6" src={Add} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <table>
                    <thead>
                      <tr>
                        <th className=" pr-8 pl-2 py-3"></th>
                        <th className=" pr-8 pl-2 py-3">No.</th>
                        <th className="pr-16 w-48 py-3">Nama Sekolah</th>
                        <th className="pr-20 py-3">Alamat</th>
                        <th className="px-16 py-3">Grup</th>
                        <th className="pl-10 py-3">Manage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schools.map((school, index) => {
                        return (
                          <tr key={school.id}>
                            <td className="mt-3">
                              {/* <input
                                value={school.id}
                                checked={talentForm.school_ids.includes(
                                  school.id
                                )}
                                onChange={() => handleCheckboxChange(school.id)}
                                type="checkbox"
                              /> */}
                            </td>
                            <td className="pl-3 py-4 text-left font-semibold text-sm">
                              {index + 1}
                            </td>
                            <td className="pl-1 py-4 text-left text-sm">
                              {school.nama_sekolah}
                            </td>
                            <td className="pr-6 py-4 text-left flex items-center text-sm gap-1">
                              <img className=" w-6 h-6" src={Location} alt="" />
                              {school.embed_map.substring(0, 20)}
                            </td>
                            <td className=" w-8 py-4">
                              {isOpenGroups === school.id && (
                                <div className=" bg-neutral-white absolute  mt-11 w-44 origin-bottom rounded-lg border-2 border-gray-300  px-2 py-1">
                                  {dataGroups && dataGroups.length > 0 ? (
                                    dataGroups.map((dataGroup, index) => {
                                      return (
                                        <div
                                          key={dataGroup?.id}
                                          className=" flex gap-2"
                                        >
                                          <p className="text-sm mt-1 font-bold">
                                            {index + 1}.
                                          </p>
                                          <p className="text-sm mt-1 font-bold">
                                            {dataGroup?.name}
                                          </p>
                                        </div>
                                      );
                                    })
                                  ) : (
                                    <p className="text-red-500 font-bold">
                                      Tidak Ada Group
                                    </p>
                                  )}
                                </div>
                              )}
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleGroupsOpen(school.id);
                                  getDataGroupById(school.id);
                                }}
                                className="border-2 border-gray-300 ml-4 rounded-full px-2  flex py-1.5 gap-2 items-center justify-center "
                              >
                                <img className=" w-6 h-6" src={Show} alt="" />
                                <p className="paragraph text-sm">Lihat Group</p>
                              </button>
                            </td>
                            <td className="pl-10 py-4 text-left flex gap-4">
                              <div className="w-10 flex items-center justify-center rounded-md py-2">
                                <button
                                  onClick={() => handleNavigate(school.id)}
                                  className="bg-primary-1 hover:bg-primary-2 px-2 py-2 rounded-lg flex justify-center items-center"
                                >
                                  <img className="w-5" src={Edit1} alt="" />
                                </button>
                              </div>
                              <div className="w-10 flex items-center justify-center rounded-md py-2">
                                <button
                                  onClick={() => {
                                    handleDeleteSchool();
                                    setDeleteSchoolById(school.id);
                                  }}
                                  className="bg-red-500 hover:bg-red-400 px-2 py-2 rounded-lg flex justify-center items-center"
                                >
                                  <img className="w-5" src={Delete} alt="" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
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
                      defaultValue={dataTalent.link_cta}
                      onChange={(e) =>
                        setTalentForm({
                          ...talentForm,
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
                      defaultValue={dataTalent.link_join_program}
                      onChange={(e) =>
                        setTalentForm({
                          ...talentForm,
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

      {isDeleting && (
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

      {isErrorModal && (
        <div className="fixed inset-0 bg-gray-600 z-10 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-3xl p-6 w-80 relative">
            <button
              onClick={closeErrorModal}
              className="absolute top-6 right-6"
            >
              <img className="w-5" src={Xbutton} alt="" />
            </button>
            <div className="flex justify-center">
              <img className="w-40" src={Mascot2} alt="" />
            </div>
            <div className="flex gap-1 mt-5 items-center justify-center">
              <img className="w-6 h-6" src={Coution} alt="" />
              <h3 className="headline-3 text-center ">Upload Article Failed</h3>
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

export default CmsTalentForm;
