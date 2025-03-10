import React, { useState } from "react";
import SearchIcon from "/images/mascot-icons/search.png";

// eslint-disable-next-line react/prop-types
function SearchbarArticle({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="search-bar w-full flex justify-between bg-white rounded-lg"
    >
      <input
        type="text"
        name="article"
        id="article-search"
        autoFocus={true}
        placeholder="Masukkan judul artikel"
        className="w-full outline-none"
        value={searchTerm}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="search-button bg-primary-1 hover:bg-primary-2 flex justify-center items-center gap-2 rounded-lg p-3 lg:px-5 lg:py-4"
      >
        <p className="text-base text-white font-bold hidden lg:block">Search</p>
        <img className="w-5" src={SearchIcon} alt="Search" />
      </button>
    </form>
  );
}

export default SearchbarArticle;
