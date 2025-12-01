import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import netflix from "../../assets/images/Netflix-Logo-Streaming-Platform-765.png";
import './header.css'
const Header = () => {
    return (
      <div className="header-container">
        <ul>
       
            <img src={netflix} alt="" />
          
          <li>Netflix</li>
          <li>Home</li>
          <li>Tvshows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>MyList</li>
          <li>Browse by Languages</li>
        </ul>
        <div className="right-header">
          <li>
            <SearchIcon></SearchIcon>
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
    );
}

export default Header;
