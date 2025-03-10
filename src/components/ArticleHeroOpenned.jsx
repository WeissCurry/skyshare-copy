import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import skyshareApi from "../utilities/skyshareApi";

function ArticleHeroOpenned() {
  const [article, setArticle] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getArticleById = async function () {
      try {
        const response = await skyshareApi.get(`/article/${id}`);
        setArticle(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getArticleById();
  }, [id]);
  console.log(article);
  const backgroundImageUrl = article.image_heading;
  return (
    <>
      <div className="hero bg-background bg-cover bg-center flex flex-col pb-4 pt-24 items-center self-stretch h-auto w-auto"></div>
      {/* <div style={{ backgroundImage: `url(${backgroundImageUrl})` }} className="hero bg-cover bg-center flex flex-col pb-24 pt-24 items-center self-stretch h-auto"> */}
        {/* <div className="content text-white flex justify-center items-end"></div> */}
      {/* </div> */}
    </>
  );
}

export default ArticleHeroOpenned;
