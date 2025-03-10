import React, { useState, useEffect } from "react";
import ArticleHero from "../components/ArticleHero";
import ArticleList from "../components/ArticleList";
import skyshareApi from "../utilities/skyshareApi";

function Article() {
  const [searchTerm, setSearchTerm] = useState("");
  const [article, setArticle] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  useEffect(() => {
    const getAllArticle = async function () {
      try {
        const response = await skyshareApi.get("/article");
        setArticle(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllArticle();
  }, []);

  useEffect(() => {
    console.log(searchTerm, sortOrder, selectedCategories);
  });

  const handleSearch = (term, selectedCategories, sortOrder) => {
    setSearchTerm(term);
    setSelectedCategories(selectedCategories);
    setSortOrder(sortOrder);
  };

  return (
    <div className="article-section">
      <ArticleHero onSearch={handleSearch} articles={article} />
      <ArticleList
        searchTerm={searchTerm}
        selectedCategories={selectedCategories}
        sortOrder={sortOrder}
        articles={article}
      />
    </div>
  );
}

export default Article;
