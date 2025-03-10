import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import skyshareApi from "../utilities/skyshareApi";
import "./Hero.css";
import CmsNavCard from "./CmsNavCard";
import Edit1 from "../../public/images/mascot-icons/Edit Square.png";
import Delete from "../../public/images/mascot-icons/Delete.png";
import Add from "../../public/images/mascot-icons/Plus.png";
import Group from "../../public/images/mascot-icons/3 User.png";
import Chain from "../../public/images/mascot-icons/Link.png";
import ArrowLeft from "../../public/images/mascot-icons/Arrow - Down 3.png";
import Xbutton from "../../public/images/mascot-icons/Fill 300.png";
import Mascot2 from "../../public/images/mascot-icons/pose=1.png";
import Coution from "../../public/images/mascot-icons/Info Square.png";
import Mascot from "../../public/images/mascot-icons/pose=2.png";
import Mascot1 from "../../public/images/mascot-icons/pose=8.png";
import Ceklist from "../../public/images/mascot-icons/Tick Square.png";

function CmsTalentAddSchoolForm() {
  const [schoolForm, setSchoolForm] = useState({});
  const [isErrorModal, setIsErrorModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [responseStatus, setResponseStatus] = useState("");
  const [dataGroups, setDataGroups] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [groupById, setGroupById] = useState(null);
  const Navigate = useNavigate();
  console.log(schoolForm, "data");

  const handleAddSchool = async function () {
    const formData = new FormData();
    formData.append("gambar_logo_sekolah", schoolForm.gambar_logo_sekolah);
    formData.append("nama_sekolah", schoolForm.nama_sekolah);
    formData.append("alamat", schoolForm.alamat);
    formData.append("embed_map", schoolForm.embed_map);
    setIsUploading(true);
    try {
      const responseFromServer = await skyshareApi({
        url: "/school/add",
        method: "POST",
        data: formData,
      });
      setResponseStatus(responseFromServer.data);
      if (responseFromServer.data.status === "success") {
        setIsSaveModalOpen(true);
      } else {
        setIsErrorModal(true);
      }
      console.log(responseStatus, "====> res");
    } catch (error) {
      console.log(error);
    } finally {
      setIsUploading(false);
    }
  };

  const deleteGroup = async function () {
    setIsModalOpen(false);
    setIsDeleting(true);
    try {
      await skyshareApi.delete(`/group/${groupById}`);
      setDataGroups(dataGroups.filter((group) => group.id !== groupById));
    } catch (error) {
      console.log();
      setIsErrorModal(true);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    const getDataGroups = async function () {
      try {
        const response = await skyshareApi.get("/group");
        setDataGroups(response.data.data);
      } catch (error) {
        onsole.log(error);
      }
    };

    getDataGroups();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeErrorModal = () => {
    setIsErrorModal(false);
  };

  const handleCancel = () => {
    setIsCancelModalOpen(true);
  };

  const closeSaveModal = () => {
    setSchoolForm({});
    setImagePreviewUrl("");
    setIsSaveModalOpen(false);
    Navigate("/cms/talentacademy");
  };

  const closeCancelModal = () => {
    setIsCancelModalOpen(false);
    Navigate("/cms/talentacademy");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSchoolForm({
        ...schoolForm,
        gambar_logo_sekolah: file,
      });
      // setSelectedFileName(file.name);
      setImagePreviewUrl(URL.createObjectURL(file));
    }
  };

  function handleNavigate(id) {
    Navigate(`/cms/talent/editgroup/${id}`);
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
              <h1 className="headline-1">Add School</h1>
              <p className="paragraph">Masukkan data pada field yang tertera</p>
            </div>
            <div className="shadow-md bg-neutral-white mt-10 border-2 border-black rounded-xl pb-5 px-3 w-full">
              <div className=" logo-sekolah mt-6">
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <h4 className=" font-bold text-base">
                    Upload Logo Sekolah{" "}
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

              <div className=" join-button mt-6">
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <form className="w-full" action="">
                    <label className="block font-bold mb-1" htmlFor="cta">
                      Nama Sekolah <span className="text-red-500">*</span>
                    </label>
                    <input
                      placeholder="Masukkan nama sekolah"
                      type="text"
                      onChange={(e) =>
                        setSchoolForm({
                          ...schoolForm,
                          nama_sekolah: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                    <label className="block font-bold mt-4 mb-1" htmlFor="cta">
                      <div className="flex gap-1">
                        Alamat Sekolah <span className="text-red-500">*</span>
                      </div>
                    </label>
                    <input
                      placeholder="Masukkan alamat sekolah"
                      type="text"
                      onChange={(e) =>
                        setSchoolForm({
                          ...schoolForm,
                          alamat: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                    <label className="block font-bold mt-4 mb-1" htmlFor="cta">
                      <div className="flex gap-1">
                        Masukkan Embed Google Maps (HTML){" "}
                        <span className="text-red-500">*</span>
                      </div>
                    </label>
                    <input
                      placeholder="Example : https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6197699153263!2d106.71407467533372!3d-6.3135771617850365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e55a184cee4d%3A0xc038909b2253775e!2sSMA%20Negeri%209%20Kota%20Tangerang%20Selatan!5e0!3m2!1sid!2sid!4v1714293197913!5m2!1sid!2sid"
                      type="text"
                      onChange={(e) =>
                        setSchoolForm({
                          ...schoolForm,
                          embed_map: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                  </form>
                </div>
                {/* <div className="daftar-sekolah mt-6">
                  <div className="bg-background flex justify-between rounded-xl mt-5 py-3 px-3">
                    <div className="flex items-center gap-5 ">
                      <img className=" w-6" src={Group} alt="" />
                      <h4 className="headline-4">Group</h4>
                    </div>
                    <div className="bg-primary-1 flex items-center rounded-md px-2 py-2">
                      <Link
                        to="/cms/talent/addgroup"
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
                          <th className=" pr-8 pl-2 py-3">No.</th>
                          <th className="pr-24 w-48 py-3">Nama Grup</th>
                          <th className="pr-24 py-3">Link Instagram</th>
                          <th className="pl-16 py-3">Manage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataGroups.map((dataGroup, index) => {
                          return (
                            <tr key={dataGroup.id}>
                              <td className="pl-3 py-4 text-left font-semibold text-sm">
                                {index + 1}
                              </td>
                              <td className="pl-1 py-4 text-left text-sm">
                                {dataGroup.name}
                              </td>
                              <td className="pl-10 py-4 text-left">
                                <div className="flex  items-center text-sm gap-1">
                                  <img
                                    className=" w-6 h-6"
                                    src={Chain}
                                    alt=""
                                  />
                                  {dataGroup.link}
                                </div>
                              </td>
                              <td className="pl-24 py-4 text-left flex gap-4">
                                <div className="w-10 flex items-center justify-center rounded-md py-2">
                                  <button
                                    onClick={() => handleNavigate(dataGroup.id)}
                                    className="bg-primary-1 hover:bg-primary-2 px-2 py-2 rounded-lg flex justify-center items-center"
                                  >
                                    <img className="w-5" src={Edit1} alt="" />
                                  </button>
                                </div>
                                <div className="w-10 flex items-center justify-center rounded-md py-2">
                                  <button
                                    onClick={(e) => {
                                      setGroupById(dataGroup.id);
                                      setIsModalOpen(true);
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
                </div> */}
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
                      onClick={(e) => {
                        e.preventDefault(); // Prevent the default form submission
                        handleAddSchool();
                      }}
                      type="submit"
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
              Yakin untuk menghapus Group?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 px-4 py-2 w-1/2 rounded-lg"
              >
                Batal
              </button>
              <button
                onClick={deleteGroup}
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
            <p className="text-primary-1">Uploading school...</p>
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
            <p className="text-primary-1">Deleting Group...</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CmsTalentAddSchoolForm;
