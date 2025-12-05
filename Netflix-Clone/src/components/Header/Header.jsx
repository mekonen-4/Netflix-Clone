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
            <img className="netflix-img" src={netflix} alt="" />

            <img
              className="netflix-mobile-logo"
              src={mobileNetflixLogo}
              alt=""
            />

            <li className="home-li">Home</li>
            <li className="tvshow-li">Tvshows</li>
            <li className="movies-li">Movies</li>
            <li className="latest-li">Latest</li>
            <li className="mylist-li">MyList</li>
            <div className="movie-category">
              <li
                onClick={() => {
                  handleCategoryShow();
                  setShowSearchInput(false);
                }}
               
                onMouseEnter={() => {
                  setShowCategory(true);
                  setShowSearchInput(false);

                }}
                
              >
                Category
              </li>
              <ArrowDropDownIcon onClick={() => handleCategoryShow()} />
              <ol
                className={
                  showCategory
                    ? "category-list"
                    : "category-list hide-category-list"
                }
              >
                <div>
                  <li>Action</li>
                  <li>Comedy</li>
                  <li>horor</li>
                </div>
                <div>
                  <li>Romance</li>
                  <li>Documentary</li>
                  <li>Tv Shows</li>
                </div>
              </ol>
            </div>
            <li className="li-browse-language">Browse by Languages</li>
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
