import React, { useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import netflix from "../../assets/images/Netflix-Logo-Streaming-Platform-765.png";
import mobileNetflixLogo from "../../assets/images/Mobile-Netflix-Logo .png";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import './header.css'
const Header = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  
const isMobile = window.innerWidth <= 768;
 
  const handleCategoryShow = () => {
    setShowCategory(!showCategory);
  }
  const handleSearchInputShow = () => {
    setShowSearchInput(!showSearchInput);
  }
    return (
      <>
        <div className="header-container">
          <ul>
            <img
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setShowCategory(false);
              }}
              className="netflix-img"
              src={netflix}
              alt="Logo"
            />

            <img
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setShowCategory(false);
              }}
              className="netflix-mobile-logo"
              src={mobileNetflixLogo}
              alt="Logo"
            />

            <li className="home-li">
              <a
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setShowCategory(false);
                }}
                href="#"
              >
                Home
              </a>
            </li>
            <li className="tvshow-li">
              <a href="#tvShows">Tvshows</a>
            </li>

            <li className="movies-li">
              {" "}
              <a href="#netflixOriginals">Movies</a>
            </li>
            {/* <li className="latest-li">Latest</li> */}
            <li className="mylist-li">
              <a href="#">MyList</a>
            </li>
            <div
              onClick={() => {
                if (isMobile) handleCategoryShow();
                setShowSearchInput(false);
              }}
              onMouseEnter={() => {
                if (!isMobile) setShowCategory(true);
              }}
              onMouseLeave={() => {
                if (!isMobile) setShowCategory(false);
                else setShowCategory(false);
              }}
              className="movie-category"
            >
              <li>Category</li>
              <ArrowDropDownIcon onClick={() => handleCategoryShow()} />
              <ol
                className={
                  showCategory
                    ? "category-list"
                    : "category-list hide-category-list"
                }
              >
                <div>
                  <li>
                    <a
                      onClick={() => setShowCategory(false)}
                      href="#actionMovies"
                    >
                      <span>Action</span>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      onClick={() => setShowCategory(false)}
                      href="#comedyMovies"
                    >
                      <span>Comedy</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setShowCategory(false)}
                      href="#horrorMovies"
                    >
                      <span>Horror</span>
                    </a>
                  </li>
                </div>
                <div>
                  <li>
                    <a
                      onClick={() => setShowCategory(false)}
                      href="#romanceMovies"
                    >
                      <span>Romance</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setShowCategory(false)}
                      href="#documentaries"
                    >
                      <span>Documentary</span>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => setShowCategory(false)} href="#tvShows">
                      <span>Tv Shows</span>
                    </a>
                  </li>
                </div>
              </ol>
            </div>
            <li className="li-browse-language">
              <a href="#browseLanguages">Browse by Languages</a>
            </li>
          </ul>
          <div className="right-header">
            <li
              style={{
                display: "block",
                justifyContent: "end",
                alignItems: "end",
              }}
            >
              <SearchIcon
                onClick={() => {
                  handleSearchInputShow();
                  setShowCategory(false);
                }}
              ></SearchIcon>
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon></ArrowDropDownIcon>
            </li>
          </div>
        </div>
        {showSearchInput && (
          <div
            className="search-input-container"
            onClick={() => setShowCategory(false)}
          >
            <input className="search-input" type="text" placeholder="Search" />
            <p
              style={{ color: "white" }}
              className="search-input-arrow"
            >{`>`}</p>
          </div>
        )}
      </>
    );
}

export default Header;
