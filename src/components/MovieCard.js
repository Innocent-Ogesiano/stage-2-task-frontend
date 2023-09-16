import React from "react";
import "./css/MovieCard.css";

function MovieCard({ movie }) {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className="movie-card" data-testid="movie-card">
      <div className="movie-card_overlay">
        <div 
        className="poster"
        style={{background: `url(${imageUrl}), lightgray 50% / cover no-repeat`}}
        data-testid="movie-poster"
        >
            <div className="poster-rating">
                <div className="poster-rating-text">
                    <span className="poster-rating-text-text">TV SERIES</span>
                </div>
                <div className="poster-rating-favorite">
                    <div className="poster-rating-ellipse-icon">
                        <img className="poster-rating-favorite-icon" src="/images/heart.svg" alt="heart icon" />
                    </div>
                </div>
            </div>
        </div>
        <div className="movie-card_release_date" data-testid="movie-release-date">{movie.release_date}</div>
        <div className="movie-card_title" data-testid="movie-title">{movie.title}</div>
        <div className="movie-card_rating">
            <div className="movie-card_rating-imdb">
                <img className="movie-card_rating-imdb-logo" src="/images/imdb.png" alt="imdb logo" />
                <div className="movie-card_rating-imdb-rating">{movie.vote_average} / 10</div>
            </div>
            <div className="movie-card_rating-tomatoes">
                <img className="movie-card_rating-tomatoes-logo" src="/images/rotten-tomatoes.png" alt="rotten tomatoes logo" />
                <div className="movie-card_rating-tomatoes-rating">{movie.vote_average * 10}%</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;