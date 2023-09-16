import React from "react";
import "./css/Header.css";

function Header() {
  return (
    <div className="header">
        <div className="header-nav">
            <div className="header-logo">
                <img className="logo" src="/images/logo.png" alt="logo" />
            </div>
            <div className="header-search">
                <div >
                    <div className="search-container">
                        <input type="text" className="search search-input" placeholder="What do you want to watch?" />
                    </div>
                </div>
            </div>
            <div className="header-menu">
                <div className="header-menu-item">Sign in</div>
                <img className="header-menu-icon" src="/images/menu.png" alt="menu icon" />
            </div>
        </div>
        <div className="header-content">
            <div className="description-box">
                <div className="description-box-title">
                    <span>John Wick 3 : Parabellum</span>
                </div>
                <div className="rating">
                    <div className="imdb-container">
                        <div className="imdb">
                            <img className="imdb-logo" src="/images/imdb.png" alt="imdb logo" />
                            <div className="imdb-rating">86.0 / 100</div>
                        </div>
                        <div className="rotten-tomatoes">
                            <img className="rotten-tomatoes-logo" src="/images/rotten-tomatoes.png" alt="rotten tomatoes logo" />
                            <div className="rotten-tomatoes-rating">97%</div>
                        </div>
                    </div>
                    <div className="metacritic">
                        <p className="metacritic-text">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                    </div>
                    <div className="trailer">
                        <img className="trailer-logo" src="/images/play.svg" alt="trailer logo" />
                        <div className="trailer-text">Watch Trailer</div>
                    </div>
                </div>
            </div>
            <div className="pagination-box">
                <div className="pagination-arrow"></div>
                <div className="pagination">
                    <div className="pagination-item">1</div>
                    <div className="pagination-item">2</div>
                    <div className="pagination-item">3</div>
                    <div className="pagination-item">4</div>
                    <div className="pagination-item">5</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;