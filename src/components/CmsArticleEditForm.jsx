import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import CmsNavCard from "./CmsNavCard";
import Arrow from "../../public/images/mascot-icons/Arrow-down.png";
import File from "../../public/images/mascot-icons/Image 3.png";
import Plus from "../../public/images/mascot-icons/Plus-0.png";
import Delete from "../../public/images/mascot-icons/Delete.png";
import Del from "../../public/images/mascot-icons/Delete-0.png";
import Mascot from "../../public/images/mascot-icons/pose=2.png";
import Add from "../../public/images/mascot-icons/Plus.png";
import Xbutton from "../../public/images/mascot-icons/Fill 300.png";
import Ceklist from "../../public/images/mascot-icons/Tick Square.png";
import Coution from "../../public/images/mascot-icons/Info Square.png";
import Mascot1 from "../../public/images/mascot-icons/pose=8.png";
import Mascot2 from "../../public/images/mascot-icons/pose=1.png";
import Chain from "../../public/images/mascot-icons/Link.png";
import Close from "../../public/images/mascot-icons/Close Square.png";
import ReactQuill from "react-quill";
import skyshareApi from "../utilities/skyshareApi";
// import "react-quill/dist/quill.snow.css";

function CmsArticleEditForm() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownAddOpen, setIsDropdownAddOpen] = useState(false);
  const [colorInputValet, setColorInputValet] = useState("#FFFFFF");
  const [colorInputHexa, setColorInputHexa] = useState("#FFFFFF");
  const [ishidenCategori, setIsHidenCategory] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [isCategoryNoSelected, setIsCategoryNoSelected] = useState(true);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [isModalOpenDelCategory, setIsModalOpenDelCategory] = useState(false);
  const [categories, setCategories] = useState([]);
  const [articleById, setArticleById] = useState({});
  const [categoryId, setCategoryId] = useState("");
  const [articleForm, setArticleForm] = useState({});
  const [selectedFileName, setSelectedFileName] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [selectedCategory, setSelectedCategory] = useState({});
  const [idCategory, setIdCategory] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const { selectedCategoryById, setSelectedCategoryById } = useState({});
  const { id } = useParams();

  const handleArticleData = async function () {
    const formData = new FormData();
    formData.append("image_heading", articleForm.image_heading);
    formData.append("title", articleForm.title);
    formData.append("content", articleForm.content);
    formData.append("link", articleForm.link);
    formData.append("category_id", articleForm.category_id);
    setIsUploading(true);
    try {
      const responseFromServer = await skyshareApi({
        url: `/article/${id}`,
        method: "put",
        data: formData,
      });
      if (responseFromServer.data.status === "success") {
        setIsSaveModalOpen(true);
      } else {
        setIsErrorModal(true);
      }
    } catch (error) {
      setIsErrorModal(true);
      console.log(error);
    } finally {
      setIsUploading(false);
    }
  };

  const getCategoryByid = async function (id) {
    try {
      const response = await skyshareApi.get(`category/${id}`);
      // console.log(response.data, "==> res");
      setSelectedCategory(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryAdd = async function () {
    console.log("nfj");
    const inputDataCategory = {
      name: categoryName,
      color: colorInputHexa,
    };
    try {
      const response = await skyshareApi({
        url: "/category/add",
        method: "POST",
        data: inputDataCategory,
      });
      const newCategory = response.data.data;
      setCategories([...categories, newCategory]); // Update the state with the new category
      setCategoryName("");
      setColorInputHexa("#FFFFFF");
      setColorInputValet("#FFFFFF");
      setIsDropdownAddOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async function () {
    try {
      const response = await skyshareApi.get("/category");
      setCategories(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getCategories();
  }, []);

  const deleteCategory = async function () {
    try {
      const response = await skyshareApi.delete(`/category/${idCategory}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getDataArticle = async () => {
      try {
        const getDataFromServer = await skyshareApi.get(`/article/${id}`);
        const article = getDataFromServer.data.data;
        setArticleById(article);
        setArticleForm({
          ...articleForm,
          title: article.title,
          content: article.content,
          link: article.link,
          category_id: article.category_id,
        });
        setSelectedFileName(article.image_heading || "");
        setImagePreviewUrl(article.image_heading || "");
        setIdCategory(articleById.category_id);
        setIsCategorySelected(true);
        setIsCategoryNoSelected(false);

        if (article.category_id) {
          getCategoryByid(article.category_id);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getDataArticle();
  }, [id]);

  useEffect(() => {
    setColorInputHexa(colorInputValet);
  }, [colorInputValet]);

  useEffect(() => {
    setColorInputValet(colorInputHexa);
  }, [colorInputHexa]);

  const handleHideCategory = () => {
    setIsHidenCategory(!ishidenCategori);
    if (ishidenCategori) setIsHidenCategory(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (isDropdownAddOpen) setIsDropdownAddOpen(false);
  };

  const handleDropDownAddOpen = () => {
    setIsDropdownAddOpen(!isDropdownAddOpen);
    if (!isDropdownAddOpen) setIsDropdownOpen(true);
  };

  const closeErrorModal = () => {
    setIsErrorModal(false);
  };

  // const handleSave = (e) => {
  //   handleArticleData();
  //   e.preventDefault();
  //   setIsSaveModalOpen(true);
  // };

  const handleCancel = () => {
    setIsCancelModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalOpenDelCategory(false);
  };

  const confirmDelete = () => {
    setIsModalOpen(true);
    handleDeleteImage();
    setIsModalOpen(false);
  };

  function confirmDeleteCategory() {
    deleteCategory();
    setIsModalOpenDelCategory(false);
  }

  const Navigate = useNavigate();
  const closeSaveModal = () => {
    setIsSaveModalOpen(false);
    Navigate("/cms/article");
  };

  const closeCancelModal = () => {
    setIsCancelModalOpen(false);
    Navigate("/cms/article");
  };

  const handleCategoryValue = () => {
    setCategoryId(articleById.category_id);
  };

  const handleDeleteCategory = () => {
    setIsModalOpenDelCategory(true);
    setDeleteMessage("Yakin untuk menghapus category?");
    console.log(deleteMessage);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setArticleForm({
        ...articleForm,
        image_heading: file,
      });
      setSelectedFileName(file.name);
      setImagePreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDeleteImage = () => {
    setArticleForm({
      ...articleForm,
      image_heading: null,
    });
    setSelectedFileName("");
    setImagePreviewUrl("");
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
              <h1 className="headline-1">Edit Article</h1>
              <p className="paragraph">Masukkan data pada field yang tertera</p>
            </div>
            <div className="shadow-md bg-neutral-white mt-10 border-2 border-black rounded-xl pb-5 px-3 w-full">
              <div className="alur-acara">
                <div className="bg-neutral-white p-4 gap-4 flex items-center">
                  <h4 className="font-bold text-base">
                    Upload gambar heading{" "}
                    <span className="text-base font-bold text-orange-300">
                      *
                    </span>
                  </h4>
                </div>
                <div className="bg-neutral-white rounded-xl border-2 border-gray-400 px-6 pt-7 pb-4">
                  <div className="border-2 flex justify-center items-center mb-4 border-gray-400 rounded-xl h-16">
                    <div className="flex justify-between px-4 w-full">
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 ">
                          <img className="w-7" src={File} alt="" />
                          <p className="paragraph">
                            {selectedFileName.substring(0, 80) ||
                              articleById.image_heading?.substring(0, 80)}
                          </p>
                        </div>
                        <input
                          accept="image/*"
                          id="image_heading"
                          onChange={handleFileChange}
                          className="w-10 opacity-0 absolute"
                          type="file"
                        />
                      </div>
                      <div className="w-10 flex items-center justify-center rounded-md py-2">
                        <button
                          onClick={() => {
                            setIsModalOpen(true);
                            setDeleteMessage(
                              "Yakin untuk menghapus image heading?"
                            );
                          }}
                          className="bg-red-500 hover:bg-red-400 px-2 py-2 rounded-lg flex justify-center items-center"
                        >
                          <img className="w-5" src={Delete} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center pb-3">
                    <h4 className="text-base">
                      Minimal Ukuran{" "}
                      <span className="font-bold">(956 x 350px)</span>
                    </h4>
                  </div>
                  {imagePreviewUrl && (
                    <div className="flex justify-center pb-3">
                      <img
                        src={imagePreviewUrl}
                        alt="Image Preview"
                        className="rounded-xl border-2 border-gray-400"
                        style={{ maxWidth: "100%", maxHeight: "300px" }}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="join-button">
                <div className="bg-neutral-white py-4 gap-4 flex items-center">
                  <form className="w-full" onSubmit={handleArticleData}>
                    <label className="block font-bold mb-1" htmlFor="title">
                      Judul <span className="text-orange-400">*</span>
                    </label>
                    <input
                      initialValue={articleById.title}
                      value={articleForm.title}
                      onChange={(e) =>
                        setArticleForm({
                          ...articleForm,
                          title: e.target.value,
                        })
                      }
                      placeholder="Bagaimana Mentorship Membakar Inovasi"
                      type="text"
                      className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    />
                    <label className="block font-bold mt-4 mb-1" htmlFor="cta">
                      <div className="flex gap-1">
                        Kategori <span className="text-orange-400">*</span>
                      </div>
                    </label>
                    <div
                      className={`w-full px-4 duration-500 origin-top ${
                        isDropdownAddOpen
                          ? "h-80"
                          : isDropdownOpen
                          ? "h-56"
                          : "h-14"
                      } border-gray-300 border-2 rounded-lg outline-none`}
                    >
                      <div className="mt-3.5 flex justify-between">
                        <div className="flex items-center justify-center">
                          {isCategorySelected && (
                            <div
                              style={{
                                backgroundColor: `${selectedCategory.color}`,
                              }}
                              className=" -mt-1 px-3 py-1 rounded-full bg-slate-400"
                            >
                              <p className="font-bold text-white">
                                {selectedCategory.name}
                              </p>
                            </div>
                          )}
                          {isCategoryNoSelected && (
                            <p className="text-gray-400">--Pilih kategory--</p>
                          )}
                        </div>
                        <div className="flex">
                          <button type="button" onClick={handleDropdownToggle}>
                            <img
                              className={`w-6 duration-500 ${
                                isDropdownOpen ? "rotate-180" : "rotate-0"
                              }`}
                              src={Arrow}
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                      {/* <div
                        className={`mt-2 gap-4 flex-wrap bg-neutral-white absolute w-1/2 pb-4 ${
                          isDropdownOpen && ishidenCategori ? "flex" : "hidden"
                        }`}
                      >
                        {categories?.map((category) => {
                          return (
                            <button
                              key={category.id}
                              value={category.id}
                              onClick={() => {
                                setCategoryId(category.id);
                                handleDeleteCategory();
                              }}
                              type="button"
                              style={{ backgroundColor: category.color }}
                              className={`px-3 flex items-center gap-2 py-1  text-white font-bold rounded-full`}
                            >
                              {category.name}
                              <img className=" w-6" src={Close} alt="" />
                            </button>
                          );
                        })}
                      </div> */}
                      <div
                        className={`mt-2 gap-4 flex-wrap ${
                          !isDropdownOpen ? "hidden" : "flex"
                        }`}
                      >
                        {categories?.map((category) => {
                          return (
                            <button
                              name="category_id"
                              initialValue={articleById.category_id}
                              value={category.id}
                              onClick={(e) => {
                                console.log(category.id);
                                console.log(categoryId);
                                setArticleForm({
                                  ...articleForm,
                                  category_id: e.target.value,
                                });
                                setCategoryId(category.id);
                                getCategoryByid(category.id);
                                setIsCategoryNoSelected(false);
                                setIsCategorySelected(true);
                                setIsDropdownOpen(false);
                              }}
                              type="button"
                              style={{
                                backgroundColor:
                                  categoryId === category.id
                                    ? "#fff" // Ganti dengan warna yang diinginkan saat tombol dipilih
                                    : category.color,
                                border:
                                  categoryId === category.id
                                    ? "2px solid #000"
                                    : "none",

                                color:
                                  categoryId === category.id ? "#000" : "#FFF", // Ganti dengan warna yang diinginkan saat tombol dipilih
                              }}
                              className="px-3 py-1 text-white font-bold rounded-full"
                            >
                              {category.name}
                            </button>
                          );
                        })}
                      </div>
                      <div
                        className={`${
                          !isDropdownOpen
                            ? "opacity-0"
                            : "opacity-1 duration-1000"
                        } mt-10 justify-between flex`}
                      >
                        <button
                          type="button"
                          onClick={handleDropDownAddOpen}
                          className="flex px-2 py-1 rounded-full bg-neutral-white shadow shadow-slate-400 gap-1 items-center"
                        >
                          <img className="w-5" src={Plus} alt="" />
                          <p className="text-slate-700">Tambah Kategori</p>
                        </button>
                        {/* <button
                          onClick={handleHideCategory}
                          type="button"
                          className="flex px-2 py-1 rounded-full bg-neutral-white shadow shadow-slate-400 gap-1 items-center"
                        >
                          <img className="w-5" src={Del} alt="" />
                          <p className="text-slate-700">Hapus Kategori</p>
                        </button> */}
                      </div>
                      {isDropdownAddOpen && (
                        <div className="mt-4 duration-1000 bg-background py-2 gap-3 flex px-3 rounded-2xl">
                          <div className="block w-2/4">
                            <label
                              className="block font-bold mb-1"
                              htmlFor="cta"
                            >
                              Kategori Baru{" "}
                              <span className="text-orange-400">*</span>
                            </label>
                            <input
                              placeholder="Masukkan nama kategori"
                              onChange={(e) => setCategoryName(e.target.value)}
                              type="text"
                              className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                              required
                            />
                          </div>
                          <div className="block w-80">
                            <label
                              className="block font-bold mb-1"
                              htmlFor="cta"
                            >
                              Warna(Hex Code){" "}
                              <span className="text-orange-400">*</span>
                            </label>
                            <div className="w-full h-11 bg-neutral-white px-4 py-2 border-gray-300 border-2 rounded-lg outline-none flex gap-2">
                              <input
                                value={colorInputValet}
                                onChange={(e) =>
                                  setColorInputValet(e.target.value)
                                }
                                className="w-6 h-6 inline-block rounded-full p-0 cursor-pointer"
                                type="color"
                              />
                              <input
                                value={colorInputHexa}
                                onChange={(e) =>
                                  setColorInputHexa(e.target.value)
                                }
                                placeholder="#FFFFFF"
                                className=" outline-none"
                                type="text"
                                required
                              />
                            </div>
                          </div>
                          <div className=" flex justify-center items-center w-10">
                            <div className="bg-primary-1 flex mt-7 items-center rounded-md px-2 py-2">
                              <button
                                type="button"
                                onClick={handleCategoryAdd}
                                className="bg-primary-1 hover:bg-primary-2"
                              >
                                <img className=" w-6" src={Add} alt="" />
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className=" mt-4">
                      <label className="block font-bold mb-1" htmlFor="cta">
                        Berikan Isi <span className="text-orange-400">*</span>
                      </label>
                    </div>
                  </form>
                </div>

                <div className=" -z-50">
                <Editor
                  style={{ zIndex: -20 }}
                  initialValue={articleById.content}
                  value={articleForm.content}
                  onEditorChange={(content) =>
                    setArticleForm({ ...articleForm, content })
                  }
                  apiKey="gemyn0v2v0dyeaicn1p0fm8bje0jldn312dh4cz45rnzg68q"
                  init={{
                    menubar: false,
                    plugins:
                      "anchor autolink charmap emoticons image link lists media searchreplace table visualblocks wordcount",
                    toolbar:
                      "undo redo | formatselect | bold italic underline strikethrough | link image media table | alignleft aligncenter alignright alignjustify | bullist numlist | emoticons charmap | removeformat",
                    tinycomments_mode: "embedded",
                    tinycomments_author: "Author name",
                    mentions_selector: ".mentions",
                    mergetags_list: [
                      { value: "First.Name", title: "First Name" },
                      { value: "Email", title: "Email" },
                    ],
                    ai_request: (request, respondWith) =>
                      respondWith.string(() =>
                        Promise.reject("See docs to implement AI Assistant")
                      ),
                  }}
                />
                </div>
                <div className=" mt-4">
                  <label className=" font-bold mb-1 flex gap-2" htmlFor="cta">
                    <img className=" w-6" src={Chain} alt="" />
                    Link <span className="text-orange-400">(Opsional) *</span>
                  </label>
                  <input
                    onChange={(e) =>
                      setArticleForm({
                        ...articleForm,
                        link: e.target.value,
                      })
                    }
                    placeholder="https://belajarmentorship.co.id/pembelajaran"
                    type="text"
                    className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg outline-none"
                    defaultValue={articleById.link}
                  />
                </div>
                <div className="mt-4 flex gap-5 justify-end">
                  <div className="w-56 py-2 flex">
                    <button
                      onClick={handleCancel}
                      type="button"
                      className="bg-gray-300 w-full py-2 rounded-md hover:bg-gray-200 text-black font-bold"
                    >
                      Batal
                    </button>
                  </div>
                  <div className="w-56 py-2 flex">
                    <button
                      onClick={handleArticleData}
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
        <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 flex justify-center items-center">
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
      {isModalOpenDelCategory && (
        <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 flex justify-center items-center">
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
                onClick={confirmDeleteCategory}
                className="bg-red-500 w-1/2 hover:bg-red-400 text-white px-4 py-2 rounded-lg"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {isSaveModalOpen && (
        <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 flex justify-center items-center">
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
        <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 flex justify-center items-center">
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
              <h3 className="headline-3 text-center ">Update Article Failed</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CmsArticleEditForm;
