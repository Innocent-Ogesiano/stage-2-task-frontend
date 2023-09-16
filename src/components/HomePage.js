import React from "react";
import "./css/HomePage.css";
import FeaturedMovies from "./FeaturedMovies";
import Header from "./Header";

function HomePage() {
  return (
    <div className="home-page">
        <Header />
        <FeaturedMovies />
    </div>
  );
}

export default HomePage;