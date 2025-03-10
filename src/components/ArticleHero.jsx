/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import mascot1 from "/images/mascot-icons/pose=11.png";
import SearchbarArticle from "./SearcbarArticle";
import FilterIcon from "/images/mascot-icons/Filter.png";
import "./ArticleHero.css";

function ArticleHero({ onSearch, articles }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] =
    useState(false);

  const [sortOrder, setSortOrder] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMouseOverDropdown, setIsMouseOverDropdown] = useState(true);

  const selectCategories = (category) => {
    setSelectedCategories(category);
    setIsCategoryDropdownVisible(false);
  };

  useEffect(() => {
    const uniqueCategories = [];
    articles.forEach((article) => {
      if (
        !uniqueCategories.some((cat) => cat.category_id === article.category_id)
      ) {
        uniqueCategories.push({
          category_id: article.category_id,
          category_name: article.category_name,
          category_color: article.category_color,
        });
      }
    });
    setCategories(uniqueCategories);
  }, [articles]);

  useEffect(() => {
    console.log("Selected Categories:", selectedCategories);
  }, [selectedCategories]);

  const filterActive = function () {
    const filter = document.querySelector("#filter");
    filter.classList.toggle("scale-y-0");
    filter.classList.toggle("scale-y-100");
  };

  const showCategory = () => {
    if (!selectedCategories) {
      setIsCategoryDropdownVisible(true);
    }
  };

  const handleSearchSubmit = (term) => {
    setSearchTerm(term);
    onSearch(term, selectedCategories, sortOrder); // Panggil onSearch dengan semua state
  };

  return (
    <>
      <div className="article-section bg-orange-bg bg-cover bg-center flex flex-col px-6 py-14 lg:py-24 lg:px-0 items-center self-stretch">
        <div className="article-hero-container flex flex-col items-center justify-end lg:w-nav gap-3 flex-wrap relative">
          <div className="article-mascot flex items-start justify-center lg:size-52 size-32">
            <img className=" size-32 lg:size-52" src={mascot1} alt="" />
          </div>
          <div className="filter-container absolute flex pl-6 flex-col items-end gap-6">
            <button
              onClick={filterActive}
              className="filter-button border-2 border-black rounded-xl  bg-gray-200 hover:bg-gray-300 size-10 lg:size-14 flex flex-col items-center justify-center"
            >
              <img className=" size-4 lg:size-6" src={FilterIcon} alt="" />
            </button>
            <div
              id="filter"
              className="filter-pop bg-white scale-y-0 origin-top duration-500 absolute rounded-xl border-2 border-black flex flex-col items-start gap-6 p-6"
            >
              <div className="filter-title flex justify-between items-center self-stretch">
                <h4 className="headline-4">Kategori</h4>
                <div
                  onClick={filterActive}
                  className=" bg-neutral-1 size-6 flex justify-center items-center rounded-full cursor-pointer"
                >
                  <h2 className=" text-xl text-white -mt-1">x</h2>
                </div>
              </div>
              <div
                className="filter-drop py-4 flex justify-between durasi items-center self-stretch"
                onMouseEnter={showCategory}
              >
                {selectedCategories ? (
                  <div
                    style={{
                      backgroundColor: `${selectedCategories.category_color}`,
                    }}
                    className="selected flex py-1 px-3 justify-center items-center gap-3 rounded-3xl text-white"
                  >
                    <p>{selectedCategories.category_name}</p>
                    <button onClick={() => setSelectedCategories(null)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.4563 9.59484L9.60363 15.4475L8.54297 14.3868L14.3956 8.53418L15.4563 9.59484Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.59983 8.53223L15.4564 14.39L14.3956 15.4505L8.53906 9.59278L9.59983 8.53223Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <p className=" text-neutral-4 paragraph">Pilih Kategori</p>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.7502 3.25049L12.7502 20.7502L11.2502 20.7503L11.2502 3.25049L12.7502 3.25049Z"
                    fill="#001125"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.2502 4.00011C11.2502 7.52766 14.3524 10.4102 17.6603 10.4102L18.4103 10.4102L18.4103 8.91016L17.6603 8.91016C15.1487 8.91016 12.7502 6.6675 12.7502 4.00011L12.7502 3.25011L11.2502 3.25011L11.2502 4.00011Z"
                    fill="#001125"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.7502 4.00011C12.7502 7.52766 9.6481 10.4102 6.3402 10.4102L5.5902 10.4102L5.5902 8.91016L6.3402 8.91016C8.85178 8.91016 11.2502 6.6675 11.2502 4.00011L11.2502 3.25011L12.7502 3.25011L12.7502 4.00011Z"
                    fill="#001125"
                  />
                </svg>
              </div>
              {isCategoryDropdownVisible && (
                <div
                  className="category-drop duration-500 flex gap-4 flex-wrap items-start"
                  id="category"
                  onMouseEnter={() => {
                    setIsMouseOverDropdown(true);
                  }}
                  onMouseLeave={() => {
                    setIsMouseOverDropdown(false);
                    setIsCategoryDropdownVisible(false);
                  }}
                >
                  {categories.map((category) => {
                    return (
                      <button
                        key={category.category_id}
                        className="text-white px-4 py-1 rounded-full"
                        style={{
                          backgroundColor: `${category.category_color}`,
                        }}
                        onClick={() => selectCategories(category)}
                      >
                        {category.category_name}
                      </button>
                    );
                  })}
                </div>
              )}
              <div className="filter-time flex w-48 flex-col items-start gap-2">
                <h4 className="headline-4">Filter</h4>
                <div className="filter-choice flex items-start gap-4">
                  <button onClick={() => setSortOrder("newest")}>
                    <p
                      className={`paragraph px-4 py-1 rounded-full border-2 ${
                        sortOrder === "newest"
                          ? "text-black border-black"
                          : " text-neutral-5 border-l-neutral-5"
                      }`}
                    >
                      Terbaru
                    </p>
                  </button>
                  <button onClick={() => setSortOrder("oldest")}>
                    <p
                      className={`paragraph px-4 py-1 rounded-full border-2 ${
                        sortOrder === "oldest"
                          ? "text-black border-black"
                          : " text-neutral-5 border-l-neutral-5"
                      }`}
                    >
                      Terlama
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="article-find flex flex-col items-center gap-4">
            <h1 className="headline-1 text-black">Cari Artikel</h1>
            <p className="paragraph text-neutral-2">
              Cari artikel menarik untukmu!
            </p>
            <SearchbarArticle onSearch={handleSearchSubmit} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleHero;
