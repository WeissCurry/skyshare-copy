import React from "react";
import Hero from "../components/Hero";
import Testimoni from "../components/Testimoni";
import HomeArticle from "../components/HomeArticle";
import Partner from "../components/Partner";

function Home() {
  return (
    <>
      <div className="home">
        <Hero />
        <Testimoni />
        <HomeArticle />
        <Partner />
      </div>
    </>
  );
}

export default Home;
