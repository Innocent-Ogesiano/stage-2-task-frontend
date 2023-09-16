import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./css/FeaturedMovies.css";

function Featuredovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_MOVIE_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`
        );
        console.log(response.data.results);
        setMovies(response.data.results);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchMovies();
  }, []);

  let movieList = movies.slice(0, 12);

  return (
    <div className="featured-movies">
        <div className="featured-movies_heading">
            <div className="featured-movies_title">Featured Movies</div>
            <div className="featured-movies_see_more">
                <span>see more</span>
                <img className="featured-movies_see_more_icon" src="/images/chevron-right.svg" alt="arrow right" />
            </div>

        </div>
      
      {isLoading ? (
        <p className="featured-movies__loading">Loading...</p>
      ) : error ? (
        <p className="featured-movies__error">An error occured</p>
      ) : (
        <div className="featured-movies-container">
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} className="featured-movies-child"/>
          ))}
        </div>
      )}
    </div>
  );
}

export default Featuredovies;